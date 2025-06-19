"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-background dark:from-red-950/20">
      <Card className="w-full max-w-md text-center shadow-2xl">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-red-600">حدث خطأ غير متوقع</CardTitle>
          <CardDescription className="text-lg mt-2">
            عذراً، حدث خطأ في النظام. يرجى المحاولة مرة أخرى أو الاتصال بالدعم الفني.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={reset} className="w-full" size="lg">
            <RefreshCw className="mr-2 h-4 w-4" />
            إعادة المحاولة
          </Button>
          <Button asChild variant="outline" className="w-full" size="lg">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              العودة للرئيسية
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
