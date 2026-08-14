import Link from "next/link";
import { HelpCircle, LogOut, ShieldPlus } from "lucide-react";
import { SidebarNav } from "@/src/components/admin/SidebarNav";

export function AdminSidebar() {
  return (
    <aside className="hidden w-72 shrink-0 flex-col bg-primary text-white lg:flex">
      <div className="px-6 py-7">
        <Link href="/dashboard" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
            <ShieldPlus aria-hidden className="h-5 w-5 text-white" />
          </span>
          <span>
            <span className="block text-base font-bold leading-tight">
              MedTech Pro
              <br />
              Administration
            </span>
          </span>
        </Link>
        <p className="mt-2 text-xs text-white/50">Clinical Admin Portal</p>
      </div>

      <SidebarNav />

      <div className="mt-auto space-y-1 border-t border-white/10 px-3 py-4">
        <Link
          href="/support"
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
        >
          <HelpCircle aria-hidden className="h-[18px] w-[18px]" />
          Support
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
        >
          <LogOut aria-hidden className="h-[18px] w-[18px]" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
