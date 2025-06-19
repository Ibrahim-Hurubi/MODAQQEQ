import { Navbar } from "@/components/navbar"
import { CasesContent } from "@/components/cases-content"

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <CasesContent />
      </main>
    </div>
  )
}
