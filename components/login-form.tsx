"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Shield, Loader2, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function LoginForm() {
  const { t } = useLanguage()
  const router = useRouter()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Validate inputs
      if (!formData.email || !formData.password) {
        setError(t("error.validation"))
        return
      }

      // Simulate API call with realistic delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock authentication - in real app, this would be an API call
      if (formData.email === "admin@mhrsd.gov.sa" && formData.password === "admin123") {
        toast({
          title: t("common.success"),
          description: t("success.login"),
        })

        // Store auth state (in real app, use proper auth)
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("userEmail", formData.email)

        router.push("/dashboard")
      } else {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة")
      }
    } catch (err) {
      setError(t("error.network"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md shadow-2xl border-0 bg-gradient-to-b from-background to-background/95">
      <CardHeader className="text-center pb-8">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center shadow-lg">
            <Shield className="h-10 w-10 text-primary" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          {t("login.title")}
        </CardTitle>
        <CardDescription className="text-lg mt-2">{t("login.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-950/20">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-medium">{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            <Label htmlFor="email" className="text-base font-medium">
              {t("login.email")}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="admin@mhrsd.gov.sa"
              className="h-12 text-base"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-base font-medium">
              {t("login.password")}
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="h-12 text-base pr-12"
                required
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showPassword ? t("login.hidePassword") : t("login.showPassword")}</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
                disabled={isLoading}
              />
              <Label htmlFor="remember" className="text-sm font-medium">
                {t("login.rememberMe")}
              </Label>
            </div>
            <Button
              variant="link"
              className="px-0 text-sm font-medium text-primary hover:text-primary/80"
              disabled={isLoading}
            >
              {t("login.forgotPassword")}
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {t("common.loading")}
              </>
            ) : (
              t("login.signIn")
            )}
          </Button>
        </form>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg border">
          <p className="text-sm font-medium text-center mb-2">{t("login.demo.title")}</p>
          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>{t("login.demo.email")}</p>
            <p>{t("login.demo.password")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
