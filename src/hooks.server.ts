import '$lib/supabase/supabaseClient'
import { sequence } from "@sveltejs/kit/hooks";
import { sessionHook } from "$lib/supabase/supabaseClient";
import { routingHook } from "$lib/routing";


export const handle = sequence(sessionHook, routingHook)
