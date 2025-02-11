import { Form, Navigate, useLocation, useNavigate } from "react-router";
import type { IContact } from "~/interfaces/contact";

export default function FormContact() {

    const location = useLocation();
    const contact: IContact = location.state;

    const navigate = useNavigate();

    return (
        <div>

            <h1 className="text-2xl text-center text-gray-700 font-bold  my-12">{!contact ? "NEW" : "EDIT"} CONTACT</h1>
            <Form>
                <div className="mx-auto max-w-xs space-y-4">
                    <div>
                        <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" id="firstName" name="firstName" defaultValue={contact? contact.firstName : ""} className="w-full border-2 border-gray-500 rounded-md p-2 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200" placeholder="John" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" id="lastName" name="lastName" defaultValue={contact? contact.lastName : ""} className="w-full border-2 border-gray-500 rounded-md p-2 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200" placeholder="Doe" />
                    </div>
                    <div>
                        <label htmlFor="job" className="mb-1 block text-sm font-medium text-gray-700">Job</label>
                        <input type="text" id="job" name="job" defaultValue={contact? contact.job : ""} className="w-full border-2 border-gray-500 rounded-md p-2 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200" placeholder="Doe" />
                    </div>
                    <div>
                        <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">Company</label>
                        <input type="text" id="company" name="company" defaultValue={contact? contact.company : ""} className="w-full border-2 border-gray-500 rounded-md p-2 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200" placeholder="Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" defaultValue={contact? contact.email : ""} className="w-full border-2 border-gray-500 rounded-md p-2 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200" placeholder="johndoe@example.com" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
                        <input type="tel" id="phone" name="phone" defaultValue={contact? contact.phone : ""} className="w-full border-2 border-gray-500 rounded-md p-2 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200" placeholder="999666333" />
                    </div>
                    <div>
                        <label htmlFor="rating" className="mb-1 block text-sm font-medium text-gray-700">Rating</label>
                        <input type="text" id="rating" name="rating" defaultValue={contact? contact.rating : ""} className="w-full border-2 border-gray-500 rounded-md p-2 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200" placeholder="⭐⭐⭐⭐⭐" />
                    </div>
                    <div className="flex items-center gap-4 mb">                        
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">Status Active?</label>
                        <input id="state" type="checkbox" defaultChecked={contact? contact.state : false} className="size-5 rounded-sm text-indigo-600 bg-gray-900  border-indigo-300 focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-500" />
                    </div>

                    <div className="flex items-center justify-between gap-6">
                        <button type="submit" className="cursor-pointer w-full px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300">{!contact ? "Save" : "Update"}</button>
                        <button type="button" onClick={() => navigate(-1)} className="cursor-pointer w-full px-5 py-2.5 rounded-lg text-sm font-medium text-gray-900 border-gray-200  focus:outline-none bg-white border  hover:bg-gray-100 hover:text-indigo-800 focus:ring-4 focus:ring-gray-100">Cancel</button>
                    </div>
                </div>
            </Form>

        </div>
    )

}