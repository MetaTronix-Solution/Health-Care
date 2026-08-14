import type { ReactNode } from "react";
import { AdminSidebar } from "@/src/components/admin/AdminSidebar";
import { AdminHeader } from "@/src/components/admin/AdminHeader";

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-bg">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminHeader />
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
