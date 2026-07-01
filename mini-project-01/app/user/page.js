import Link from "next/link";

const users = [
  {
    id: "101",
    name: "Aarav Sharma",
    role: "Product lead",
    project: "Brand website refresh",
  },
  {
    id: "102",
    name: "Mira Patel",
    role: "Design partner",
    project: "SaaS onboarding flow",
  },
  {
    id: "103",
    name: "Dev Mehta",
    role: "Frontend owner",
    project: "Next.js route system",
  },
];

const UserPage = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Users
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Client profiles connected through nested routes.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Open a profile to explore dynamic user, post, and comment pages with
          route parameters rendered in the interface.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {users.map((user) => (
          <Link
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            href={`/user/${user.id}`}
            key={user.id}
          >
            <p className="text-sm font-bold text-teal-700">ID {user.id}</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">
              {user.name}
            </h2>
            <p className="mt-2 font-medium text-slate-700">{user.role}</p>
            <p className="mt-4 leading-7 text-slate-600">{user.project}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UserPage;
