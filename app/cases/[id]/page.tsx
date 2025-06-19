import { Navbar } from "@/components/navbar"
import { CaseDetails } from "@/components/case-details"

interface CasePageProps {
  params: {
    id: string
  }
}

export default function CasePage({ params }: CasePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <CaseDetails caseId={params.id} />
        </div>
      </main>
    </div>
  )
}
