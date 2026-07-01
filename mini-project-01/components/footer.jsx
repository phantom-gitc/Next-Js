import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-8 sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center font-semibold text-slate-950 md:justify-start"
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

        <p className="mt-4 text-sm text-slate-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-slate-200 sm:py-2 sm:pl-4">
          Copyright 2026 Nexa Studio. Built for modern digital teams.
        </p>

        <div className="mt-4 flex gap-3 text-sm font-medium sm:ml-auto sm:mt-0">
          <Link className="hover:text-teal-700" href="/about">
            About
          </Link>
          <Link className="hover:text-teal-700" href="/services">
            Services
          </Link>
          <Link className="hover:text-teal-700" href="/user">
            Users
          </Link>
          <Link className="hover:text-teal-700" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
