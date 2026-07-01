import Link from "next/link";

const posts = [
  { id: "launch-plan", title: "Launch plan", status: "In review" },
  { id: "design-notes", title: "Design notes", status: "Drafting" },
  { id: "handoff", title: "Handoff checklist", status: "Ready" },
];

const UserId = async ({ params }) => {
  const { userId } = await params;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Link
        className="text-sm font-semibold text-teal-700 hover:text-teal-900"
        href="/user"
      >
        Back to users
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            User profile
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950">
            Profile #{userId}
          </h1>
          <p className="mt-5 leading-7 text-slate-600">
            This page is powered by the dynamic route segment
            <span className="font-semibold text-slate-900"> /user/[userId]</span>.
          </p>
          <dl className="mt-8 grid gap-4">
            <div className="rounded-lg bg-slate-100 p-4">
              <dt className="text-sm font-semibold text-slate-500">Route</dt>
              <dd className="mt-1 font-bold text-slate-950">/user/{userId}</dd>
            </div>
            <div className="rounded-lg bg-slate-100 p-4">
              <dt className="text-sm font-semibold text-slate-500">Status</dt>
              <dd className="mt-1 font-bold text-teal-700">Active client</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-950">Project posts</h2>
          <div className="mt-5 grid gap-4">
            {posts.map((post) => (
              <Link
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md"
                href={`/user/${userId}/post/${post.id}`}
                key={post.id}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-teal-700">
                      POST {post.id}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-slate-950">
                      {post.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
                    {post.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserId;
