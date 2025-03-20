"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  return (
    <select
      onChange={(e) => router.push(`/${e.target.value}`)}
      value={locale}
      className="bg-[#252529] text-white border border-[#333339] rounded-lg px-3 py-1"
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  )
}

