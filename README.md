# Kontak AR 087 — KPP Madya Dua Jakarta Barat

Landing page daftar Account Representative yang dapat dihubungi melalui WhatsApp.

## Struktur penting

- `app/` — halaman Next.js.
- `components/landing/ar-directory.tsx` — daftar AR, pencarian, filter divisi, dan tombol WhatsApp.
- `lib/ar-contacts.ts` — data kontak yang dipakai halaman.
- `Database Kontak AR 087.xlsx` — template sumber data.
- `scripts/sync-contacts.mjs` — sinkronisasi Excel menjadi `lib/ar-contacts.ts`.

## Mengubah data kontak

1. Edit sheet **Kontak AR** pada `Database Kontak AR 087.xlsx`.
2. Gunakan format nomor WhatsApp internasional tanpa `+` atau spasi, misalnya `6282114918955`.
3. Isi `Aktif` dengan `YA` untuk kontak yang ingin ditampilkan.
4. Jalankan:

```bash
npm install
npm run sync:contacts
npm run build
```

5. Commit perubahan dan push ke GitHub. Vercel akan menjalankan `npm run build`.

Kontak tanpa nomor WhatsApp valid atau yang tidak aktif tidak akan dibuat menjadi tombol WhatsApp.

## Deploy ke Vercel

Project ini sengaja tidak membawa `.next`, `node_modules`, atau `.git`. Vercel cukup diarahkan ke repository yang berisi project ini. Build command: `npm run build`.
