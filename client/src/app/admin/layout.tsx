import { AdminSidebar } from "@/src/components/admin/AdminSidebar";
import { AdminHeader } from "@/src/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
