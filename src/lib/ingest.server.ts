import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { A1_MODULES, A1_LESSONS, A1_EXERCISES } from "@/content/a1";
import { A2_MODULES, A2_LESSONS, A2_EXERCISES, A2_FLASHCARDS } from "@/content/a2";
import { B1_MODULES, B1_LESSONS, B1_EXERCISES, B1_FLASHCARDS } from "@/content/b1";
import { B2_MODULES, B2_LESSONS, B2_EXERCISES, B2_FLASHCARDS } from "@/content/b2";
import { A1_FLASHCARDS } from "@/content/flashcards";

type Mod = { slug: string; n: number; pt: string; de: string; isExam?: boolean };
type Lesson = {
  slug: string;
  sort: number;
  title_pt: string;
  title_de: string;
  rule?: string;
  content?: string;
  notes?: unknown[];
  vocab?: unknown[];
  examples?: unknown[];
};
type Ex = { type: string; q?: string; a?: unknown; opts?: unknown; exp?: string; xp?: number };

async function ingestLevel(
  level: "A1" | "A2" | "B1" | "B2",
  modules: Mod[],
  lessons: Record<string, Lesson[]>,
  exercises: Record<string, Ex[]>,
) {
  const chapterRows = modules.map((m, i) => ({
    level,
    n: m.n,
    slug: m.slug,
    title_pt: m.pt,
    title_de: m.de,
    is_exam: !!m.isExam,
    sort: i,
  }));
  const { error: chErr } = await supabaseAdmin
    .from("chapters")
    .upsert(chapterRows, { onConflict: "slug" });
  if (chErr) throw new Error(`chapters: ${chErr.message}`);

  const { data: dbChapters } = await supabaseAdmin
    .from("chapters")
    .select("id, slug")
    .eq("level", level);
  const idBySlug = new Map(dbChapters?.map((c) => [c.slug, c.id]) ?? []);

  const lessonRows: any[] = [];
  for (const [chSlug, lns] of Object.entries(lessons)) {
    const chapter_id = idBySlug.get(chSlug);
    if (!chapter_id) continue;
    for (const l of lns) {
      lessonRows.push({
        chapter_id,
        slug: l.slug,
        sort: l.sort,
        title_pt: l.title_pt,
        title_de: l.title_de,
        rule: l.rule ?? null,
        content: l.content ?? null,
        notes: l.notes ?? [],
        vocab: l.vocab ?? [],
        examples: l.examples ?? [],
      });
    }
  }
  if (lessonRows.length) {
    const { error } = await supabaseAdmin
      .from("lessons")
      .upsert(lessonRows, { onConflict: "slug" });
    if (error) throw new Error(`lessons: ${error.message}`);
  }

  // Exercises: clear and reinsert per lesson_slug
  const exSlugs = Object.keys(exercises);
  if (exSlugs.length) {
    await supabaseAdmin.from("exercises").delete().in("lesson_slug", exSlugs);
    const exRows: any[] = [];
    for (const [lessonSlug, exs] of Object.entries(exercises)) {
      exs.forEach((ex, i) =>
        exRows.push({
          lesson_slug: lessonSlug,
          sort: i,
          type: ex.type,
          payload: ex,
        }),
      );
    }
    if (exRows.length) {
      const { error } = await supabaseAdmin.from("exercises").insert(exRows);
      if (error) throw new Error(`exercises: ${error.message}`);
    }
  }

  return { chapters: chapterRows.length, lessons: lessonRows.length };
}

export async function runIngestA1() {
  return ingestLevel("A1", A1_MODULES as Mod[], A1_LESSONS as Record<string, Lesson[]>, A1_EXERCISES as Record<string, Ex[]>);
}

export async function runIngestA2() {
  return ingestLevel("A2", A2_MODULES as Mod[], A2_LESSONS as Record<string, Lesson[]>, A2_EXERCISES as Record<string, Ex[]>);
}

export async function runIngestB1() {
  return ingestLevel("B1", B1_MODULES as Mod[], B1_LESSONS as Record<string, Lesson[]>, B1_EXERCISES as Record<string, Ex[]>);
}

export async function runIngestB2() {
  return ingestLevel("B2", B2_MODULES as Mod[], B2_LESSONS as Record<string, Lesson[]>, B2_EXERCISES as Record<string, Ex[]>);
}

type Fc = { slug: string; level: string; chapter: number; theme?: string; front: string; back: string; ex_de?: string; ex_pt?: string };
export async function runIngestFlashcards() {
  const rowsBySlug = new Map<string, any>();
  let duplicateCount = 0;

  for (const f of [...(A1_FLASHCARDS as Fc[]), ...(A2_FLASHCARDS as Fc[]), ...(B1_FLASHCARDS as Fc[]), ...(B2_FLASHCARDS as Fc[])]) {
    if (rowsBySlug.has(f.slug)) duplicateCount += 1;
    rowsBySlug.set(f.slug, {
      slug: f.slug,
      level: f.level,
      chapter_n: f.chapter,
      theme: f.theme ?? null,
      front: f.front,
      back: f.back,
      ex_de: f.ex_de ?? null,
      ex_pt: f.ex_pt ?? null,
    });
  }

  const rows = Array.from(rowsBySlug.values());
  const { error } = await supabaseAdmin.from("flashcards").upsert(rows, { onConflict: "slug" });
  if (error) throw new Error(`flashcards: ${error.message}`);
  return { flashcards: rows.length, duplicatesIgnored: duplicateCount };
}
