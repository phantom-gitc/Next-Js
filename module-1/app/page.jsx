import Link from "next/link";
import Image from "next/image";

const lessons = [
  "App Router basics",
  "Nested layouts",
  "Dynamic routes",
];

export default function Home() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
          Next.js practice project
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
          Learn routing, layouts, and reusable UI with a friendly dashboard.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          This module now has complete page designs for every route, so each
          lesson feels connected instead of showing bare placeholder text.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-full bg-emerald-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
            href="/user"
          >
            View users
          </Link>
          <Link
            className="rounded-full border border-zinc-300 px-6 py-3 text-center font-semibold text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
            href="/about"
          >
            About module
          </Link>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <Image
          alt="A globe icon representing web routes"
          className="mx-auto h-36 w-full object-contain"
          height={144}
          src="/globe.svg"
          width={240}
        />
        <div className="mt-8 grid gap-3">
          {lessons.map((lesson) => (
            <div
              className="flex items-center justify-between rounded-lg bg-stone-100 px-4 py-3"
              key={lesson}
            >
              <span className="font-semibold text-zinc-800">{lesson}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
