import { Navbar } from "@/components/navbar"
import { CaseUploadForm } from "@/components/case-upload-form"

export default function CaseUploadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <CaseUploadForm />
        </div>
      </main>
    </div>
  )
}
