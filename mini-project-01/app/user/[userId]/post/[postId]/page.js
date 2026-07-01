import Link from "next/link";

const PostId = async ({ params }) => {
  const { userId, postId } = await params;

  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <Link
        className="text-sm font-semibold text-teal-700 hover:text-teal-900"
        href={`/user/${userId}`}
      >
        Back to profile
      </Link>

      <article className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          User {userId}
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Post: {postId}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The nested post route receives both the user ID and post ID, so the
          screen can keep context as visitors move deeper into the project.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-100 p-5">
            <p className="text-sm font-semibold text-slate-500">Current route</p>
            <p className="mt-2 break-words font-bold text-slate-950">
              /user/{userId}/post/{postId}
            </p>
          </div>
          <Link
            className="rounded-lg bg-teal-600 p-5 font-semibold text-white transition hover:bg-teal-700"
            href={`/user/${userId}/post/${postId}/comment`}
          >
            View comments
          </Link>
        </div>
      </article>
    </section>
  );
};

export default PostId;
