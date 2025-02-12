import type { IContact } from "~/interfaces/contact";
import type { Route } from "./+types/contact";
import { Link } from "react-router";
import ContactTable from "~/components/contact-table";

export async function clientLoader({ params } : Route.ClientActionArgs) {

    const url = import.meta.env.VITE_BASE_URL;

    const response = await fetch(url);

    if(!response) throw new Response("Contacts not found ", { status: 404 })

    const contacts:IContact[] = await response.json();

    return contacts;
}

export default function Contact({ loaderData } : Route.ComponentProps) {

    const contacts: IContact[] = loaderData;
    

    return (
        <section className="h-full flex flex-col gap-6 justify-center px-20 bg-gray-400/50">
           

            <Link to={"/dashboard/contacts/new"} className="w-fit flex gap-2 items-center rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-indigo-700 hover:bg-indigo-700 focus:ring focus:ring-indigo-200 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19V5M5 12h14"/></g></svg>
                <span>New Contact</span>
            </Link>

            <ContactTable contacts={contacts} />
        </section>

    )

}