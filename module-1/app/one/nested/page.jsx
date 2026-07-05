import Link from 'next/link'
import React from 'react'

export default function NestedPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Folder: nested</span>
        <h1 className="mt-3 text-3xl font-bold text-zinc-950">Nested Page</h1>
        <p className="mt-4 text-zinc-600">
          You are at <code className="bg-stone-100 px-1 rounded">/one/nested</code>.
          This folder contains a <code className="bg-stone-100 px-1 rounded text-red-600">(..)(..)about</code> interceptor.
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Click the button below to navigate to <code>/about</code>.
          The <code>(..)(..)about</code> folder jumps exactly two levels up (past <code>nested</code> → past <code>one</code>) to intercept <code>/about</code>.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/about" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Go to /about → (..)(..) Intercepted!
          </Link>
          <Link href="/one/nested/deep" className="rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 hover:bg-zinc-100">
            Go deeper → /one/nested/deep
          </Link>
          <Link href="/one" className="rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 hover:bg-zinc-100">
            ← Back to Lab
          </Link>
        </div>
      </div>
    </section>
  )
}
