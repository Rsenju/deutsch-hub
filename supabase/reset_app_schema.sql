-- Deutsch Hub app schema reset.
-- This removes only Deutsch Hub tables/types/functions in public.
-- Supabase Auth users live in auth.users and are not dropped by this script.

DROP TABLE IF EXISTS public.tts_cache CASCADE;
DROP TABLE IF EXISTS public.chat_messages CASCADE;
DROP TABLE IF EXISTS public.chat_threads CASCADE;
DROP TABLE IF EXISTS public.xp_events CASCADE;
DROP TABLE IF EXISTS public.user_vocab_srs CASCADE;
DROP TABLE IF EXISTS public.user_lesson_progress CASCADE;
DROP TABLE IF EXISTS public.exercises CASCADE;
DROP TABLE IF EXISTS public.flashcards CASCADE;
DROP TABLE IF EXISTS public.lessons CASCADE;
DROP TABLE IF EXISTS public.chapters CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;
DROP TABLE IF EXISTS public.user_roles CASCADE;

DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS public.has_role(UUID, public.app_role) CASCADE;
DROP FUNCTION IF EXISTS public.set_updated_at() CASCADE;

DROP TYPE IF EXISTS public.chat_mode CASCADE;
DROP TYPE IF EXISTS public.srs_state CASCADE;
DROP TYPE IF EXISTS public.app_role CASCADE;
DROP TYPE IF EXISTS public.cefr_level CASCADE;

NOTIFY pgrst, 'reload schema';
