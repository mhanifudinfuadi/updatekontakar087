"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, CheckCircle2, MessageCircle, Search, Users } from "lucide-react"
import { arContacts } from "@/lib/ar-contacts"

export function ARDirectory() {
  const [query, setQuery] = useState("")
  const [division, setDivision] = useState("Semua Divisi")

  const divisions = useMemo(
    () => ["Semua Divisi", ...Array.from(new Set(arContacts.map((item) => item.division)))],
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return arContacts.filter((item) => {
      const matchesDivision = division === "Semua Divisi" || item.division === division
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.division.toLowerCase().includes(q)
      return matchesDivision && matchesQuery
    })
  }, [query, division])

  const grouped = useMemo(() => {
    return filtered.reduce<Record<string, typeof arContacts>>((acc, item) => {
      ;(acc[item.division] ||= []).push(item)
      return acc
    }, {})
  }, [filtered])

  return (
    <section id="daftar-ar" className="px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-[#dce3f3] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[.22em] text-[#263788]">DIRECTORY · 087</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-[#070f32] md:text-6xl">
              Daftar Account Representative
            </h2>
            <p className="mt-4 max-w-2xl text-[#53607f]">
              Pilih divisi dan personel. Tombol WhatsApp hanya tersedia untuk kontak yang aktif dan memiliki nomor valid.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-[#f7f9ff] px-4 py-3 text-sm font-semibold text-[#263788]">
            <Users className="h-4 w-4" />
            {arContacts.length} kontak aktif
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto]">
          <label className="flex items-center gap-3 rounded-2xl border border-[#dce3f3] bg-white px-4 py-3 shadow-sm">
            <Search className="h-5 w-5 text-[#53607f]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari nama atau divisi..."
              className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-[#8b96ad]"
              aria-label="Cari kontak AR"
            />
          </label>
          <select
            value={division}
            onChange={(event) => setDivision(event.target.value)}
            className="rounded-2xl border border-[#dce3f3] bg-white px-4 py-3 text-sm font-semibold text-[#212c5f] outline-none focus:border-[#263788]"
            aria-label="Pilih divisi"
          >
            {divisions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        <div className="mt-10 space-y-8">
          {Object.entries(grouped).map(([groupName, people]) => (
            <div key={groupName} className="overflow-hidden rounded-3xl border border-[#dce3f3] bg-white shadow-[0_18px_60px_rgba(38,55,136,.07)]">
              <div className="flex items-center justify-between gap-4 bg-[#070f32] px-5 py-4 text-white md:px-6">
                <div>
                  <div className="font-black">{groupName}</div>
                  <div className="mt-1 text-xs text-white/60">{people.length} personel ditampilkan</div>
                </div>
                <span className="rounded-full bg-[#ffe804] px-3 py-1 text-xs font-black text-[#070f32]">
                  {people.length}
                </span>
              </div>

              <div className="divide-y divide-[#edf0f7]">
                {people.map((person) => (
                  <a
                    key={`${person.division}-${person.name}-${person.whatsapp}`}
                    href={`https://wa.me/${person.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 transition hover:bg-[#f7f9ff] md:px-6"
                    aria-label={`Hubungi ${person.name} melalui WhatsApp`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef1fb] text-[#263788] transition group-hover:bg-[#ffe804]">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-[#070f32]">{person.name}</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#eef8f1] px-2 py-0.5 text-[10px] font-bold text-[#26733b]">
                          <CheckCircle2 className="h-3 w-3" /> AKTIF
                        </span>
                      </span>
                      <span className="mt-1 block text-xs text-[#53607f]">{person.title}</span>
                    </span>
                    <span className="hidden items-center gap-1 text-sm font-bold text-[#263788] sm:flex">
                      WhatsApp <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#8b96ad] sm:hidden" />
                  </a>
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#cbd4e8] px-6 py-14 text-center">
              <p className="font-bold text-[#212c5f]">Kontak tidak ditemukan.</p>
              <p className="mt-1 text-sm text-[#53607f]">Coba kata kunci atau divisi lain.</p>
            </div>
          )}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-[#7b879f]">
          Data kontak mengikuti template Excel yang disertakan dalam proyek. Untuk perubahan data, perbarui workbook lalu jalankan proses sinkronisasi data sebelum deploy berikutnya.
        </p>
      </div>
    </section>
  )
}
