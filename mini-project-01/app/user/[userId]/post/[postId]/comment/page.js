import Link from "next/link";

const comments = [
  { id: "1", author: "Nexa team", text: "Confirm the launch copy before QA." },
  { id: "2", author: "Client", text: "Approved with one small copy update." },
  { id: "3", author: "Design", text: "Final spacing pass is complete." },
];

const CommentPage = async ({ params }) => {
  const { userId, postId } = await params;

  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <Link
        className="text-sm font-semibold text-teal-700 hover:text-teal-900"
        href={`/user/${userId}/post/${postId}`}
      >
        Back to post
      </Link>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Comments
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Discussion for {postId}
        </h1>
      </div>

      <div className="mt-8 grid gap-4">
        {comments.map((comment) => (
          <Link
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md"
            href={`/user/${userId}/post/${postId}/comment/${comment.id}`}
            key={comment.id}
          >
            <p className="text-sm font-bold text-teal-700">
              Comment #{comment.id}
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              {comment.author}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{comment.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CommentPage;
