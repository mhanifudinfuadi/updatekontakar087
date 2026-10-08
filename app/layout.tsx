import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kontak AR 087 | KPP Madya Dua Jakarta Barat",
  description:
    "Daftar kontak Account Representative KPP Madya Dua Jakarta Barat. Pilih divisi dan hubungi AR melalui WhatsApp.",
  keywords: ["KPP Madya Dua Jakarta Barat", "Kontak AR", "Account Representative", "WhatsApp", "DJP"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
