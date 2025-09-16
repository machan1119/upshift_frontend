import { Helper } from "@/components/ui/Helper";
import Footer from "@/components/pages/mobile_app/Footer";
import PagesHeader from "@/components/pages/pages/PagesHeader";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen relative">
      <PagesHeader />
      <Helper />
      {children}
      <Footer />
    </main>
  );
}
