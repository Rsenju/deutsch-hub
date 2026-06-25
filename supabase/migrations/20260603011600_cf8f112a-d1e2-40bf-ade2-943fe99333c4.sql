
-- 1) Remove user-facing INSERT policy on xp_events; only service_role (server) inserts
DROP POLICY IF EXISTS "xp self insert" ON public.xp_events;

-- 2) Add self DELETE policy on profiles for completeness
CREATE POLICY "profiles self delete"
ON public.profiles
FOR DELETE
TO authenticated
USING (auth.uid() = id);

-- 3) Lock down user_roles writes — only admins (no user-facing write paths)
CREATE POLICY "user_roles admin insert"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "user_roles admin update"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "user_roles admin delete"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
