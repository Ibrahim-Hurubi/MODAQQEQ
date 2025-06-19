"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, Shield, Zap, Globe, Cpu, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function TechnologiesContent() {
  const { t } = useLanguage()

  const technologies = [
    {
      icon: Brain,
      title: t("technologies.ai.title"),
      description: t("technologies.ai.description"),
      color: "text-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/20",
      features: ["التعلم العميق", "الشبكات العصبية", "معالجة البيانات الضخمة"],
    },
    {
      icon: Database,
      title: t("technologies.ml.title"),
      description: t("technologies.ml.description"),
      color: "text-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/20",
      features: ["التعلم المُشرف", "التعلم غير المُشرف", "التعلم المعزز"],
    },
    {
      icon: Globe,
      title: t("technologies.nlp.title"),
      description: t("technologies.nlp.description"),
      color: "text-green-600",
      bgColor: "from-green-500/10 to-green-600/20",
      features: ["تحليل النصوص", "استخراج المعلومات", "التحقق من المستندات"],
    },
    {
      icon: Shield,
      title: t("technologies.blockchain.title"),
      description: t("technologies.blockchain.description"),
      color: "text-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/20",
      features: ["التشفير المتقدم", "السجلات الثابتة", "التحقق اللامركزي"],
    },
    {
      icon: Zap,
      title: "الحوسبة السحابية",
      description: "بنية تحتية مرنة وقابلة للتوسع لمعالجة البيانات الضخمة",
      color: "text-yellow-600",
      bgColor: "from-yellow-500/10 to-yellow-600/20",
      features: ["التوسع التلقائي", "الأداء العالي", "التوفر المستمر"],
    },
    {
      icon: Lock,
      title: "الأمان السيبراني",
      description: "حماية متقدمة للبيانات والأنظمة من التهديدات السيبرانية",
      color: "text-red-600",
      bgColor: "from-red-500/10 to-red-600/20",
      features: ["التشفير الشامل", "المصادقة المتعددة", "مراقبة التهديدات"],
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
                {t("technologies.title")}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t("technologies.subtitle")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-background/95 group overflow-hidden">
                  <CardHeader className="pb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tech.icon className={`h-10 w-10 ${tech.color}`} />
                    </div>
                    <CardTitle className="text-xl">{tech.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-3">الميزات الرئيسية:</h4>
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 rtl:space-x-reverse">
                          <div className={`w-2 h-2 rounded-full ${tech.color.replace("text-", "bg-")}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">المكدس التقني</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              أحدث التقنيات والأدوات المستخدمة في تطوير النظام
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Python", icon: "🐍", category: "Backend" },
              { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
              { name: "React", icon: "⚛️", category: "Frontend" },
              { name: "PostgreSQL", icon: "🐘", category: "Database" },
              { name: "Docker", icon: "🐳", category: "DevOps" },
              { name: "Kubernetes", icon: "☸️", category: "Orchestration" },
              { name: "Redis", icon: "🔴", category: "Cache" },
              { name: "Elasticsearch", icon: "🔍", category: "Search" },
              { name: "Apache Kafka", icon: "📡", category: "Streaming" },
              { name: "Prometheus", icon: "📊", category: "Monitoring" },
              { name: "NGINX", icon: "🌐", category: "Web Server" },
              { name: "JWT", icon: "🔐", category: "Security" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-background/95 group">
                  <CardContent className="p-4">
                    <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Architecture */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">معمارية النظام</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              بنية متقدمة ومرنة تضمن الأداء العالي والموثوقية
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-background/95 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 flex items-center justify-center mx-auto mb-4">
                        <Globe className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="font-bold mb-2">الواجهة الأمامية</h3>
                      <p className="text-sm text-muted-foreground">واجهة مستخدم تفاعلية ومتجاوبة</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/20 flex items-center justify-center mx-auto mb-4">
                        <Cpu className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-bold mb-2">طبقة المعالجة</h3>
                      <p className="text-sm text-muted-foreground">معالجة البيانات والذكاء الاصطناعي</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/20 flex items-center justify-center mx-auto mb-4">
                        <Database className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold mb-2">قاعدة البيانات</h3>
                      <p className="text-sm text-muted-foreground">تخزين آمن وموثوق للبيانات</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
