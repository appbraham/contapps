import type { IContact } from "~/interfaces/contact";
import type { Route } from "./+types/contact";
import ContactTable from "~/components/contact-table";
import ChipState from "~/components/chip-state";
import { Form, Link } from "react-router";

export async function clientLoader({ params } : Route.ClientActionArgs) {

    const url = import.meta.env.VITE_BASE_URL;

    const response = await fetch(url);

    if(!response) throw new Response("Contacts not found ", { status: 404 })

    const contacts = await response.json();

    return contacts;
}

export default function Contact({ loaderData } : Route.ComponentProps) {

    const contactResponse  = loaderData;
    const contacts = contactResponse as IContact[];
    

    return (
        <section className="flex flex-col gap-6 items-center justify-center py-4 bg-gray-400/50">
            <h1 className="text-2xl text-gray-700 font-bold">Contacts</h1>

            


            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr className="*:text-center *:px-4 *:py-4 *:font-medium *:text-gray-700">
                        <th scope="col">Name</th>
                        <th scope="col">State</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Role</th>
                        <th scope="col">Company</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {
                        contacts.slice(-10).reverse().map((contact : IContact) => {
                        return (
                            <tr key={contact.id} className="hover:bg-indigo-50">
                                <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="relative h-10 w-10">
                                        <img className="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{contact.firstName} {contact.lastName}</div>
                                        <div className="text-gray-400">{contact.email}</div>
                                        <div className="text-gray-400">{contact.id}</div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <ChipState state={contact.state} />
                                </td>
                                <td className="p-4">
                                    <span className="px-2 py-1">{contact.phone}</span>
                                </td>
                                <td className="p-4">
                                    <span className="px-2 py-1">{contact.job}</span>
                                </td>
                                <td className="p-4">
                                    <span className="px-2 py-1">{contact.company}</span>                                            
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-4">
                                        
                                        <Form action={`${contact.id}/destroy`} method="post"
                                            onSubmit={(event) => {
                                                const response = confirm("Are you sure you want to delete this contact?");
                                                if (!response) event.preventDefault();
                                            }}>
                                            <button type="submit" aria-label="Delete contact" className="cursor-pointer">
                                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg>
                                            </button>
                                        </Form>

                                        <Link state={contact}  to="form" aria-label="Edit contact">
                                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487zm0 0L19.5 7.125"/></svg>
                                        </Link>

                                        {
                                            /*   

                                        <Form action={`${contact.id}/edit`}>
                                            <button type="submit" aria-label="Edit contact">
                                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487zm0 0L19.5 7.125"/></svg>
                                            </button>
                                        </Form>
                                                */
                                            }
                                    </div>
                                </td>
                            </tr>
                            )
                        })
                    }                                                          
                </tbody>
            </table>
        </div>






            {/* <ContactTable contacts={contacts.slice(0, 10)} /> */}
        </section>

    )

}