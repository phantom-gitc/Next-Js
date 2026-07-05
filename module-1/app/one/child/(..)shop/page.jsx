import Link from 'next/link'
import React from 'react'

// INTERCEPTED — one level above (..)
// File lives at: app/one/child/(..)shop/page.jsx
// Intercepts: /one/shop  (one level above the child folder)
// Shows when: you click a <Link> to /one/shop while on the /one/child page
export default function InterceptedShopOneUp() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <div className="rounded-lg border-2 border-amber-400 bg-amber-50 p-6 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
          ✦ Intercepted — One Level Above (..)
        </span>
        <h2 className="mt-3 text-2xl font-bold text-amber-900">Shop — Intercepted Version</h2>

        <div className="mt-4 rounded bg-white border border-amber-200 p-4 text-sm">
          <p className="font-semibold text-zinc-700">How it works:</p>
          <ul className="mt-2 space-y-1 text-zinc-600">
            <li>📁 Interceptor folder: <code className="bg-stone-100 px-1 rounded">app/one/child/(..)shop</code></li>
            <li>🎯 Intercepts route: <code className="bg-stone-100 px-1 rounded">/one/shop</code></li>
            <li>📍 Convention <code className="bg-stone-100 px-1 rounded text-amber-700">(..)</code> = one level above</li>
          </ul>
          <p className="mt-3 text-zinc-500 text-xs">
            You navigated from <code>/one/child</code> to <code>/one/shop</code>.
            The <code>(..)shop</code> folder reached UP one level to intercept <code>/one/shop</code>.
          </p>
        </div>

        <div className="mt-5 flex gap-4">
          <Link href="/one/child" className="rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-700">
            ← Back to /one/child
          </Link>
          <a href="/one/shop" className="rounded-full border border-amber-400 px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100">
            Hard reload → see real page
          </a>
        </div>
      </div>
    </div>
  )
}
