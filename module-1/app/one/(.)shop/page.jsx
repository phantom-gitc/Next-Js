import Link from 'next/link'
import React from 'react'

// INTERCEPTED — same level (.)
// File lives at: app/one/(.)shop/page.jsx
// Intercepts: /one/shop  (same folder level as the interceptor)
// Shows when: you click a <Link> to /one/shop while already on the /one page
export default function InterceptedShopSameLevel() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <div className="rounded-lg border-2 border-emerald-400 bg-emerald-50 p-6 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
          ✦ Intercepted — Same Level (.)
        </span>
        <h2 className="mt-3 text-2xl font-bold text-emerald-900">Shop — Intercepted Version</h2>

        <div className="mt-4 rounded bg-white border border-emerald-200 p-4 text-sm">
          <p className="font-semibold text-zinc-700">How it works:</p>
          <ul className="mt-2 space-y-1 text-zinc-600">
            <li>📁 Interceptor folder: <code className="bg-stone-100 px-1 rounded">app/one/(.)shop</code></li>
            <li>🎯 Intercepts route: <code className="bg-stone-100 px-1 rounded">/one/shop</code></li>
            <li>📍 Convention <code className="bg-stone-100 px-1 rounded text-emerald-700">(.)</code> = same level</li>
          </ul>
          <p className="mt-3 text-zinc-500 text-xs">
            The URL shows <code>/one/shop</code> but Next.js renders THIS component instead of the real shop page,
            because the navigation was a soft client-side link click.
          </p>
        </div>

        <div className="mt-5 flex gap-4">
          <Link href="/one" className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
            ← Back to /one
          </Link>
          <a href="/one/shop" className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">
            Hard reload → see real page
          </a>
        </div>
      </div>
    </div>
  )
}
