import Link from "next/link";
import { LogOut, ShieldPlus } from "lucide-react";
import { SidebarNav } from "@/src/components/admin/SidebarNav";

export function AdminSidebar() {
  return (
    <aside
      className="sticky top-0 hidden h-screen shrink-0 flex-col overflow-y-auto bg-primary text-white lg:flex"
      style={{ width: "var(--admin-sidebar-width)" }}
    >
      <div className="px-5 py-6">
        <Link href="/dashboard" className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
            <ShieldPlus aria-hidden className="h-5 w-5 text-white" />
          </span>
          <span className="block text-[15px] font-semibold leading-snug">
            Himanshi-biomedical
            <br />
            Administration
          </span>
        </Link>
        <p className="mt-2 pl-12 text-xs text-white/50">Admin Portal</p>
      </div>

      <SidebarNav />

      <div className="mt-auto space-y-0.5 border-t border-white/10 px-3 py-4">
        <Link
          href="/login"
          className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        >
          <LogOut aria-hidden className="h-[18px] w-[18px] shrink-0" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
