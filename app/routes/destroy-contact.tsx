import { redirect } from "react-router";
import type { Route } from "./+types/destroy-contact";


export async function clientAction({ params } : Route.ClientActionArgs) {    

    const url:string = import.meta.env.VITE_BASE_URL;
    const response = await fetch(`${url}/${params.idContact}`, { method: "DELETE" });
    console.log(response);
    const data = await response.json();
    console.log(data);

    return redirect("/dashboard/contacts");


}