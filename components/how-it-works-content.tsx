"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Brain, Shield, FileText, ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorksContent() {
  const { t, isRTL } = useLanguage()

  const steps = [
    {
      number: "01",
      icon: Database,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      color: "text-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/20",
    },
    {
      number: "02",
      icon: Brain,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
      color: "text-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/20",
    },
    {
      number: "03",
      icon: Shield,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      color: "text-green-600",
      bgColor: "from-green-500/10 to-green-600/20",
    },
    {
      number: "04",
      icon: FileText,
      title: t("howItWorks.step4.title"),
      description: t("howItWorks.step4.description"),
      color: "text-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stepVariants = {
    hidden: { opacity: 0, x: isRTL ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
            <motion.h1
              className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                {t("howItWorks.title")}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t("howItWorks.subtitle")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stepVariants}
                className="relative mb-16 last:mb-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center`}
                        >
                          <step.icon className={`h-8 w-8 ${step.color}`} />
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold">{step.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>

                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-primary">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">مرحلة مكتملة</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-background/95 overflow-hidden">
                        <CardContent className="p-8">
                          <div
                            className={`w-full h-48 rounded-xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center relative overflow-hidden`}
                          >
                            <step.icon className={`h-24 w-24 ${step.color} opacity-80`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <ArrowRight className={`h-6 w-6 text-primary ${isRTL ? "rotate-180" : ""}`} />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">تدفق العمليات</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              عملية متكاملة ومتسلسلة لضمان أعلى دقة في كشف الاحتيال
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-background/95 group">
                  <CardContent className="text-center p-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-primary/60 mb-2">{step.number}</div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
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
