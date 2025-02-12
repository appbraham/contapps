import { Outlet, useNavigation } from "react-router";
import type { NavItem } from "~/components/sidebar-link";
import SidebarLink from "~/components/sidebar-link";

export default function SidebarLayout() {

    const navigation = useNavigation();
    
    return (
        <main className="min-h-dvh flex gap-4">
            <nav className="fixed top-0 left-0 min-h-dvh max-w-56 w-full flex flex-col text-white bg-gray-700 pb-8">
                <h2 className="text-2xl font-bold px-4 py-8">Dashboard</h2>

                {
                    navItems.map(( item ) => (
                        <SidebarLink key={item.to} {...item} />
                    ))
                }
            </nav>

            <section className={`ml-56 w-full ${navigation.state === "loading" && "opacity-50 transition-opacity duration-300" }`}>
                <Outlet />
            </section>


        </main>
    );
}

const navItems: NavItem[] = [
    {
        to: "/dashboard/home",
        label: "Home",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 21v-7.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 12 10.04 12 10.6 12h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 12.76 15 13.04 15 13.6V21M2 9.5l9.04-6.78c.344-.258.516-.387.705-.437a1 1 0 0 1 .51 0c.189.05.36.179.705.437L22 9.5M4 8v9.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 21 6.08 21 7.2 21h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 19.48 20 18.92 20 17.8V8l-6.08-4.56c-.688-.516-1.033-.775-1.41-.874a2 2 0 0 0-1.02 0c-.377.1-.722.358-1.41.874L4 8Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        
    },
    {
        to: "/dashboard/contacts",
        label: "Contacts",
        icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="#ffffff"><path d="M30 1H5.118c-1.451 0-2.784.978-3.06 2.402A3.005 3.005 0 0 0 5 7v2c-1.654 0-3 1.346-3 3s1.346 3 3 3v2c-1.654 0-3 1.346-3 3s1.346 3 3 3v2a3.005 3.005 0 0 0-2.942 3.598C2.335 30.022 3.667 31 5.118 31H30a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM9 4c0 .551-.449 1-1 1H5c-.551 0-1-.449-1-1s.449-1 1-1h3c.551 0 1 .449 1 1zM8 29H5c-.551 0-1-.449-1-1s.449-1 1-1h3c.551 0 1 .449 1 1s-.449 1-1 1zm-4-9c0-.551.449-1 1-1h3c.551 0 1 .449 1 1s-.449 1-1 1H5c-.551 0-1-.449-1-1zm0-8c0-.551.449-1 1-1h3c.551 0 1 .449 1 1s-.449 1-1 1H5c-.551 0-1-.449-1-1zm5.723 17c.171-.295.277-.634.277-1a2 2 0 0 0-2-2H7v-4h1a2 2 0 0 0 0-4H7v-4h1a2 2 0 0 0 0-4H7V6h1a2 2 0 0 0 2-2c0-.366-.106-.705-.277-1H29l.001 26H9.723zM20.94 13.045C21.533 12.416 22 11.444 22 10a3 3 0 1 0-6 0c0 1.444.467 2.416 1.06 3.045-1.721.219-3.06 1.676-3.06 3.455V18h1v-1.5c0-1.378 1.122-2.5 2.5-2.5h3c1.378 0 2.5 1.122 2.5 2.5V18h1v-1.5c0-1.779-1.339-3.236-3.06-3.455zM19 8c1.103 0 2 .897 2 2 0 2.491-1.578 3-2 3-.422 0-2-.509-2-3 0-1.103.897-2 2-2zm-5 13h10v1H14v-1zm0 2h10v1H14v-1z"/></svg>
        
    },
    {
        to: "/dashboard/settings",
        label: "Settings",
        icon: <svg width="24" height="24" viewBox="0 0 1024 1024" fill="#ffffff"><path d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"/></svg>
    },
    {
        to: "/",
        label: "Logout",
        icon: <svg width="24" height="24" viewBox="0 -0.5 25 25" fill="none"><path d="M11.75 9.874a.75.75 0 0 0 1.5 0h-1.5ZM13.25 4a.75.75 0 0 0-1.5 0h1.5ZM9.81 6.662a.75.75 0 0 0-.62-1.366l.62 1.366ZM5.5 12.16l-.75-.004v.013l.75-.009Zm7 6.84.009-.75h-.018l.009.75Zm7-6.84.75.009v-.013l-.75.004Zm-3.69-6.864a.75.75 0 1 0-.62 1.366l.62-1.366Zm-2.56 4.578V4h-1.5v5.874h1.5ZM9.19 5.296a7.581 7.581 0 0 0-4.44 6.86l1.5.008a6.081 6.081 0 0 1 3.56-5.502l-.62-1.366ZM4.75 12.17a7.671 7.671 0 0 0 7.759 7.581l-.018-1.5a6.17 6.17 0 0 1-6.241-6.099l-1.5.018Zm7.741 7.581a7.67 7.67 0 0 0 7.759-7.581l-1.5-.018a6.171 6.171 0 0 1-6.241 6.099l-.018 1.5Zm7.759-7.594a7.581 7.581 0 0 0-4.44-6.86l-.62 1.366a6.081 6.081 0 0 1 3.56 5.502l1.5-.008Z" fill="#ffffff"/></svg>,
        className: "mt-auto"
    },
];