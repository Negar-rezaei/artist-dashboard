"use client";

import { usePathname } from "next/navigation";

import { SidebarMenuItem } from "@/components/ui/sidebar-menu-item";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "New Post",
    href: "/dashboard/posts/new",
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="xl:w-64 shrink-0 bg-sidebar-menu-bg lg:px-4 px-2 py-6">
      {" "}
      <nav className="flex flex-col gap-2">
        {navigation.map((item) => {
          return (
            <SidebarMenuItem
              key={item.href}
              title={item.title}
              href={item.href}
              selected={pathname === item.href}
            />
          );
        })}
      </nav>
    </aside>
  );
}
