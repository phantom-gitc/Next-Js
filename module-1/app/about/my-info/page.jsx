export default function MyInformation() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
          My info
        </p>
        <h1 className="mt-4 text-3xl font-bold text-zinc-950">
          Personal learning profile
        </h1>
        <p className="mt-5 leading-8 text-zinc-600">
          Use this nested page to practice how route segments compose inside a
          Next.js app. It is ready for profile details, notes, or project links.
        </p>
      </div>
    </section>
  );
}
