export default function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-bold text-zinc-950">
          Ask a question about this module.
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600">
          This form is a polished UI example for collecting feedback, questions,
          or practice project notes.
        </p>
      </div>

      <form className="rounded-lg border border-zinc-200 bg-stone-50 p-6 shadow-sm">
        <label className="grid gap-2 text-sm font-semibold text-zinc-700">
          Name
          <input
            className="rounded-lg border border-zinc-300 px-4 py-3 font-normal outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
            placeholder="Your name"
            type="text"
          />
        </label>
        <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700">
          Email
          <input
            className="rounded-lg border border-zinc-300 px-4 py-3 font-normal outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700">
          Message
          <textarea
            className="min-h-32 rounded-lg border border-zinc-300 px-4 py-3 font-normal outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
            placeholder="What are you working on?"
          />
        </label>
        <button
          className="mt-6 rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
          type="submit"
        >
          Send question
        </button>
      </form>
    </section>
  );
}
