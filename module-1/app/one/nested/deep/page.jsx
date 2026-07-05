import Link from 'next/link'
import React from 'react'

// This is the page at /one/nested/deep
// From here, clicking /about will be intercepted by (...)about
// (...) matches from the root app directory — no matter how deep you are
export default function DeepPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Folder: nested/deep</span>
        <h1 className="mt-3 text-3xl font-bold text-zinc-950">Deep Page</h1>
        <p className="mt-4 text-zinc-600">
          You are at <code className="bg-stone-100 px-1 rounded">/one/nested/deep</code>.
          This folder contains a <code className="bg-stone-100 px-1 rounded text-red-600">(...)about</code> interceptor.
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Click the button below to navigate to <code>/about</code>.
          No matter how deep you are, <code>(...)</code> always reaches the root <code>app/</code> directory.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/about" className="rounded-full bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
            Go to /about → Intercepted!
          </Link>
          <Link href="/one/nested" className="rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 hover:bg-zinc-100">
            ← Back to /one/nested
          </Link>
        </div>
      </div>
    </section>
  )
}
