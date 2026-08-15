import Link from "next/link";
import { Bell, Search, Settings } from "lucide-react";
import { MobileSidebar } from "@/src/components/admin/MobileSidebar";
import { ProfileMenu } from "@/src/components/admin/ProfileMenu";
import { TopNav } from "@/src/components/admin/TopNav";
import type { AdminUser } from "@/src/types/admin-user";

const currentUser: AdminUser = {
  id: "admin-1",
  name: "Dr. Sarah Chen",
  email: "s.chen@medtechpro.com",
  role: "Administrator",
};

export function AdminHeader() {
  return (
    <header
      className="sticky top-0 z-30 flex shrink-0 items-center gap-4 border-b border-neutral-line bg-white px-4 sm:px-5 lg:px-8"
      style={{ height: "var(--admin-header-height)" }}
    >
      <MobileSidebar />

      <div className="relative hidden max-w-sm flex-1 lg:block">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-muted"
        />
        <input
          type="search"
          aria-label="Global search"
          placeholder="Global search..."
          className="admin-input pl-9"
        />
      </div>

      <div className="flex flex-1 justify-center lg:flex-none">
        <TopNav />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <Link
          href="/system/notifications"
          aria-label="View notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-primary transition-colors hover:bg-neutral-bg focus-visible:outline-2 focus-visible:outline-secondary"
        >
          <Bell aria-hidden className="h-[18px] w-[18px]" />
          <span
            className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500"
            aria-hidden
          />
        </Link>
        <Link
          href="/system"
          aria-label="Open settings"
          className="hidden h-9 w-9 items-center justify-center rounded-lg text-primary transition-colors hover:bg-neutral-bg focus-visible:outline-2 focus-visible:outline-secondary sm:flex"
        >
          <Settings aria-hidden className="h-[18px] w-[18px]" />
        </Link>
        <ProfileMenu user={currentUser} />
      </div>
    </header>
  );
}
