import type { ReactNode } from "react";
import { NavLink } from "react-router";

export interface NavItem {
    to: string;
    icon: ReactNode;
    label: string;
    className?: string;
}

export default function SidebarLink({ to, icon, label, className="" } : NavItem) {

    const baseStyles = "flex gap-4 items-center p-4 transition-all hover:bg-indigo-600";

    return (
        <NavLink to={to} className={({ isActive }) => `${isActive && "bg-indigo-600"} ${baseStyles} ${className}`}>
            {icon}
            <span>{label}</span>
        </NavLink>
    );

}