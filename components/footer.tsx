"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Shield, Mail, Phone, MapPin, Globe, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const { t, language } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/technologies", label: t("nav.technologies") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-4 py-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-3 rtl:space-x-reverse mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <Shield className="h-10 w-10 text-primary" />
                <div className="absolute inset-0 h-10 w-10 bg-primary/20 rounded-full blur-lg" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {t("home.title")}
              </span>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-lg">{t("footer.description")}</p>
            <div className="text-sm text-muted-foreground">{t("footer.allRightsReserved")}</div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6 text-foreground">{t("footer.quickLinks")}</h3>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6 text-foreground">{t("footer.contactInfo")}</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3 rtl:space-x-reverse text-muted-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span className="text-base leading-relaxed">{t("contact.address")}</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-base">{t("contact.phone")}</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-base">{t("contact.email")}</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-base">الأحد - الخميس: 8:00 ص - 4:00 م</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div className="mt-12 pt-8 border-t border-border/50 text-center" variants={itemVariants}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-base">{t("footer.developedWith")}</div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <motion.div
                className="flex items-center space-x-2 rtl:space-x-reverse text-muted-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm">{t("footer.availableLanguages")}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
