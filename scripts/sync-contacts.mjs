import fs from "node:fs"
import path from "node:path"
import XLSX from "xlsx"

const root = process.cwd()
const input = path.join(root, "Database Kontak AR 087.xlsx")
const output = path.join(root, "lib", "ar-contacts.ts")

const workbook = XLSX.readFile(input)
const sheet = workbook.Sheets["Kontak AR"]
if (!sheet) throw new Error('Sheet "Kontak AR" tidak ditemukan.')

const rows = XLSX.utils.sheet_to_json(sheet, { defval: null })
const contacts = rows
  .filter((row) => String(row["Aktif"] ?? "").trim().toUpperCase() === "YA")
  .map((row) => {
    const raw = String(row["Nomor WhatsApp"] ?? "")
    const whatsapp = raw.replace(/\D/g, "")
    return {
      division: String(row["Divisi"] ?? "").trim(),
      order: Number(row["Urutan"] ?? 99),
      name: String(row["Nama Personel"] ?? "").trim(),
      title: String(row["Jabatan"] ?? "Account Representative").trim(),
      whatsapp,
      note: row["Keterangan"] && row["Keterangan"] !== "Null" ? String(row["Keterangan"]).trim() : null,
    }
  })
  .filter((row) => row.division && row.name && /^62\d{8,13}$/.test(row.whatsapp))

fs.writeFileSync(
  output,
  `export type ARContact = {
  division: string
  order: number
  name: string
  title: string
  whatsapp: string
  note?: string | null
}

export const arContacts: ARContact[] = ${JSON.stringify(contacts, null, 2)}
`,
  "utf8",
)

console.log(`Synced ${contacts.length} active WhatsApp contacts to ${path.relative(root, output)}`)
