"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Clock, Volume2, Maximize, Download } from "lucide-react"
import { motion } from "framer-motion"

export function VideoContent() {
  const { t } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)

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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

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
                {t("video.title")}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t("video.subtitle")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-background to-background/95">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-secondary/5">
                    {!isPlaying ? (
                      // Video Thumbnail
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                          <Button
                            size="lg"
                            onClick={() => setIsPlaying(true)}
                            className="w-24 h-24 rounded-full bg-white/90 hover:bg-white text-primary hover:text-primary shadow-2xl"
                          >
                            <Play className="h-8 w-8 ml-1" />
                          </Button>
                        </motion.div>

                        {/* Video Info Overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <Clock className="h-4 w-4" />
                                <span className="text-sm">{t("video.duration")}</span>
                              </div>
                              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <Volume2 className="h-4 w-4" />
                                <span className="text-sm">HD</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Video Player Placeholder
                      <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
                          <p className="text-lg">جاري تحميل الفيديو...</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Video Controls */}
            <motion.div className="mt-8 flex flex-wrap gap-4 justify-center" variants={itemVariants}>
              <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-4 w-4" />
                تحميل الفيديو
              </Button>
              <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105">
                <Maximize className="mr-2 h-4 w-4" />
                عرض بملء الشاشة
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Video Features */}
      <section className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">ما ستتعلمه من الفيديو</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              شرح مفصل لجميع ميزات النظام وكيفية استخدامه بفعالية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "واجهة المستخدم",
                description: "تعرف على واجهة النظام البديهية وسهولة الاستخدام",
                icon: "🖥️",
              },
              {
                title: "تحليل البيانات",
                description: "شاهد كيف يحلل الذكاء الاصطناعي البيانات في الوقت الفعلي",
                icon: "🧠",
              },
              {
                title: "كشف الاحتيال",
                description: "تعلم كيفية تحديد الأنماط المشبوهة والاحتيال المحتمل",
                icon: "🔍",
              },
              {
                title: "التقارير",
                description: "إنشاء تقارير مفصلة وتحليلات شاملة للقضايا",
                icon: "📊",
              },
              {
                title: "الأمان",
                description: "معايير الأمان العالية وحماية البيانات الحساسة",
                icon: "🔒",
              },
              {
                title: "التكامل",
                description: "التكامل مع الأنظمة الحكومية الأخرى بسلاسة",
                icon: "🔗",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-background/95 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
