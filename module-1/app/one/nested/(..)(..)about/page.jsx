import Link from 'next/link'
import React from 'react'

// INTERCEPTED — two levels above (..)(..)
// File lives at: app/one/nested/(..)(..)about/page.jsx
// Intercepts: /about  (two levels above the nested folder)
// Shows when: you click a <Link> to /about while on the /one/nested page
export default function InterceptedAboutTwoUp() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <div className="rounded-lg border-2 border-blue-400 bg-blue-50 p-6 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          ✦ Intercepted — Two Levels Above (..)(..)
        </span>
        <h2 className="mt-3 text-2xl font-bold text-blue-900">About — Intercepted Version</h2>

        <div className="mt-4 rounded bg-white border border-blue-200 p-4 text-sm">
          <p className="font-semibold text-zinc-700">How it works:</p>
          <ul className="mt-2 space-y-1 text-zinc-600">
            <li>📁 Interceptor folder: <code className="bg-stone-100 px-1 rounded">app/one/nested/(..)(..)about</code></li>
            <li>🎯 Intercepts route: <code className="bg-stone-100 px-1 rounded">/about</code></li>
            <li>📍 Convention <code className="bg-stone-100 px-1 rounded text-blue-700">(..)(..)</code> = two levels above</li>
          </ul>
          <p className="mt-3 text-zinc-500 text-xs">
            You navigated from <code>/one/nested</code> to <code>/about</code>.
            The <code>(..)(..)about</code> folder reached UP two levels (past <code>nested</code> → past <code>one</code>) to intercept the root-level <code>/about</code>.
          </p>
        </div>

        <div className="mt-5 flex gap-4">
          <Link href="/one/nested" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            ← Back to /one/nested
          </Link>
          <a href="/about" className="rounded-full border border-blue-400 px-5 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100">
            Hard reload → see real page
          </a>
        </div>
      </div>
    </div>
  )
}
