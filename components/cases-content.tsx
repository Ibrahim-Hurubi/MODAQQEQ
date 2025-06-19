"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Upload, Eye, Calendar, User, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function CasesContent() {
  const { language, t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [riskFilter, setRiskFilter] = useState("all")
  const [cases, setCases] = useState([])

  useEffect(() => {
    // Mock data with proper Arabic/English content
    const mockCases = [
      {
        id: "CASE-2024-001",
        title: language === "ar" ? "احتيال توظيف مشتبه به" : "Suspected Employment Fraud",
        description:
          language === "ar"
            ? "تحقيق في ادعاءات توظيف احتيالية محتملة وتلاعب في المستندات"
            : "Investigation into potential fraudulent employment claims and document manipulation",
        category: language === "ar" ? "احتيال توظيف" : "Employment Fraud",
        status: language === "ar" ? "قيد المراجعة" : "Under Review",
        priority: language === "ar" ? "عالية" : "High",
        riskLevel: language === "ar" ? "عالي" : "High",
        riskScore: 87,
        fraudProbability: 0.89,
        confidence: 0.94,
        createdAt: "2024-01-15T10:30:00Z",
        assignedTo: language === "ar" ? "أحمد الراشد" : "Ahmad Al-Rashid",
        department: language === "ar" ? "قسم الامتثال والتدقيق" : "Compliance & Audit Division",
      },
      {
        id: "CASE-2024-002",
        title: language === "ar" ? "قضية تلاعب مالي" : "Financial Manipulation Case",
        description:
          language === "ar"
            ? "معاملات مالية مشبوهة ومطالبات استحقاقات تتطلب تحقيق"
            : "Suspicious financial transactions and benefit claims requiring investigation",
        category: language === "ar" ? "تلاعب مالي" : "Financial Manipulation",
        status: language === "ar" ? "مكتملة" : "Completed",
        priority: language === "ar" ? "متوسطة" : "Medium",
        riskLevel: language === "ar" ? "متوسط" : "Medium",
        riskScore: 62,
        fraudProbability: 0.65,
        confidence: 0.88,
        createdAt: "2024-01-14T09:15:00Z",
        assignedTo: language === "ar" ? "فاطمة الزهراء" : "Fatima Al-Zahra",
        department: language === "ar" ? "وحدة التحقيق في الاحتيال" : "Fraud Investigation Unit",
      },
      {
        id: "CASE-2024-003",
        title: language === "ar" ? "تحقيق تزوير مستندات" : "Document Forgery Investigation",
        description:
          language === "ar"
            ? "مستندات مزورة متعددة مقدمة لطلبات الاستحقاقات"
            : "Multiple forged documents submitted for benefit applications",
        category: language === "ar" ? "تزوير مستندات" : "Document Forgery",
        status: language === "ar" ? "قيد الانتظار" : "Pending",
        priority: language === "ar" ? "عالية" : "High",
        riskLevel: language === "ar" ? "عالي" : "High",
        riskScore: 91,
        fraudProbability: 0.93,
        confidence: 0.96,
        createdAt: "2024-01-13T11:20:00Z",
        assignedTo: language === "ar" ? "محمد العتيبي" : "Mohammed Al-Otaibi",
        department: language === "ar" ? "وحدة التحقيق في الاحتيال" : "Fraud Investigation Unit",
      },
    ]

    setCases(mockCases)
  }, [language])

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

  const getStatusIcon = (status: string) => {
    const statusLower = status.toLowerCase()
    if (statusLower.includes("completed") || statusLower.includes("مكتملة")) return CheckCircle
    if (statusLower.includes("review") || statusLower.includes("مراجعة")) return Eye
    if (statusLower.includes("pending") || statusLower.includes("انتظار")) return Clock
    return Clock
  }

  const filteredCases = cases.filter((case_) => {
    const matchesSearch =
      case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || case_.status.toLowerCase().includes(statusFilter.toLowerCase())
    const matchesRisk = riskFilter === "all" || case_.riskLevel.toLowerCase().includes(riskFilter.toLowerCase())

    return matchesSearch && matchesStatus && matchesRisk
  })

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

  return (
    <motion.div className="container mx-auto px-4 py-8" initial="hidden" animate="visible" variants={containerVariants}>
      {/* Header */}
      <motion.div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8" variants={itemVariants}>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{t("cases.management")}</h1>
          <p className="text-muted-foreground text-lg">{t("cases.managementDesc")}</p>
        </div>
        <div className="flex gap-3 mt-6 lg:mt-0">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/cases/upload">
              <Upload className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
              {t("dashboard.uploadCase")}
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants}>
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-background to-background/95">
          <CardHeader>
            <CardTitle className="text-lg">{t("cases.searchFilter")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground rtl:left-auto rtl:right-3" />
                <Input
                  placeholder={t("cases.searchPlaceholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rtl:pl-3 rtl:pr-10"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={t("cases.allStatuses")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("cases.allStatuses")}</SelectItem>
                  <SelectItem value={language === "ar" ? "قيد المراجعة" : "under review"}>
                    {t("cases.underReview")}
                  </SelectItem>
                  <SelectItem value={language === "ar" ? "مكتملة" : "completed"}>{t("cases.completed")}</SelectItem>
                  <SelectItem value={language === "ar" ? "قيد الانتظار" : "pending"}>{t("cases.pending")}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={riskFilter} onValueChange={setRiskFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={t("cases.allRiskLevels")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("cases.allRiskLevels")}</SelectItem>
                  <SelectItem value={language === "ar" ? "عالي" : "high"}>{t("cases.highRisk")}</SelectItem>
                  <SelectItem value={language === "ar" ? "متوسط" : "medium"}>{t("cases.mediumRisk")}</SelectItem>
                  <SelectItem value={language === "ar" ? "منخفض" : "low"}>{t("cases.lowRisk")}</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4 rtl:mr-0 rtl:ml-2" />
                {t("cases.advancedFilter")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Cases Table */}
      <motion.div variants={itemVariants}>
        <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-background/95">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">{t("cases.casesList")}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {t("cases.showing")} {filteredCases.length} {t("cases.of")} {cases.length}{" "}
                  {language === "en" ? "cases" : "قضية"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-base font-semibold">{t("cases.id")}</TableHead>
                    <TableHead className="text-base font-semibold">{t("cases.title")}</TableHead>
                    <TableHead className="text-base font-semibold">{t("cases.category")}</TableHead>
                    <TableHead className="text-base font-semibold">{t("cases.riskLevel")}</TableHead>
                    <TableHead className="text-base font-semibold">{t("cases.status")}</TableHead>
                    <TableHead className="text-base font-semibold">{t("cases.assignedTo")}</TableHead>
                    <TableHead className="text-base font-semibold">{t("cases.date")}</TableHead>
                    <TableHead className="text-base font-semibold">{t("cases.actions")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCases.map((case_) => {
                    const StatusIcon = getStatusIcon(case_.status)
                    return (
                      <TableRow key={case_.id} className="hover:bg-muted/50 transition-colors">
                        <TableCell className="font-medium">
                          <Link href={`/cases/${case_.id}`} className="hover:underline text-primary font-semibold">
                            {case_.id}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-base">{case_.title}</div>
                            <div className="text-sm text-muted-foreground mt-1 max-w-xs truncate">
                              {case_.description}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">{case_.category}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <Badge variant={getRiskBadgeVariant(case_.riskLevel)} className="text-xs">
                              {case_.riskLevel}
                            </Badge>
                            <span className="text-sm font-medium">{case_.riskScore}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <StatusIcon className="h-4 w-4" />
                            <Badge variant={getStatusBadgeVariant(case_.status)} className="text-xs">
                              {case_.status}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{case_.assignedTo}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {new Date(case_.createdAt).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US")}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/cases/${case_.id}`}>
                              <Eye className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                              {t("cases.view")}
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
