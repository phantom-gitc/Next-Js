export default function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Tell us what you want to build next.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Send a few details and we will reply with next steps, timelines, and a
          practical starting point.
        </p>
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="font-semibold text-slate-950">Email</p>
          <p className="mt-1 text-slate-600">hello@nexastudio.dev</p>
          <p className="mt-5 font-semibold text-slate-950">Location</p>
          <p className="mt-1 text-slate-600">Remote-first, working globally</p>
        </div>
      </div>

      <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Name
            <input
              className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              placeholder="Your name"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email
            <input
              className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              placeholder="you@example.com"
              type="email"
            />
          </label>
        </div>
        <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
          Project type
          <select className="rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100">
            <option>Brand website</option>
            <option>Product interface</option>
            <option>Frontend build</option>
          </select>
        </label>
        <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
          Message
          <textarea
            className="min-h-36 rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
            placeholder="Share goals, timeline, and anything already in motion."
          />
        </label>
        <button
          className="mt-6 w-full rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
          type="submit"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
