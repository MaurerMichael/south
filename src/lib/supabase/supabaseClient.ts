import { createClient, getSupabase } from "@supabase/auth-helpers-sveltekit";
import {env} from '$env/dynamic/public'
import type { Handle } from "@sveltejs/kit";
export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL || "", env.PUBLIC_SUPABASE_ANON_KEY || "")


export const sessionHook: Handle = async ({event, resolve}) => {
  const {session, supabaseClient} = await getSupabase(event)

  event.locals.sb = supabaseClient
  event.locals.session = session

  return resolve(event)
}
