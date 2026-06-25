CREATE TABLE IF NOT EXISTS public.exam_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  level public.cefr_level NOT NULL,
  simulado_slug TEXT NOT NULL,
  simulado_title TEXT NOT NULL,
  total_score INTEGER NOT NULL,
  max_score INTEGER NOT NULL,
  percent INTEGER NOT NULL,
  passed BOOLEAN NOT NULL DEFAULT false,
  elapsed_seconds INTEGER NOT NULL DEFAULT 0,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  self_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  section_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS exam_attempts_user_created_idx
  ON public.exam_attempts(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS exam_attempts_user_level_idx
  ON public.exam_attempts(user_id, level, created_at DESC);

ALTER TABLE public.exam_attempts ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, DELETE ON public.exam_attempts TO authenticated;
GRANT ALL ON public.exam_attempts TO service_role;

DROP POLICY IF EXISTS "exam_attempts self select" ON public.exam_attempts;
CREATE POLICY "exam_attempts self select"
  ON public.exam_attempts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "exam_attempts self insert" ON public.exam_attempts;
CREATE POLICY "exam_attempts self insert"
  ON public.exam_attempts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "exam_attempts self delete" ON public.exam_attempts;
CREATE POLICY "exam_attempts self delete"
  ON public.exam_attempts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

NOTIFY pgrst, 'reload schema';

