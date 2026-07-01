"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Users", href: "/user" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-700 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-center px-5 py-4 md:flex-row">
        <Link
          href="/"
          className="mb-4 flex items-center font-semibold text-slate-950 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-teal-600 p-2 text-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Nexa Studio</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium md:ml-auto">
          {navLinks.map((link) => {
            const isActive =
              isHydrated &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 transition-colors ${
                  isActive
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="mt-4 inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 md:ml-4 md:mt-0"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
};

export default Header;
