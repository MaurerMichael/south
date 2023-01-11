import { type Handle, redirect } from "@sveltejs/kit";




export const routingHook: Handle = async ({event, resolve}) => {
  if(event.url.pathname.startsWith("/spark")) {
    if(!event.locals.session) {
      throw redirect(303, "/login")
    }
  }

  return resolve(event)
}
