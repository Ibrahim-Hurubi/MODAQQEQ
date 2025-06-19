import { Navbar } from "@/components/navbar"
import { TechnologiesContent } from "@/components/technologies-content"
import { Footer } from "@/components/footer"

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <TechnologiesContent />
      </main>
      <Footer />
    </div>
  )
}
