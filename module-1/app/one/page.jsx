import Link from 'next/link'
import React from 'react'

export default function InterceptingRoutesLab() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
          Intercepting Routes
        </p>
        <h1 className="mt-3 text-4xl font-bold text-zinc-950">
          Route Interception Lab
        </h1>
        <p className="mt-4 text-zinc-600 leading-7">
          Intercepting routes let Next.js show a different component when you click a link,
          while the URL still changes. Hard-refreshing shows the real route instead.
        </p>

        {/* Convention Reference */}
        <div className="mt-6 rounded-lg bg-zinc-900 text-zinc-100 p-5 text-sm font-mono">
          <p className="text-zinc-400 text-xs mb-3 font-sans font-semibold uppercase tracking-widest">All 4 Conventions</p>
          <p><span className="text-emerald-400">(.)folder</span>      <span className="text-zinc-500">→ same level</span></p>
          <p><span className="text-amber-400">(..)folder</span>     <span className="text-zinc-500">→ one level above</span></p>
          <p><span className="text-blue-400">(..)(..)folder</span> <span className="text-zinc-500">→ two levels above</span></p>
          <p><span className="text-purple-400">(...)folder</span>    <span className="text-zinc-500">→ root app/ directory (any depth)</span></p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {/* Card 1 — Same Level */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              (.)  Same Level
            </span>
            <h2 className="mt-4 text-lg font-bold text-zinc-950">Demo 1</h2>
            <div className="mt-3 text-xs font-mono space-y-1 text-zinc-500 bg-stone-50 rounded p-3 leading-5">
              <p>app/one/</p>
              <p className="text-zinc-400">├─ shop/        <span className="text-zinc-300">← real</span></p>
              <p className="text-emerald-600">└─ (.)shop/     ← intercept</p>
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              From <code className="bg-stone-100 px-1 rounded">/one</code>, click to <code className="bg-stone-100 px-1 rounded">/one/shop</code>.
              <code className="text-emerald-700"> (.)</code> intercepts at the same folder level.
            </p>
          </div>
          <Link href="/one/shop" className="mt-6 block rounded-full bg-emerald-700 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-800 transition">
            Go to /one/shop →
          </Link>
        </div>

        {/* Card 2 — One Level Above */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              (..)  One Level Up
            </span>
            <h2 className="mt-4 text-lg font-bold text-zinc-950">Demo 2</h2>
            <div className="mt-3 text-xs font-mono space-y-1 text-zinc-500 bg-stone-50 rounded p-3 leading-5">
              <p>app/one/</p>
              <p className="text-zinc-400">├─ shop/</p>
              <p className="text-zinc-400">└─ child/</p>
              <p className="text-amber-600">   └─ (..)shop/ ← intercept</p>
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              From <code className="bg-stone-100 px-1 rounded">/one/child</code>, click to <code className="bg-stone-100 px-1 rounded">/one/shop</code>.
              <code className="text-amber-700"> (..)</code> reaches one level above.
            </p>
          </div>
          <Link href="/one/child" className="mt-6 block rounded-full bg-amber-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-amber-700 transition">
            Go to /one/child →
          </Link>
        </div>

        {/* Card 3 — Two Levels Above */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              (..)(..)  Two Levels Up
            </span>
            <h2 className="mt-4 text-lg font-bold text-zinc-950">Demo 3</h2>
            <div className="mt-3 text-xs font-mono space-y-1 text-zinc-500 bg-stone-50 rounded p-3 leading-5">
              <p>app/</p>
              <p className="text-zinc-400">├─ about/</p>
              <p className="text-zinc-400">└─ one/nested/</p>
              <p className="text-blue-600">   └─ (..)(..)about/ ← intercept</p>
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              From <code className="bg-stone-100 px-1 rounded">/one/nested</code>, click to <code className="bg-stone-100 px-1 rounded">/about</code>.
              <code className="text-blue-700"> (..)(..)</code> jumps two levels up.
            </p>
          </div>
          <Link href="/one/nested" className="mt-6 block rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700 transition">
            Go to /one/nested →
          </Link>
        </div>

        {/* Card 4 — Root App Directory */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">
              (...)  Root App Dir
            </span>
            <h2 className="mt-4 text-lg font-bold text-zinc-950">Demo 4</h2>
            <div className="mt-3 text-xs font-mono space-y-1 text-zinc-500 bg-stone-50 rounded p-3 leading-5">
              <p>app/</p>
              <p className="text-zinc-400">├─ about/</p>
              <p className="text-zinc-400">└─ one/nested/deep/</p>
              <p className="text-purple-600">   └─ (...)about/ ← intercept</p>
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              From <code className="bg-stone-100 px-1 rounded">/one/nested/deep</code>, click to <code className="bg-stone-100 px-1 rounded">/about</code>.
              <code className="text-purple-700"> (...)</code> always anchors to <code>app/</code> root.
            </p>
          </div>
          <Link href="/one/nested/deep" className="mt-6 block rounded-full bg-purple-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-purple-700 transition">
            Go to /one/nested/deep →
          </Link>
        </div>

      </div>
    </section>
  )
}