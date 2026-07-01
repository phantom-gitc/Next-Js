import Link from "next/link";

const users = [
  { id: "101", name: "Aarav Sharma", role: "Frontend learner" },
  { id: "102", name: "Mira Patel", role: "UI practice lead" },
  { id: "103", name: "Dev Mehta", role: "Route explorer" },
];

export default function UserPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
        Users
      </p>
      <h1 className="mt-4 text-4xl font-bold text-zinc-950">
        Dynamic route examples
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
        Select a user card to open the dynamic route at
        <span className="font-semibold text-zinc-900"> /user/[userId]</span>.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {users.map((user) => (
          <Link
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            href={`/user/${user.id}`}
            key={user.id}
          >
            <p className="text-sm font-bold text-emerald-700">ID {user.id}</p>
            <h2 className="mt-3 text-xl font-bold text-zinc-950">
              {user.name}
            </h2>
            <p className="mt-2 text-zinc-600">{user.role}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
