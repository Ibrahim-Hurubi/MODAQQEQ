"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Upload,
  Users,
  Shield,
  Eye,
  BarChart3,
  Activity,
  Database,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { motion } from "framer-motion"

export function DashboardContent() {
  const { t, language } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState([])
  const [recentCases, setRecentCases] = useState([])

  useEffect(() => {
    // Simulate data loading
    const loadData = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const statsData = [
        {
          title: t("dashboard.totalCases"),
          value: "1,247",
          change: "+12%",
          icon: FileText,
          color: "text-blue-600",
          bgColor: "from-blue-500/10 to-blue-600/20",
          trend: "up",
        },
        {
          title: t("dashboard.activeCases"),
          value: "89",
          change: "+5%",
          icon: Clock,
          color: "text-orange-600",
          bgColor: "from-orange-500/10 to-orange-600/20",
          trend: "up",
        },
        {
          title: t("dashboard.resolvedCases"),
          value: "1,158",
          change: "+8%",
          icon: CheckCircle,
          color: "text-green-600",
          bgColor: "from-green-500/10 to-green-600/20",
          trend: "up",
        },
        {
          title: t("dashboard.riskScore"),
          value: "23%",
          change: "-3%",
          icon: AlertTriangle,
          color: "text-red-600",
          bgColor: "from-red-500/10 to-red-600/20",
          trend: "down",
        },
      ]

      const casesData = [
        {
          id: "CASE-2024-001",
          title: language === "ar" ? "احتيال توظيف مشتبه به" : "Suspected Employment Fraud",
          type: language === "ar" ? "احتيال توظيف" : "Employment Fraud",
          riskLevel: language === "ar" ? "عالي" : "High",
          status: language === "ar" ? "قيد المراجعة" : "Under Review",
          date: "2024-01-15",
          score: 85,
          priority: language === "ar" ? "عالية" : "High",
        },
        {
          id: "CASE-2024-002",
          title: language === "ar" ? "تلاعب مالي" : "Financial Manipulation",
          type: language === "ar" ? "تلاعب مالي" : "Financial Manipulation",
          riskLevel: language === "ar" ? "متوسط" : "Medium",
          status: language === "ar" ? "مكتملة" : "Completed",
          date: "2024-01-14",
          score: 62,
          priority: language === "ar" ? "متوسطة" : "Medium",
        },
        {
          id: "CASE-2024-003",
          title: language === "ar" ? "تزوير مستندات" : "Document Forgery",
          type: language === "ar" ? "تزوير مستندات" : "Document Forgery",
          riskLevel: language === "ar" ? "عالي" : "High",
          status: language === "ar" ? "قيد الانتظار" : "Pending",
          date: "2024-01-13",
          score: 91,
          priority: language === "ar" ? "عالية" : "High",
        },
      ]

      setStats(statsData)
      setRecentCases(casesData)
      setIsLoading(false)
    }

    loadData()
  }, [language, t])

  const getRiskBadgeVariant = (risk: string) => {
    const riskLower = risk.toLowerCase()
    if (riskLower.includes("high") || riskLower.includes("عالي")) return "destructive"
    if (riskLower.includes("medium") || riskLower.includes("متوسط")) return "default"
    if (riskLower.includes("low") || riskLower.includes("منخفض")) return "secondary"
    return "default"
  }

  const getStatusBadgeVariant = (status: string) => {
    const statusLower = status.toLowerCase()
    if (statusLower.includes("completed") || statusLower.includes("مكتملة")) return "default"
    if (statusLower.includes("review") || statusLower.includes("مراجعة")) return "secondary"
    if (statusLower.includes("pending") || statusLower.includes("انتظار")) return "outline"
    return "outline"
  }

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

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    )
  }

  return (
    <motion.div className="container mx-auto px-4 py-8" initial="hidden" animate="visible" variants={containerVariants}>
      {/* Header */}
      <motion.div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8" variants={itemVariants}>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{t("dashboard.title")}</h1>
          <p className="text-muted-foreground text-lg">{t("dashboard.subtitle")}</p>
        </div>
        <div className="flex gap-3 mt-6 lg:mt-0">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/cases/upload">
              <Upload className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
              {t("dashboard.uploadCase")}
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
            <Link href="/cases">
              <Eye className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
              {t("dashboard.viewAll")}
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" variants={itemVariants}>
        {stats.map((stat, index) => (
          <motion.div key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="group">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-background/95 overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">
                  <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{stat.change}</span>{" "}
                  {t("dashboard.fromLastMonth")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Cases */}
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-background/95">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{t("dashboard.recentCases")}</CardTitle>
                  <CardDescription className="text-base mt-2">{t("dashboard.recentCasesDesc")}</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/cases">{t("dashboard.viewAll")}</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-base">{t("cases.id")}</TableHead>
                    <TableHead className="text-base">{t("cases.category")}</TableHead>
                    <TableHead className="text-base">{t("cases.riskLevel")}</TableHead>
                    <TableHead className="text-base">{t("cases.status")}</TableHead>
                    <TableHead className="text-base">{language === "en" ? "Score" : "النتيجة"}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCases.map((case_) => (
                    <TableRow key={case_.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">
                        <Link href={`/cases/${case_.id}`} className="hover:underline text-primary">
                          {case_.id}
                        </Link>
                      </TableCell>
                      <TableCell className="text-sm">{case_.type}</TableCell>
                      <TableCell>
                        <Badge variant={getRiskBadgeVariant(case_.riskLevel)} className="text-xs">
                          {case_.riskLevel}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(case_.status)} className="text-xs">
                          {case_.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Progress value={case_.score} className="w-16" />
                          <span className="text-sm font-medium">{case_.score}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/95">
              <CardHeader>
                <CardTitle className="text-lg">{t("dashboard.quickActions")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start text-base" asChild>
                  <Link href="/cases/upload">
                    <Upload className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                    {t("dashboard.uploadCase")}
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start text-base" asChild>
                  <Link href="/analytics">
                    <BarChart3 className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                    {t("dashboard.viewAnalytics")}
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start text-base" asChild>
                  <Link href="/reports">
                    <FileText className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                    {t("dashboard.generateReport")}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* System Status */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/95">
              <CardHeader>
                <CardTitle className="text-lg">{t("dashboard.systemStatus")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/20 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-base font-medium">{t("dashboard.analysisEngine")}</span>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    {t("dashboard.online")}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-base font-medium">{t("dashboard.activeUsers")}</span>
                  </div>
                  <span className="text-base font-medium">24</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/20 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-orange-600" />
                    </div>
                    <span className="text-base font-medium">{t("dashboard.processingQueue")}</span>
                  </div>
                  <span className="text-base font-medium">7 {t("dashboard.cases")}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/20 flex items-center justify-center">
                      <Database className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-base font-medium">{t("dashboard.database")}</span>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    {t("dashboard.healthy")}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-background/95">
              <CardHeader>
                <CardTitle className="text-lg">{t("dashboard.performanceMetrics")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t("dashboard.detectionAccuracy")}</span>
                    <span className="font-medium">99.2%</span>
                  </div>
                  <Progress value={99.2} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t("dashboard.processingSpeed")}</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t("dashboard.systemUsage")}</span>
                    <span className="font-medium">73%</span>
                  </div>
                  <Progress value={73} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
