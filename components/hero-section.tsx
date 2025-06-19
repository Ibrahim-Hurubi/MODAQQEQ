"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Brain, Eye } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const { t, isRTL, language } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const features = [
    {
      icon: Brain,
      title: t("hero.advancedAnalysis"),
      description: t("hero.advancedAnalysisDesc"),
      color: "from-blue-500/20 to-blue-600/30",
      iconColor: "text-blue-600",
    },
    {
      icon: Eye,
      title: t("hero.continuousMonitoring"),
      description: t("hero.continuousMonitoringDesc"),
      color: "from-green-500/20 to-green-600/30",
      iconColor: "text-green-600",
    },
    {
      icon: Shield,
      title: t("hero.advancedSecurity"),
      description: t("hero.advancedSecurityDesc"),
      color: "from-primary/20 to-primary/30",
      iconColor: "text-primary",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        {/* Animated Background Elements */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md px-8 py-4 text-base font-medium mb-8 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Shield className="mr-3 h-6 w-6 rtl:mr-0 rtl:ml-3 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-semibold">
                {t("hero.ministryBadge")}
              </span>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.h1
              className="text-5xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent drop-shadow-sm">
                {t("home.title")}
              </span>
              <br />
              <motion.span
                className="text-foreground/90 text-3xl lg:text-6xl font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {t("home.subtitle")}
              </motion.span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              className="text-xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              {t("home.description")}
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  asChild
                  className="min-w-[250px] h-16 text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-primary via-primary/95 to-primary/90 hover:from-primary/95 hover:to-primary border-0 rounded-2xl font-semibold"
                >
                  <Link href="/login" className="group">
                    {t("home.getStarted")}
                    <ArrowRight
                      className={`ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 ${
                        isRTL ? "rotate-180 mr-3 ml-0 group-hover:-translate-x-1" : ""
                      }`}
                    />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="min-w-[250px] h-16 text-xl border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-500 rounded-2xl font-semibold backdrop-blur-sm"
                >
                  <Link href="/about">{t("home.learnMore")}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Feature Icons */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" variants={containerVariants}>
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
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl h-full">
                  <motion.div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: `${index * 2}s` }}
                  >
                    <feature.icon className={`h-12 w-12 ${feature.iconColor}`} />
                  </motion.div>
                  <h3 className="font-bold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
