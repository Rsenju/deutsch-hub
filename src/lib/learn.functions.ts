import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const LevelSchema = z.object({ level: z.enum(["A1", "A2", "B1", "B2"]) });
const SlugSchema = z.object({ slug: z.string() });

export const listChapters = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => LevelSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: chapters, error } = await supabaseAdmin
      .from("chapters")
      .select("id, slug, n, title_pt, title_de, is_exam, sort")
      .eq("level", data.level)
      .order("sort", { ascending: true });
    if (error) throw new Error(error.message);
    return { chapters: chapters ?? [] };
  });

export const getChapter = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => SlugSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: chapter, error } = await supabaseAdmin
      .from("chapters")
      .select("id, slug, n, level, title_pt, title_de, is_exam")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!chapter) return { chapter: null, lessons: [], exercises: [] };
    const { data: lessons } = await supabaseAdmin
      .from("lessons")
      .select("id, slug, sort, title_pt, title_de, rule, content, notes, vocab, examples")
      .eq("chapter_id", chapter.id)
      .order("sort", { ascending: true });
    const lessonSlugs = (lessons ?? []).map((l) => l.slug);
    const { data: exercises } = await supabaseAdmin
      .from("exercises")
      .select("id, lesson_slug, sort, type, payload")
      .in("lesson_slug", lessonSlugs.length ? lessonSlugs : ["__none__"])
      .order("sort", { ascending: true });
    return { chapter, lessons: lessons ?? [], exercises: exercises ?? [] };
  });

export const completeLesson = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ lessonId: z.string().uuid(), lessonSlug: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { userId } = context;
    await supabaseAdmin
      .from("user_lesson_progress")
      .upsert({ user_id: userId, lesson_id: data.lessonId }, { onConflict: "user_id,lesson_id" });
    const { awardXpInternal } = await import("./learn-awards.server");
    await awardXpInternal(userId, "lesson", data.lessonSlug, 20);
    return { ok: true };
  });

const SubmitSchema = z.object({
  lessonSlug: z.string(),
  totalXp: z.number().min(0).max(1000),
  correct: z.number(),
  total: z.number(),
});

export const submitQuiz = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => SubmitSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { awardXpInternal } = await import("./learn-awards.server");
    await awardXpInternal(context.userId, "quiz", data.lessonSlug, data.totalXp);
    return { ok: true };
  });
