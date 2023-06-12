import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/public/globals.css";

export const metadata = {
  title: "Портфолио",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="flex flex-col justify-between min-h-screen w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
