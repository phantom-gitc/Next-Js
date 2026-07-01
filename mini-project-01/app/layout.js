import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Nexa Studio",
  description: "A polished multi-page studio website built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="flex min-h-screen flex-col bg-slate-50 text-slate-950"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
