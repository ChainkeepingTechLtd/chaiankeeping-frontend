"use client";

import { BusinessGrid } from "@/pattern/business/templates/business-page-temp"

export default function Home() {
  return (
    <main className="container mx-auto p-6 md:p-8 lg:p-12">
      <h1 className="text-sm text-[hsla(215,20%,65%,1)] font-bold mb-8">BUSINESS TOOLS</h1>
      <BusinessGrid />
    </main>
  )
}

