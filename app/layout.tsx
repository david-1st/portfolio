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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
