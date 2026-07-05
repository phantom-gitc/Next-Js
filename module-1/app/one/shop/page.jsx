import Link from 'next/link'
import React from 'react'

// This is the REAL /one/shop page.
// You only see this when you hard-refresh the browser or type the URL directly.
export default function ShopPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Real Page</span>
        <h1 className="mt-3 text-3xl font-bold text-zinc-950">Shop Page</h1>
        <p className="mt-4 text-zinc-600">
          You are seeing the <strong>real</strong> <code className="bg-stone-100 px-1 rounded">/one/shop</code> page.
          This renders when you navigate directly (hard reload / address bar).
        </p>
        <div className="mt-8">
          <Link href="/one" className="rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-zinc-700">
            ← Back to Lab
          </Link>
        </div>
      </div>
    </div>
  )
}
