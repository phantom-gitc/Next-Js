export default async function UserIdPage({ params }) {
  const { userId } = await params;

  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
          User profile
        </p>
        <h1 className="mt-4 text-4xl font-bold text-zinc-950">
          Profile #{userId}
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600">
          This page is rendered from the dynamic route segment and receives the
          selected user ID from the URL.
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-stone-100 p-5">
            <dt className="text-sm font-semibold text-zinc-500">Route</dt>
            <dd className="mt-2 font-bold text-zinc-950">/user/{userId}</dd>
          </div>
          <div className="rounded-lg bg-stone-100 p-5">
            <dt className="text-sm font-semibold text-zinc-500">Status</dt>
            <dd className="mt-2 font-bold text-emerald-700">Active</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
