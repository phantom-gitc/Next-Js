import Link from "next/link";
import "./globals.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Users", href: "/user" },
];

export const metadata = {
  title: "LearnHub",
  description: "A clean Next.js learning project with multiple routes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-screen flex-col bg-stone-50 text-zinc-950">
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center">
            <Link className="text-xl font-bold text-emerald-700" href="/">
              LearnHub
            </Link>
            <nav className="flex flex-wrap gap-2 text-sm font-semibold sm:ml-auto">
              {navLinks.map((link) => (
                <Link
                  className="rounded-full px-4 py-2 text-zinc-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                  href={link.href}
                  key={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 LearnHub.</p>
            <p>Built with Next.js routes, layouts, and dynamic pages.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
