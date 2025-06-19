import { Navbar } from "@/components/navbar"
import { HowItWorksContent } from "@/components/how-it-works-content"
import { Footer } from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <HowItWorksContent />
      </main>
      <Footer />
    </div>
  )
}
