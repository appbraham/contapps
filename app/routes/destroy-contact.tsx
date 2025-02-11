import { redirect } from "react-router";
import type { Route } from "./+types/destroy-contact";


export async function clientAction({ params } : Route.ClientActionArgs) {    
    const url:string = import.meta.env.VITE_BASE_URL;
    await fetch(`${url}/${params.idContact}`, { method: "DELETE" });
    return redirect("/dashboard/contacts");
}