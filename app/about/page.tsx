import { Navbar } from "@/components/navbar"
import { AboutContent } from "@/components/about-content"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
