"use client"

type AnalysisResult = { fraud: boolean; score: number; details?: string }

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, FileText, Loader2, CheckCircle, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export function CaseUploadForm() {
  const { language } = useLanguage()
  const router = useRouter()
  const { toast } = useToast()
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    files: [] as File[],
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: Array.from(e.target.files) })
    }
  }

  const simulateAnalysis = async () => {
    setIsAnalyzing(true)
    setAnalysisProgress(0)

    // Simulate analysis progress
    const intervals = [10, 25, 45, 60, 75, 85, 95, 100]

    for (const progress of intervals) {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setAnalysisProgress(progress)
    }

    // Mock analysis result with proper language support
    const mockResult = {
      caseId: `CASE-${Date.now()}`,
      riskScore: Math.floor(Math.random() * 40) + 60, // 60-100
      riskLevel: language === "ar" ? "عالي" : "High",
      fraudProbability: 0.87,
      keyFindings:
        language === "ar"
          ? [
              "تم اكتشاف أنماط معاملات مشبوهة",
              "تم العثور على تناقضات في المستندات",
              "شذوذ في التحقق من الهوية",
              "تاريخ توظيف غير عادي",
            ]
          : [
              "Suspicious transaction patterns detected",
              "Document inconsistencies found",
              "Identity verification anomalies",
              "Unusual employment history",
            ],
      recommendations:
        language === "ar"
          ? [
              "مراجعة يدوية فورية مطلوبة",
              "التحقق من جهة الاتصال مطلوب",
              "طلب مستندات إضافية",
              "وضع علامة لفريق الامتثال",
            ]
          : [
              "Immediate manual review required",
              "Contact verification needed",
              "Additional documentation requested",
              "Flag for compliance team",
            ],
      confidence: 0.92,
    }

    setAnalysisResult(mockResult)
    setAnalysisComplete(true)
    setIsAnalyzing(false)

    toast({
      title: language === "ar" ? "اكتمل التحليل" : "Analysis Complete",
      description:
        language === "ar"
          ? `تم تحليل القضية ${mockResult.caseId} بنجاح`
          : `Case ${mockResult.caseId} has been analyzed successfully`,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.category) {
      toast({
        title: language === "ar" ? "خطأ" : "Error",
        description: language === "ar" ? "يرجى ملء جميع الحقول المطلوبة" : "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    await simulateAnalysis()
  }

  const handleViewCase = () => {
    if (analysisResult) {
      router.push(`/cases/${analysisResult.caseId}`)
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

  if (analysisComplete && analysisResult) {
    return (
      <motion.div className="max-w-4xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-background/95">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-3xl">{language === "ar" ? "اكتمل التحليل" : "Analysis Complete"}</CardTitle>
              <CardDescription className="text-lg mt-2">
                {language === "ar"
                  ? `تم إكمال تحليل كشف الاحتيال للقضية ${analysisResult.caseId}`
                  : `Fraud detection analysis has been completed for case ${analysisResult.caseId}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Risk Assessment */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">{analysisResult.riskScore}%</div>
                      <div className="text-base text-muted-foreground">
                        {language === "ar" ? "درجة المخاطر" : "Risk Score"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-600 mb-2">
                        {(analysisResult.fraudProbability * 100).toFixed(0)}%
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
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {(analysisResult.confidence * 100).toFixed(0)}%
                      </div>
                      <div className="text-base text-muted-foreground">
                        {language === "ar" ? "الثقة" : "Confidence"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Findings */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 rtl:mr-0 rtl:ml-2 text-red-600" />
                  {language === "ar" ? "النتائج الرئيسية" : "Key Findings"}
                </h3>
                <div className="space-y-3">
                  {analysisResult.keyFindings.map((finding: string, index: number) => (
                    <Alert key={index} variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-base">{finding}</AlertDescription>
                    </Alert>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2 rtl:mr-0 rtl:ml-2 text-green-600" />
                  {language === "ar" ? "التوصيات" : "Recommendations"}
                </h3>
                <div className="space-y-3">
                  {analysisResult.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-base">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6">
                <Button onClick={handleViewCase} className="flex-1 text-lg h-12">
                  {language === "ar" ? "عرض تفاصيل القضية الكاملة" : "View Full Case Details"}
                </Button>
                <Button variant="outline" onClick={() => window.location.reload()} className="text-lg h-12">
                  {language === "ar" ? "رفع قضية أخرى" : "Upload Another Case"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div className="max-w-2xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
      {/* Header */}
      <motion.div className="mb-8" variants={itemVariants}>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">
          {language === "ar" ? "رفع قضية جديدة" : "Upload New Case"}
        </h1>
        <p className="text-muted-foreground text-lg">
          {language === "ar"
            ? "رفع مستندات وبيانات القضية للتحليل المتقدم"
            : "Upload case documents and data for advanced analysis"}
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-background/95">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse text-xl">
              <Upload className="h-6 w-6" />
              <span>{language === "ar" ? "رفع القضية" : "Upload Case"}</span>
            </CardTitle>
            <CardDescription className="text-base">
              {language === "ar"
                ? "رفع مستندات وبيانات القضية للتحليل المتقدم لكشف الاحتيال"
                : "Upload case documents and data for advanced fraud detection analysis"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isAnalyzing ? (
              <div className="space-y-8">
                <div className="text-center">
                  <Loader2 className="h-16 w-16 animate-spin mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-semibold mb-2">
                    {language === "ar" ? "جاري تحليل القضية" : "Analyzing Case"}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {language === "ar"
                      ? "نظامنا المتقدم يقوم بمعالجة البيانات والمستندات المرفوعة..."
                      : "Our advanced system is processing the uploaded data and documents..."}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span>{language === "ar" ? "تقدم التحليل" : "Analysis Progress"}</span>
                    <span>{analysisProgress}%</span>
                  </div>
                  <Progress value={analysisProgress} className="w-full h-3" />
                </div>

                <div className="text-base text-muted-foreground space-y-2">
                  <div className={analysisProgress >= 25 ? "text-green-600 font-medium" : ""}>
                    ✓ {language === "ar" ? "معالجة المستندات والتحقق" : "Document processing and validation"}
                  </div>
                  <div className={analysisProgress >= 50 ? "text-green-600 font-medium" : ""}>
                    ✓{" "}
                    {language === "ar" ? "التعرف على الأنماط وكشف الشذوذ" : "Pattern recognition and anomaly detection"}
                  </div>
                  <div className={analysisProgress >= 75 ? "text-green-600 font-medium" : ""}>
                    ✓ {language === "ar" ? "تقييم المخاطر والتسجيل" : "Risk assessment and scoring"}
                  </div>
                  <div className={analysisProgress >= 100 ? "text-green-600 font-medium" : ""}>
                    ✓ {language === "ar" ? "إنشاء التوصيات والتقرير" : "Generating recommendations and report"}
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="title" className="text-base font-medium">
                    {language === "ar" ? "عنوان القضية *" : "Case Title *"}
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder={language === "ar" ? "أدخل عنوان القضية" : "Enter case title"}
                    required
                    className="text-base h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="category" className="text-base font-medium">
                    {language === "ar" ? "فئة القضية *" : "Case Category *"}
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="text-base h-12">
                      <SelectValue placeholder={language === "ar" ? "اختر فئة القضية" : "Select case category"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employment-fraud">
                        {language === "ar" ? "احتيال التوظيف" : "Employment Fraud"}
                      </SelectItem>
                      <SelectItem value="financial-manipulation">
                        {language === "ar" ? "التلاعب المالي" : "Financial Manipulation"}
                      </SelectItem>
                      <SelectItem value="document-forgery">
                        {language === "ar" ? "تزوير المستندات" : "Document Forgery"}
                      </SelectItem>
                      <SelectItem value="identity-theft">
                        {language === "ar" ? "سرقة الهوية" : "Identity Theft"}
                      </SelectItem>
                      <SelectItem value="benefit-fraud">
                        {language === "ar" ? "احتيال الاستحقاقات" : "Benefit Fraud"}
                      </SelectItem>
                      <SelectItem value="other">{language === "ar" ? "أخرى" : "Other"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="priority" className="text-base font-medium">
                    {language === "ar" ? "مستوى الأولوية" : "Priority Level"}
                  </Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => setFormData({ ...formData, priority: value })}
                  >
                    <SelectTrigger className="text-base h-12">
                      <SelectValue placeholder={language === "ar" ? "اختر مستوى الأولوية" : "Select priority level"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">{language === "ar" ? "منخفضة" : "Low"}</SelectItem>
                      <SelectItem value="medium">{language === "ar" ? "متوسطة" : "Medium"}</SelectItem>
                      <SelectItem value="high">{language === "ar" ? "عالية" : "High"}</SelectItem>
                      <SelectItem value="urgent">{language === "ar" ? "عاجلة" : "Urgent"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="description" className="text-base font-medium">
                    {language === "ar" ? "وصف القضية" : "Case Description"}
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={
                      language === "ar" ? "قدم وصفاً مفصلاً للقضية" : "Provide detailed description of the case"
                    }
                    rows={4}
                    className="text-base"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="files" className="text-base font-medium">
                    {language === "ar" ? "رفع المستندات" : "Upload Documents"}
                  </Label>
                  <Input
                    id="files"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.csv"
                    className="text-base h-12"
                  />
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "الصيغ المدعومة: PDF, DOC, DOCX, JPG, PNG, XLSX, CSV (حد أقصى 10 ميجابايت لكل ملف)"
                      : "Supported formats: PDF, DOC, DOCX, JPG, PNG, XLSX, CSV (Max 10MB per file)"}
                  </p>
                </div>

                {formData.files.length > 0 && (
                  <div className="space-y-3">
                    <Label className="text-base font-medium">
                      {language === "ar" ? "الملفات المحددة" : "Selected Files"}
                    </Label>
                    <div className="space-y-2">
                      {formData.files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 rtl:space-x-reverse p-3 border rounded-lg"
                        >
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <span className="text-base">{file.name}</span>
                          <span className="text-sm text-muted-foreground">
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full text-lg h-14 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Upload className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                  {language === "ar" ? "تحليل القضية" : "Analyze Case"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}