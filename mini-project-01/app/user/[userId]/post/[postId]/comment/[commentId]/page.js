import Link from "next/link";

const CommentIdPage = async ({ params }) => {
  const { userId, postId, commentId } = await params;

  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <Link
        className="text-sm font-semibold text-teal-700 hover:text-teal-900"
        href={`/user/${userId}/post/${postId}/comment`}
      >
        Back to comments
      </Link>

      <article className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Comment detail
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Comment #{commentId}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          This final nested page proves every segment is connected:
          user, post, and comment.
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-100 p-4">
            <dt className="text-sm font-semibold text-slate-500">User</dt>
            <dd className="mt-1 font-bold text-slate-950">{userId}</dd>
          </div>
          <div className="rounded-lg bg-slate-100 p-4">
            <dt className="text-sm font-semibold text-slate-500">Post</dt>
            <dd className="mt-1 break-words font-bold text-slate-950">
              {postId}
            </dd>
          </div>
          <div className="rounded-lg bg-slate-100 p-4">
            <dt className="text-sm font-semibold text-slate-500">Comment</dt>
            <dd className="mt-1 font-bold text-slate-950">{commentId}</dd>
          </div>
        </dl>
      </article>
    </section>
  );
};

export default CommentIdPage;
