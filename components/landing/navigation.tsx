"use client"

import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce3f3]/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Kontak AR 087">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#263788] font-black text-white">087</span>
          <span className="leading-tight">
            <span className="block text-sm font-black text-[#212c5f]">Kontak AR</span>
            <span className="block text-[11px] text-[#53607f]">KPP Madya Dua Jakarta Barat</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#daftar-ar" className="text-sm font-semibold text-[#53607f] hover:text-[#263788]">Daftar AR</a>
          <a href="#cara-hubungi" className="text-sm font-semibold text-[#53607f] hover:text-[#263788]">Cara Hubungi</a>
          <a href="https://www.pajak.go.id/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#53607f] hover:text-[#263788]">DJP ↗</a>
        </nav>

        <div className="hidden md:block">
          <a href="#daftar-ar" className="inline-flex items-center gap-2 rounded-xl bg-[#263788] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#212c5f]">
            <MessageCircle className="h-4 w-4" /> Lihat AR
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-xl p-2 text-[#212c5f] md:hidden" aria-label="Buka menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#dce3f3] bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#daftar-ar" className="rounded-xl px-3 py-3 font-semibold text-[#212c5f]">Daftar AR</a>
            <a onClick={() => setOpen(false)} href="#cara-hubungi" className="rounded-xl px-3 py-3 font-semibold text-[#212c5f]">Cara Hubungi</a>
            <a href="https://www.pajak.go.id/" target="_blank" rel="noopener noreferrer" className="rounded-xl px-3 py-3 font-semibold text-[#212c5f]">Situs DJP ↗</a>
          </div>
        </div>
      )}
    </header>
  )
}
