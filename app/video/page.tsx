import { Navbar } from "@/components/navbar"
import { VideoContent } from "@/components/video-content"
import { Footer } from "@/components/footer"

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <VideoContent />
      </main>
      <Footer />
    </div>
  )
}
