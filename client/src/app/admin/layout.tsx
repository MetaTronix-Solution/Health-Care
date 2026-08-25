import type { Metadata } from "next";
import { AdminSidebar } from "@/src/components/admin/AdminSidebar";
import { AdminHeader } from "@/src/components/admin/AdminHeader";
import { AdminContainer } from "@/src/components/admin/AdminContainer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
