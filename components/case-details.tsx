"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  AlertTriangle,
  CheckCircle,
  FileText,
  Download,
  Share,
  Flag,
  Calendar,
  User,
  Building,
  TrendingUp,
  Eye,
} from "lucide-react"
import { motion } from "framer-motion"

interface CaseDetailsProps {
  caseId: string
}

export function CaseDetails({ caseId }: CaseDetailsProps) {
  const { language } = useLanguage()

  // Mock case data with proper language support
  const caseData = {
    id: caseId,
    title: language === "ar" ? "تحقيق احتيال توظيف مشتبه به" : "Suspected Employment Fraud Investigation",
    description:
      language === "ar"
        ? "تحقيق في ادعاءات توظيف احتيالية محتملة وتلاعب في المستندات"
        : "Investigation into potential fraudulent employment claims and document manipulation",
    category: language === "ar" ? "احتيال التوظيف" : "Employment Fraud",
    status: language === "ar" ? "قيد المراجعة" : "Under Review",
    priority: language === "ar" ? "عالية" : "High",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T14:45:00Z",
    assignedTo: language === "ar" ? "أحمد الراشد" : "Ahmad Al-Rashid",
    department: language === "ar" ? "قسم الامتثال والتدقيق" : "Compliance & Audit Division",
    riskScore: 87,
    fraudProbability: 0.89,
    confidence: 0.94,
    keyFindings:
      language === "ar"
        ? [
            "تم اكتشاف سجلات توظيف متعددة بتواريخ متداخلة",
            "معلومات راتب غير متسقة عبر مستندات مختلفة",
            "أنماط مشبوهة في طوابع زمنية لتقديم المستندات",
            "فشل التحقق من الهوية للمستندات الثانوية",
            "أنماط جغرافية غير عادية في تاريخ التوظيف",
          ]
        : [
            "Multiple employment records with overlapping dates detected",
            "Inconsistent salary information across different documents",
            "Suspicious patterns in document submission timestamps",
            "Identity verification failed for secondary documentation",
            "Unusual geographic patterns in employment history",
          ],
    recommendations:
      language === "ar"
        ? [
            "إيقاف فوري للاستحقاقات في انتظار التحقيق",
            "الاتصال بجميع أصحاب العمل المدرجين للتحقق",
            "طلب مستندات هوية إضافية",
            "جدولة مقابلة شخصية مع المدعي",
            "المراجعة المتقاطعة مع قاعدة بيانات التوظيف الوطنية",
          ]
        : [
            "Immediate suspension of benefits pending investigation",
            "Contact all listed employers for verification",
            "Request additional identity documentation",
            "Schedule in-person interview with claimant",
            "Cross-reference with national employment database",
          ],
    documents: [
      {
        name: language === "ar" ? "عقد_التوظيف_2024.pdf" : "Employment_Contract_2024.pdf",
        size: "2.4 MB",
        type: "PDF",
      },
      {
        name: language === "ar" ? "شهادة_الراتب.pdf" : "Salary_Certificate.pdf",
        size: "1.8 MB",
        type: "PDF",
      },
      {
        name: language === "ar" ? "مستندات_الهوية.jpg" : "ID_Documents.jpg",
        size: "3.2 MB",
        type: "Image",
      },
      {
        name: language === "ar" ? "كشوف_البنك.xlsx" : "Bank_Statements.xlsx",
        size: "1.1 MB",
        type: "Excel",
      },
    ],
    timeline: [
      {
        date: "2024-01-15 10:30",
        event: language === "ar" ? "تم إنشاء القضية ورفع المستندات" : "Case created and documents uploaded",
        user: language === "ar" ? "النظام" : "System",
      },
      {
        date: "2024-01-15 10:35",
        event: language === "ar" ? "بدء التحليل المتقدم" : "Advanced analysis initiated",
        user: language === "ar" ? "النظام" : "System",
      },
      {
        date: "2024-01-15 10:42",
        event: language === "ar" ? "تم اكتشاف أنماط عالية المخاطر" : "High-risk patterns detected",
        user: language === "ar" ? "محرك التحليل" : "Analysis Engine",
      },
      {
        date: "2024-01-15 11:15",
        event: language === "ar" ? "تم تعيين القضية لفريق الامتثال" : "Case assigned to compliance team",
        user: language === "ar" ? "المشرف" : "Supervisor",
      },
      {
        date: "2024-01-15 14:45",
        event: language === "ar" ? "المراجعة اليدوية قيد التقدم" : "Manual review in progress",
        user: language === "ar" ? "أحمد الراشد" : "Ahmad Al-Rashid",
      },
    ],
  }

  const getRiskColor = (score: number) => {
    if (score >= 80) return "text-red-600"
    if (score >= 60) return "text-orange-600"
    return "text-green-600"
  }

  const getRiskLevel = (score: number) => {
    if (language === "ar") {
      if (score >= 80) return "مخاطر عالية"
      if (score >= 60) return "مخاطر متوسطة"
      return "مخاطر منخفضة"
    } else {
      if (score >= 80) return "High Risk"
      if (score >= 60) return "Medium Risk"
      return "Low Risk"
    }
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

  return (
    <motion.div className="max-w-7xl mx-auto space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
      {/* Header */}
      <motion.div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" variants={itemVariants}>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{caseData.title}</h1>
          <p className="text-muted-foreground text-lg">
            {language === "ar" ? "رقم القضية:" : "Case ID:"} {caseData.id}
          </p>
        </div>
        <div className="flex gap-3 mt-6 lg:mt-0">
          <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
            <Download className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
            {language === "ar" ? "تصدير التقرير" : "Export Report"}
          </Button>
          <Button variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300">
            <Share className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
            {language === "ar" ? "مشاركة القضية" : "Share Case"}
          </Button>
          <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <Flag className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
            {language === "ar" ? "وضع علامة للمراجعة" : "Flag for Review"}
          </Button>
        </div>
      </motion.div>

      {/* Status and Risk Overview */}
      <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" variants={itemVariants}>
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getRiskColor(caseData.riskScore)} mb-2`}>{caseData.riskScore}%</div>
              <div className="text-base text-muted-foreground">{language === "ar" ? "درجة المخاطر" : "Risk Score"}</div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="text-center">
              <Badge variant="destructive" className="text-lg px-4 py-2 mb-2">
                {getRiskLevel(caseData.riskScore)}
              </Badge>
              <div className="text-base text-muted-foreground">
                {language === "ar" ? "مستوى المخاطر" : "Risk Level"}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {(caseData.fraudProbability * 100).toFixed(0)}%
              </div>
              <div className="text-base text-muted-foreground">
                {language === "ar" ? "احتمالية الاحتيال" : "Fraud Probability"}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{(caseData.confidence * 100).toFixed(0)}%</div>
              <div className="text-base text-muted-foreground">
                {language === "ar" ? "ثقة التحليل" : "Analysis Confidence"}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Case Information */}
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-background/95">
            <CardHeader>
              <CardTitle className="text-xl">{language === "ar" ? "معلومات القضية" : "Case Information"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-base font-medium text-muted-foreground mb-2">
                    {language === "ar" ? "الفئة" : "Category"}
                  </h4>
                  <p className="text-lg">{caseData.category}</p>
                </div>
                <div>
                  <h4 className="text-base font-medium text-muted-foreground mb-2">
                    {language === "ar" ? "الحالة" : "Status"}
                  </h4>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {caseData.status}
                  </Badge>
                </div>
                <div>
                  <h4 className="text-base font-medium text-muted-foreground mb-2">
                    {language === "ar" ? "الأولوية" : "Priority"}
                  </h4>
                  <Badge variant="destructive" className="text-base px-3 py-1">
                    {caseData.priority}
                  </Badge>
                </div>
                <div>
                  <h4 className="text-base font-medium text-muted-foreground mb-2">
                    {language === "ar" ? "المسؤول" : "Assigned To"}
                  </h4>
                  <div className="flex items-center text-lg">
                    <User className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    <span>{caseData.assignedTo}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h4 className="text-base font-medium text-muted-foreground mb-3">
                  {language === "ar" ? "الوصف" : "Description"}
                </h4>
                <p className="text-base leading-relaxed">{caseData.description}</p>
              </div>

              <Separator />

              {/* Key Findings */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 rtl:mr-0 rtl:ml-2 text-red-600" />
                  {language === "ar" ? "النتائج الرئيسية" : "Key Findings"}
                </h3>
                <div className="space-y-3">
                  {caseData.keyFindings.map((finding, index) => (
                    <Alert key={index} variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-base">{finding}</AlertDescription>
                    </Alert>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Recommendations */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2 rtl:mr-0 rtl:ml-2 text-green-600" />
                  {language === "ar" ? "التوصيات" : "Recommendations"}
                </h3>
                <div className="space-y-3">
                  {caseData.recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 rtl:space-x-reverse p-4 bg-green-50 dark:bg-green-950/20 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-base">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Case Timeline */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                  {language === "ar" ? "الجدول الزمني للقضية" : "Case Timeline"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {caseData.timeline.map((event, index) => (
                    <div key={index} className="flex space-x-3 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-medium">{event.event}</p>
                        <p className="text-sm text-muted-foreground">
                          {event.date} • {event.user}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Documents */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                  {language === "ar" ? "مستندات القضية" : "Case Documents"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {caseData.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-base font-medium">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {doc.size} • {doc.type}
                          </p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">{language === "ar" ? "إجراءات سريعة" : "Quick Actions"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start text-base" variant="outline">
                  <Eye className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                  {language === "ar" ? "جدولة مراجعة" : "Schedule Review"}
                </Button>
                <Button className="w-full justify-start text-base" variant="outline">
                  <User className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                  {language === "ar" ? "الاتصال بالمدعي" : "Contact Claimant"}
                </Button>
                <Button className="w-full justify-start text-base" variant="outline">
                  <Building className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                  {language === "ar" ? "التحقق من أصحاب العمل" : "Verify Employers"}
                </Button>
                <Button className="w-full justify-start text-base" variant="outline">
                  <TrendingUp className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                  {language === "ar" ? "إنشاء تقرير" : "Generate Report"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
