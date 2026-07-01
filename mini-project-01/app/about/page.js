const values = [
  "We turn vague ideas into concrete product decisions.",
  "We design interfaces that stay simple under real content.",
  "We ship clean frontend code that teams can keep improving.",
];

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            About us
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950">
            A compact team for websites that need craft and momentum.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We work with founders, educators, and service teams to clarify their
            offer, shape the customer journey, and build websites that feel
            dependable from the first visit.
          </p>
        </div>

        <div className="grid gap-4">
          {values.map((value, index) => (
            <div
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              key={value}
            >
              <p className="text-sm font-bold text-teal-700">
                0{index + 1}
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
