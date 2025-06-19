"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, Globe, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t, isRTL } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/video", label: t("nav.watchVideo") },
    { href: "/technologies", label: t("nav.technologies") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg h-16",
      )}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center space-x-2 rtl:space-x-reverse transition-all duration-300 hover:scale-105",
              "group",
            )}
          >
            <div className="relative h-8 w-8">
              <Image
                src="/images/modaqqeq-logo.png"
                alt="Modaqqeq Logo"
                width={32}
                height={32}
                className="transition-all duration-300 group-hover:rotate-12"
              />
              <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {t("home.title")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 hover:text-primary",
                  "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-primary",
                  "before:transition-all before:duration-300 hover:before:w-full",
                  "transform hover:scale-105",
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative overflow-hidden transition-all duration-300 hover:scale-110 hover:bg-primary/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative overflow-hidden transition-all duration-300 hover:scale-110 hover:bg-primary/10"
                >
                  <Globe className="h-5 w-5 transition-all duration-300" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-in slide-in-from-top-2 duration-300">
                <DropdownMenuItem
                  onClick={() => setLanguage("ar")}
                  className={cn(
                    "transition-all duration-200 hover:bg-primary/10",
                    language === "ar" && "bg-primary/5 text-primary",
                  )}
                >
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "transition-all duration-200 hover:bg-primary/10",
                    language === "en" && "bg-primary/5 text-primary",
                  )}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Button
              asChild
              className="hidden sm:flex bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/login">{t("nav.login")}</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0",
                  )}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-primary/5 rounded-lg",
                    "transform hover:translate-x-2 rtl:hover:-translate-x-2",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mx-4 mt-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
              >
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.login")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
