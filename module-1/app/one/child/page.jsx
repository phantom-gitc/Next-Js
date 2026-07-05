import Link from 'next/link'
import React from 'react'

// This is the page at /one/child
// From here, clicking the link to /one/shop will be INTERCEPTED
// because (..)shop inside this folder matches one level above
export default function ChildPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Folder: child</span>
        <h1 className="mt-3 text-3xl font-bold text-zinc-950">Child Page</h1>
        <p className="mt-4 text-zinc-600">
          You are at <code className="bg-stone-100 px-1 rounded">/one/child</code>.
          This folder contains a <code className="bg-stone-100 px-1 rounded text-red-600">(..)shop</code> interceptor.
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Click the button below to navigate to <code>/one/shop</code>.
          Because of the <code>(..)shop</code> folder inside <code>child</code>,
          Next.js will intercept the navigation and show the intercepted version instead.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/one/shop" className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-700">
            Go to /one/shop → Intercepted!
          </Link>
          <Link href="/one" className="rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 hover:bg-zinc-100">
            ← Back to Lab
          </Link>
        </div>
      </div>
    </section>
  )
}
