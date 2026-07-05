import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-zinc-950">
      {children}
    </div>
  );
}
