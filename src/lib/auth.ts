import { createIsomorphicFn } from "@tanstack/react-start";
import type { Session } from "@supabase/supabase-js";

import { supabase } from "@/integrations/supabase/client";

export const getBrowserSession = createIsomorphicFn()
  .server(() => null)
  .client(async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    return session;
  });

export const waitForBrowserSession = createIsomorphicFn()
  .server(() => null)
  .client(async (timeoutMs = 6000) => {
    const existing = await getBrowserSession();
    if (existing) return existing;

    return new Promise<Session | null>((resolve) => {
      let settled = false;

      const finish = (session: Session | null) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        subscription.unsubscribe();
        resolve(session);
      };

      const timer = window.setTimeout(() => finish(null), timeoutMs);
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, session) => {
        if (session) finish(session);
        if (event === "SIGNED_OUT") finish(null);
      });
    });
  });
