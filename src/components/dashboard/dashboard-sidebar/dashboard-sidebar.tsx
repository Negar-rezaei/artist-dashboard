"use client";

import { usePathname } from "next/navigation";

import { SidebarMenuItem } from "@/components/ui/sidebar-menu-item";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Posts",
    href: "/dashboard/posts",
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-sidebar-menu-bg px-4 py-6">
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
