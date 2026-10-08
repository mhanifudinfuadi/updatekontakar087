import { Navigation } from "@/components/landing/navigation"
import { ARDirectory } from "@/components/landing/ar-directory"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#070f32]">
      <Navigation />

      <section className="relative overflow-hidden bg-white px-5 pb-20 pt-20 md:px-6 md:pb-28 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,232,4,.16),transparent_28%),radial-gradient(circle_at_85%_65%,rgba(38,55,136,.12),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-mono text-xs tracking-[.25em] text-[#263788]">KPP MADYA DUA JAKARTA BARAT · 087</p>
            <h1 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.055em] text-[#070f32] md:text-8xl">
              Butuh bantuan pajak?<br />
              <span className="text-[#263788]">Hubungi AR.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#53607f] md:text-xl">
              Temukan Account Representative berdasarkan divisi, lalu klik nama personel untuk langsung terhubung melalui WhatsApp.
            </p>

            <a href="#daftar-ar" className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#263788] px-6 py-4 font-bold text-white shadow-xl shadow-[#263788]/15 transition hover:-translate-y-0.5 hover:bg-[#212c5f]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffe804] text-[#070f32]">
                <ArrowRight className="h-4 w-4" />
              </span>
              Lihat Daftar Kontak AR
            </a>
          </div>
        </div>
      </section>

      <section id="cara-hubungi" className="border-y border-[#dce3f3] bg-[#f7f9ff] px-5 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center gap-3 text-sm text-[#53607f]">
          <MessageCircle className="h-5 w-5 text-[#263788]" />
          <span><strong className="text-[#212c5f]">Cara menghubungi:</strong> pilih personel → klik barisnya → WhatsApp terbuka di tab baru.</span>
        </div>
      </section>

      <ARDirectory />

      <footer className="border-t border-[#dce3f3] bg-[#070f32] px-5 py-10 text-white md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-black">Kontak AR · 087</div>
            <div className="mt-1 text-sm text-white/60">KPP Madya Dua Jakarta Barat</div>
          </div>
          <a href="https://www.pajak.go.id/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#ffe804]">Situs resmi DJP ↗</a>
        </div>
      </footer>
    </main>
  )
}
