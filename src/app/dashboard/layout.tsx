import type { ReactNode } from "react";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <DashboardHeader />

      <div className="flex flex-1 min-w-0">
        <DashboardSidebar />

        <main
          className="
            min-w-0
            flex-1
            max-w-full
            overflow-x-hidden
            lg:p-8
            sm:p-5
            p-3
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
