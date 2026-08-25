import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { OrganizationJsonLd } from "@/src/components/seo/OrganizationJsonLd";
import { WebSiteJsonLd } from "@/src/components/seo/WebSiteJsonLd";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
