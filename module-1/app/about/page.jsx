const topics = [
  "Pages render from route folders inside the app directory.",
  "Shared layout wraps every page with consistent navigation.",
  "Nested routes can add focused UI without repeating the app shell.",
];

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
          About
        </p>
        <h1 className="mt-4 text-4xl font-bold text-zinc-950">
          A small route lab for learning modern Next.js structure.
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600">
          The project demonstrates static pages, nested routes, dynamic route
          params, shared layouts, and simple Tailwind styling.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {topics.map((topic, index) => (
          <article
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            key={topic}
          >
            <p className="text-sm font-bold text-emerald-700">Lesson {index + 1}</p>
            <p className="mt-4 leading-7 text-zinc-700">{topic}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
