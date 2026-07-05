import Link from 'next/link'
import React from 'react'

// INTERCEPTED — root app directory (...)
// File lives at: app/one/nested/deep/(...)about/page.jsx
// Intercepts: /about  (at the root app/ level)
// Shows when: you click a <Link> to /about while on the /one/nested/deep page
// Key difference from (..)(..): (...) always anchors to app/ root, regardless of depth
export default function InterceptedAboutFromRoot() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <div className="rounded-lg border-2 border-purple-400 bg-purple-50 p-6 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-600">
          ✦ Intercepted — Root App Directory (...)
        </span>
        <h2 className="mt-3 text-2xl font-bold text-purple-900">About — Intercepted Version</h2>

        <div className="mt-4 rounded bg-white border border-purple-200 p-4 text-sm">
          <p className="font-semibold text-zinc-700">How it works:</p>
          <ul className="mt-2 space-y-1 text-zinc-600">
            <li>📁 Interceptor folder: <code className="bg-stone-100 px-1 rounded">app/one/nested/deep/(...)about</code></li>
            <li>🎯 Intercepts route: <code className="bg-stone-100 px-1 rounded">/about</code></li>
            <li>📍 Convention <code className="bg-stone-100 px-1 rounded text-purple-700">(...)</code> = root app/ directory</li>
          </ul>

          <div className="mt-4 border-t border-purple-100 pt-3">
            <p className="font-semibold text-zinc-700 text-xs uppercase tracking-widest">Difference from (..)(..)</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded bg-blue-50 border border-blue-200 p-2 text-xs">
                <p className="font-bold text-blue-700">(..)(..) — relative</p>
                <p className="text-zinc-500 mt-1">Counts 2 levels up from the current folder. Works only when exactly 2 levels deep.</p>
              </div>
              <div className="rounded bg-purple-50 border border-purple-200 p-2 text-xs">
                <p className="font-bold text-purple-700">(...) — absolute</p>
                <p className="text-zinc-500 mt-1">Always jumps to the root <code>app/</code> no matter how deeply nested you are.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-4">
          <Link href="/one/nested/deep" className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-700">
            ← Back to /one/nested/deep
          </Link>
          <a href="/about" className="rounded-full border border-purple-400 px-5 py-2 text-sm font-semibold text-purple-800 hover:bg-purple-100">
            Hard reload → see real page
          </a>
        </div>
      </div>
    </div>
  )
}
