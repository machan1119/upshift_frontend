import PagesFooter from "@/components/pages/pages/PagesFooter";
import PagesHeader from "@/components/pages/pages/PagesHeader";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen relative">
      <PagesHeader />
      {children}
      <PagesFooter />
    </main>
  );
}
