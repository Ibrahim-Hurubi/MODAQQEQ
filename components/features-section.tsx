"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Shield, Zap, Globe, Users, BarChart3, Lock, Database } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const { t, language } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: t("features.advancedDetection"),
      description: t("features.advancedDetectionDesc"),
      color: "text-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/20",
    },
    {
      icon: Shield,
      title: t("features.governmentSecurity"),
      description: t("features.governmentSecurityDesc"),
      color: "text-green-600",
      bgGradient: "from-green-500/10 to-green-600/20",
    },
    {
      icon: Zap,
      title: t("features.instantProcessing"),
      description: t("features.instantProcessingDesc"),
      color: "text-yellow-600",
      bgGradient: "from-yellow-500/10 to-yellow-600/20",
    },
    {
      icon: Globe,
      title: t("features.bilingualSupport"),
      description: t("features.bilingualSupportDesc"),
      color: "text-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/20",
    },
    {
      icon: Users,
      title: t("features.multiUserAccess"),
      description: t("features.multiUserAccessDesc"),
      color: "text-red-600",
      bgGradient: "from-red-500/10 to-red-600/20",
    },
    {
      icon: BarChart3,
      title: t("features.advancedAnalytics"),
      description: t("features.advancedAnalyticsDesc"),
      color: "text-orange-600",
      bgGradient: "from-orange-500/10 to-orange-600/20",
    },
    {
      icon: Database,
      title: t("features.smartDataManagement"),
      description: t("features.smartDataManagementDesc"),
      color: "text-indigo-600",
      bgGradient: "from-indigo-500/10 to-indigo-600/20",
    },
    {
      icon: Lock,
      title: t("features.encryptionProtection"),
      description: t("features.encryptionProtectionDesc"),
      color: "text-pink-600",
      bgGradient: "from-pink-500/10 to-pink-600/20",
    },
  ]

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {t("home.features.title")}
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("home.features.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl overflow-hidden relative">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-6 relative z-10">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className={`h-10 w-10 ${feature.color}`} />
                  </motion.div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
