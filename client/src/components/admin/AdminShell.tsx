import type { ReactNode } from "react";
import { AdminSidebar } from "@/src/components/admin/AdminSidebar";
import { AdminHeader } from "@/src/components/admin/AdminHeader";
import { AdminContainer } from "@/src/components/admin/AdminContainer";

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-bg">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminHeader />
        <main className="flex-1">
          <AdminContainer>{children}</AdminContainer>
        </main>
      </div>
    </div>
  );
}
