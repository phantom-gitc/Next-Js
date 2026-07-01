import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "42", label: "launches shipped" },
  { value: "12k", label: "hours saved" },
  { value: "98%", label: "client retention" },
];

const highlights = [
  "Product strategy",
  "Interface design",
  "Next.js development",
];

export default function Home() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Digital product studio
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Build sharper web experiences with a team that understands the
              whole product.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Nexa Studio designs and ships fast, polished websites for teams
              that need clear messaging, resilient interfaces, and clean
              implementation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex justify-center rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                Explore services
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                Book a call
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200">
            <div className="rounded-3xl bg-white p-5">
              <Image
                src="/window.svg"
                alt="A simplified app window preview"
                className="h-40 w-full object-contain"
                width={240}
                height={160}
              />
            </div>
            <div className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <div
                  className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3"
                  key={item}
                >
                  <span>{item}</span>
                  <span className="h-2 w-2 rounded-full bg-teal-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            key={stat.label}
          >
            <p className="text-3xl font-bold text-slate-950">{stat.value}</p>
            <p className="mt-2 text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
