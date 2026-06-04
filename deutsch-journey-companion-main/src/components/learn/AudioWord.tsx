import { useCallback, useRef, useState } from "react";
import { AlertCircle, Loader2, Volume2 } from "lucide-react";
import { synthesizeGerman } from "@/lib/tts.functions";
import { useServerFn } from "@tanstack/react-start";
import { cn } from "@/lib/utils";

export function AudioWord({ text, className, label }: { text: string; className?: string; label?: string }) {
  const tts = useServerFn(synthesizeGerman);
  const [loading, setLoading] = useState(false);
  const [fallback, setFallback] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playBrowserVoice = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return false;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice =
      voices.find((voice) => voice.lang.toLowerCase().startsWith("de")) ??
      voices.find((voice) => voice.lang.toLowerCase().includes("de")) ??
      null;
    utterance.lang = utterance.voice?.lang ?? "de-DE";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
    return true;
  }, [text]);

  const play = useCallback(async () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }
    setLoading(true);
    try {
      const res = await tts({ data: { text } });
      const audio = new Audio(`data:audio/mpeg;base64,${res.audioBase64}`);
      audioRef.current = audio;
      audio.play();
      setFallback(false);
    } catch (e) {
      console.error(e);
      setFallback(playBrowserVoice());
    } finally {
      setLoading(false);
    }
  }, [playBrowserVoice, tts, text]);

  return (
    <button
      type="button"
      onClick={play}
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-left hover:bg-accent/40 transition-colors",
        className,
      )}
      title={fallback ? "Ouvir em alemao (voz do navegador)" : "Ouvir em alemao"}
    >
      <span>{label ?? text}</span>
      {loading ? (
        <Loader2 className="h-3 w-3 animate-spin opacity-70" />
      ) : fallback ? (
        <AlertCircle className="h-3 w-3 text-amber-500" />
      ) : (
        <Volume2 className="h-3 w-3 opacity-50" />
      )}
    </button>
  );
}
