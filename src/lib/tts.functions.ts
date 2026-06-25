import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { createHash } from "crypto";
import { z } from "zod";

const DEFAULT_VOICE = "EXAVITQu4vr4xnSDxMaL"; // Sarah, multilingual-friendly

const TtsSchema = z.object({
  text: z.string().min(1).max(800),
  voice: z.string().optional(),
});

function hashText(text: string, voice: string) {
  return createHash("sha256").update(`${voice}|${text}`).digest("hex");
}

export const synthesizeGerman = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => TtsSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const voice = data.voice ?? DEFAULT_VOICE;
    const text_hash = hashText(data.text, voice);

    const { data: cached } = await supabaseAdmin
      .from("tts_cache")
      .select("audio")
      .eq("text_hash", text_hash)
      .eq("voice_id", voice)
      .maybeSingle();
    if (cached?.audio) {
      const buf = decodeBytea(cached.audio as unknown as string | Uint8Array);
      return { audioBase64: Buffer.from(buf).toString("base64"), cached: true };
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) throw new Error("Missing ELEVENLABS_API_KEY");
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: { "xi-api-key": apiKey, "Content-Type": "application/json" },
        body: JSON.stringify({
          text: data.text,
          model_id: "eleven_multilingual_v2",
          voice_settings: { stability: 0.5, similarity_boost: 0.75 },
        }),
      },
    );
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`ElevenLabs ${res.status}: ${err}`);
    }
    const ab = await res.arrayBuffer();
    const bytes = new Uint8Array(ab);
    await supabaseAdmin.from("tts_cache").insert({
      text_hash,
      voice_id: voice,
      audio: `\\x${Buffer.from(bytes).toString("hex")}`,
      bytes: bytes.byteLength,
    });
    return { audioBase64: Buffer.from(bytes).toString("base64"), cached: false };
  });

function decodeBytea(value: string | Uint8Array): Uint8Array {
  if (value instanceof Uint8Array) return value;
  if (typeof value === "string") {
    if (value.startsWith("\\x")) return new Uint8Array(Buffer.from(value.slice(2), "hex"));
    return new Uint8Array(Buffer.from(value, "base64"));
  }
  return new Uint8Array();
}
