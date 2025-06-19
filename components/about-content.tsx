"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Target, Eye, Users, Award, Globe } from "lucide-react"
import { motion } from "framer-motion"

export function AboutContent() {
  const { t, language } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t("features.governmentSecurity"),
      description: t("features.governmentSecurityDesc"),
      color: "text-blue-600",
    },
    {
      icon: Target,
      title: t("stats.detectionAccuracy"),
      description: t("stats.detectionAccuracyDesc"),
      color: "text-green-600",
    },
    {
      icon: Eye,
      title: t("hero.continuousMonitoring"),
      description: t("hero.continuousMonitoringDesc"),
      color: "text-orange-600",
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "فريق من الخبراء في الذكاء الاصطناعي وأمن المعلومات",
      color: "text-purple-600",
    },
    {
      icon: Award,
      title: "معتمد حكومياً",
      description: "معتمد من وزارة الموارد البشرية والتنمية الاجتماعية",
      color: "text-red-600",
    },
    {
      icon: Globe,
      title: "رؤية 2030",
      description: "يدعم تحقيق أهداف رؤية المملكة العربية السعودية 2030",
      color: "text-indigo-600",
    },
  ]

  const stats = [
    {
      value: "99.2%",
      label: t("stats.detectionAccuracy"),
      description: t("stats.detectionAccuracyDesc"),
    },
    {
      value: "45%",
      label: t("stats.processingSpeed"),
      description: t("stats.processingSpeedDesc"),
    },
    {
      value: "24/7",
      label: t("stats.monitoring"),
      description: t("stats.monitoringDesc"),
    },
    {
      value: "1,000+",
      label: t("stats.analyzedCases"),
      description: t("stats.analyzedCasesDesc"),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-medium mb-8 backdrop-blur-sm"
              variants={itemVariants}
            >
              <Shield className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {t("about.subtitle")}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                {t("about.title")}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t("about.description")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-background to-background/95">
                <CardHeader className="pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{t("about.mission.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {t("about.mission.description")}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-background to-background/95">
                <CardHeader className="pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/20 flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{t("about.vision.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {t("about.vision.description")}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("about.systemFeatures")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.systemFeaturesDesc")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-background/95 group">
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-muted/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("about.provenStats")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.provenStatsDesc")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-background/95">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
