CREATE TABLE IF NOT EXISTS public.learning_errors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  level public.cefr_level NOT NULL,
  skill TEXT NOT NULL CHECK (skill IN ('hoeren', 'lesen', 'schreiben', 'sprechen', 'grammatik', 'wortschatz')),
  category TEXT NOT NULL DEFAULT 'general',
  tag TEXT,
  source TEXT NOT NULL,
  source_ref TEXT,
  prompt TEXT NOT NULL,
  expected TEXT,
  actual TEXT,
  explanation TEXT,
  severity INTEGER NOT NULL DEFAULT 2 CHECK (severity BETWEEN 1 AND 5),
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS learning_errors_user_created_idx
  ON public.learning_errors(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS learning_errors_user_unresolved_idx
  ON public.learning_errors(user_id, level, skill, created_at DESC)
  WHERE resolved_at IS NULL;

CREATE INDEX IF NOT EXISTS learning_errors_user_tag_idx
  ON public.learning_errors(user_id, tag)
  WHERE tag IS NOT NULL;

ALTER TABLE public.learning_errors ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.learning_errors TO authenticated;
GRANT ALL ON public.learning_errors TO service_role;

DROP POLICY IF EXISTS "learning_errors self select" ON public.learning_errors;
CREATE POLICY "learning_errors self select"
  ON public.learning_errors
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "learning_errors self insert" ON public.learning_errors;
CREATE POLICY "learning_errors self insert"
  ON public.learning_errors
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "learning_errors self update" ON public.learning_errors;
CREATE POLICY "learning_errors self update"
  ON public.learning_errors
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "learning_errors self delete" ON public.learning_errors;
CREATE POLICY "learning_errors self delete"
  ON public.learning_errors
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

NOTIFY pgrst, 'reload schema';

