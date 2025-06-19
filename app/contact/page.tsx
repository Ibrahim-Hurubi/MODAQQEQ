import { Navbar } from "@/components/navbar"
import { ContactContent } from "@/components/contact-content"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ContactContent />
      </main>
      <Footer />
    </div>
  )
}
