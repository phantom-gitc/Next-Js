const services = [
  {
    title: "Brand Websites",
    text: "Messaging, page structure, and responsive UI for teams launching a credible web presence.",
  },
  {
    title: "Product Interfaces",
    text: "Dashboards, onboarding flows, and feature screens designed for clarity and repeated use.",
  },
  {
    title: "Frontend Builds",
    text: "Next.js implementation with reusable components, accessible markup, and tidy styling.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Services
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Strategy, design, and frontend delivery in one focused workflow.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Choose a focused engagement or combine services for a complete launch.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            key={service.title}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <span className="h-4 w-4 rounded-full border-4 border-current" />
            </div>
            <h2 className="text-xl font-bold text-slate-950">
              {service.title}
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
