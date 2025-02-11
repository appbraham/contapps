import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/login.tsx"),
    route("dashboard","layouts/sidebar.tsx",[
        route("home", "routes/home.tsx"),  
        route("contacts", "routes/contact.tsx"),
        route("contacts/new", "routes/new-contact.tsx"),
        route("contacts/:idContact/edit", "routes/edit-contact.tsx"),
        route("contacts/:idContact/destroy", "routes/destroy-contact.tsx"),
        route("settings", "routes/settings.tsx"),
    ])

] satisfies RouteConfig;
