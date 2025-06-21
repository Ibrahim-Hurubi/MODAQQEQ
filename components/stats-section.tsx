"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function StatsSection() {
  const { t, language } = useLanguage()
  const [counters, setCounters] = useState([0, 0, 0, 0])

  const stats = [
    {
      value: 99.2,
      suffix: "%",
      label: t("stats.detectionAccuracy"),
      description: t("stats.detectionAccuracyDesc"),
      color: "text-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/20",
    },
    {
      value: 45,
      suffix: "%",
      label: t("stats.processingSpeed"),
      description: t("stats.processingSpeedDesc"),
      color: "text-green-600",
      bgGradient: "from-green-500/10 to-green-600/20",
    },
    {
      value: 24,
      suffix: "/7",
      label: t("stats.monitoring"),
      description: t("stats.monitoringDesc"),
      color: "text-orange-600",
      bgGradient: "from-orange-500/10 to-orange-600/20",
    },
    {
      value: 1000,
      suffix: "+",
      label: t("stats.analyzedCases"),
      description: t("stats.analyzedCasesDesc"),
      color: "text-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/20",
      isLarge: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = start
            return newCounters
          })
        }, 16)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const formatNumber = (num: number, isLarge = false) => {
    if (isLarge && num >= 1000) {
      return num.toFixed(0)
    }
    return num.toFixed(1)
  }

  return (
    <section id="stats-section" className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
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
            {t("home.stats.title")}
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("home.stats.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl overflow-hidden relative h-full">
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardContent className="pt-12 pb-12 relative z-10">
                  <motion.div
                    className={`text-5xl lg:text-6xl font-bold mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-500`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {formatNumber(counters[index], stat.isLarge)}
                    {stat.suffix}
                  </motion.div>
                  <div className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
