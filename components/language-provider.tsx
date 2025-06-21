"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.howItWorks": "How It Works",
    "nav.watchVideo": "Watch Video",
    "nav.technologies": "Technologies",
    "nav.contact": "Contact Us",
    "nav.dashboard": "Dashboard",
    "nav.cases": "Cases",
    "nav.login": "Login",
    "nav.logout": "Logout",
    "nav.profile": "Profile",
    "nav.settings": "Settings",

    // Homepage
    "home.title": "Modaqqeq",
    "home.subtitle": "AI-Powered Fraud Detection System",
    "home.description":
      "Advanced artificial intelligence technology to detect financial fraud and employment manipulation for the Ministry of Human Resources and Social Development.",
    "home.getStarted": "Get Started",
    "home.learnMore": "Learn More",
    "home.watchDemo": "Watch Demo",
    "home.features.title": "Advanced Fraud Detection Features",
    "home.features.subtitle":
      "Comprehensive AI-powered tools designed specifically for government fraud detection and prevention",
    "home.stats.title": "Proven Results & Impact",
    "home.stats.subtitle":
      "Modaqqeq has demonstrated significant improvements in fraud detection efficiency and accuracy",

    // About
    "about.title": "About Modaqqeq System",
    "about.subtitle": "Leading the future of fraud detection with artificial intelligence",
    "about.description":
      "Modaqqeq is an advanced AI-powered fraud detection system developed specifically for the Ministry of Human Resources and Social Development to combat financial fraud and employment manipulation.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To protect public resources and ensure transparency in government services through cutting-edge AI technology.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be the leading fraud detection system in the region, supporting Saudi Arabia's Vision 2030.",
    "about.systemFeatures": "System Features",
    "about.systemFeaturesDesc": "An integrated system that combines the latest technologies and specialized expertise",
    "about.provenStats": "Proven Statistics",
    "about.provenStatsDesc": "Numbers that confirm the system's effectiveness in detecting and preventing fraud",

    // How It Works
    "howItWorks.title": "How Modaqqeq Works",
    "howItWorks.subtitle": "Advanced AI technology in simple steps",
    "howItWorks.step1.title": "Data Collection",
    "howItWorks.step1.description": "Collect and analyze documents and financial data from multiple sources",
    "howItWorks.step2.title": "AI Analysis",
    "howItWorks.step2.description": "Advanced machine learning algorithms detect patterns and anomalies",
    "howItWorks.step3.title": "Risk Assessment",
    "howItWorks.step3.description": "Generate comprehensive risk scores and fraud probability assessments",
    "howItWorks.step4.title": "Action & Reporting",
    "howItWorks.step4.description": "Provide actionable insights and detailed reports for decision makers",

    // Technologies
    "technologies.title": "Advanced Technologies",
    "technologies.subtitle": "Cutting-edge AI and machine learning technologies",
    "technologies.ai.title": "Artificial Intelligence",
    "technologies.ai.description": "Deep learning algorithms for pattern recognition and anomaly detection",
    "technologies.ml.title": "Machine Learning",
    "technologies.ml.description": "Supervised and unsupervised learning models for fraud detection",
    "technologies.nlp.title": "Natural Language Processing",
    "technologies.nlp.description": "Text analysis and document verification capabilities",
    "technologies.blockchain.title": "Blockchain Security",
    "technologies.blockchain.description": "Immutable audit trails and secure data verification",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our team",
    "contact.address": "Ministry of Human Resources and Social Development, Riyadh, Saudi Arabia",
    "contact.phone": "+966 11 123 4567",
    "contact.email": "info@mhrsd.gov.sa",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // Video
    "video.title": "Watch Modaqqeq in Action",
    "video.subtitle": "See how our AI system detects fraud in real-time",
    "video.duration": "Duration: 3:45",

    // Login
    "login.title": "Sign In to Modaqqeq",
    "login.subtitle": "Access the fraud detection dashboard",
    "login.email": "Email Address",
    "login.password": "Password",
    "login.rememberMe": "Remember me",
    "login.forgotPassword": "Forgot password?",
    "login.signIn": "Sign In",
    "login.showPassword": "Show password",
    "login.hidePassword": "Hide password",
    "login.demo.title": "Demo Credentials",
    "login.demo.email": "Email: admin@mhrsd.gov.sa",
    "login.demo.password": "Password: admin123",

    // Dashboard
    "dashboard.title": "Fraud Detection Dashboard",
    "dashboard.subtitle": "Monitor and analyze fraud detection activities in real-time",
    "dashboard.overview": "Overview",
    "dashboard.totalCases": "Total Cases",
    "dashboard.activeCases": "Active Cases",
    "dashboard.resolvedCases": "Resolved Cases",
    "dashboard.riskScore": "Average Risk Score",
    "dashboard.recentCases": "Recent Cases",
    "dashboard.uploadCase": "Upload New Case",
    "dashboard.viewAll": "View All Cases",
    "dashboard.quickActions": "Quick Actions",
    "dashboard.systemStatus": "System Status",
    "dashboard.recentCasesDesc": "Latest fraud detection cases and their analysis results",
    "dashboard.analysisEngine": "Analysis Engine",
    "dashboard.activeUsers": "Active Users",
    "dashboard.processingQueue": "Processing Queue",
    "dashboard.database": "Database",
    "dashboard.online": "Online",
    "dashboard.healthy": "Healthy",
    "dashboard.cases": "cases",
    "dashboard.performanceMetrics": "Performance Metrics",
    "dashboard.detectionAccuracy": "Detection Accuracy",
    "dashboard.processingSpeed": "Processing Speed",
    "dashboard.systemUsage": "System Usage",
    "dashboard.fromLastMonth": "from last month",
    "dashboard.viewAnalytics": "View Analytics",
    "dashboard.generateReport": "Generate Report",

    // Cases
    "cases.upload": "Upload Case",
    "cases.analyze": "Analyze with AI",
    "cases.riskLevel": "Risk Level",
    "cases.status": "Status",
    "cases.date": "Date",
    "cases.id": "Case ID",
    "cases.title": "Case Title",
    "cases.category": "Category",
    "cases.priority": "Priority",
    "cases.description": "Description",
    "cases.documents": "Documents",
    "cases.timeline": "Timeline",
    "cases.findings": "Key Findings",
    "cases.recommendations": "Recommendations",
    "cases.high": "High Risk",
    "cases.medium": "Medium Risk",
    "cases.low": "Low Risk",
    "cases.pending": "Pending",
    "cases.completed": "Completed",
    "cases.underReview": "Under Review",
    "cases.escalated": "Escalated",
    "cases.closed": "Closed",
    "cases.management": "Cases Management",
    "cases.managementDesc": "View and manage all fraud detection cases",
    "cases.searchFilter": "Search & Filter",
    "cases.searchPlaceholder": "Search cases...",
    "cases.allStatuses": "All Statuses",
    "cases.allRiskLevels": "All Risk Levels",
    "cases.highRisk": "High Risk",
    "cases.mediumRisk": "Medium Risk",
    "cases.lowRisk": "Low Risk",
    "cases.advancedFilter": "Advanced Filter",
    "cases.casesList": "Cases List",
    "cases.showing": "Showing",
    "cases.of": "of",
    "cases.assignedTo": "Assigned To",
    "cases.actions": "Actions",
    "cases.view": "View",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.warning": "Warning",
    "common.info": "Information",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.view": "View",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.export": "Export",
    "common.import": "Import",
    "common.download": "Download",
    "common.upload": "Upload",
    "common.refresh": "Refresh",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.close": "Close",
    "common.confirm": "Confirm",
    "common.yes": "Yes",
    "common.no": "No",

    // Errors
    "error.general": "An unexpected error occurred",
    "error.network": "Network connection error",
    "error.unauthorized": "Unauthorized access",
    "error.notFound": "Page not found",
    "error.validation": "Please check your input",
    "error.upload": "File upload failed",
    "error.analysis": "Analysis failed",

    // Success Messages
    "success.login": "Successfully logged in",
    "success.logout": "Successfully logged out",
    "success.upload": "File uploaded successfully",
    "success.analysis": "Analysis completed successfully",
    "success.save": "Data saved successfully",
    "success.message.sent": "Message sent successfully",

    // Stats Section
    "stats.detectionAccuracy": "Detection Accuracy",
    "stats.detectionAccuracyDesc": "Accuracy rate of fraud detection and suspicious activities",
    "stats.processingSpeed": "Processing Speed",
    "stats.processingSpeedDesc": "Reduction in case processing and analysis time",
    "stats.monitoring": "Monitoring",
    "stats.monitoringDesc": "Continuous monitoring around the clock throughout the week",
    "stats.analyzedCases": "Analyzed Cases",
    "stats.analyzedCasesDesc": "Total fraud cases successfully processed",

    // Features Section
    "features.advancedDetection": "Advanced Fraud Detection",
    "features.advancedDetectionDesc":
      "Sophisticated algorithms that analyze patterns and detect fraudulent activities with high accuracy and low error rates",
    "features.governmentSecurity": "Government Security",
    "features.governmentSecurityDesc":
      "Enterprise-level security measures ensuring data protection and regulatory compliance",
    "features.instantProcessing": "Instant Processing",
    "features.instantProcessingDesc":
      "Real-time analysis and quick alerts enabling rapid response to potential fraud cases",
    "features.bilingualSupport": "Bilingual Support",
    "features.bilingualSupportDesc":
      "Full support for Arabic and English languages for a seamless and integrated user experience",
    "features.multiUserAccess": "Multi-User Access",
    "features.multiUserAccessDesc": "Role-based access control system for different departments and user levels",
    "features.advancedAnalytics": "Advanced Analytics",
    "features.advancedAnalyticsDesc":
      "Comprehensive reports and in-depth analytics for informed decision-making based on data",
    "features.smartDataManagement": "Smart Data Management",
    "features.smartDataManagementDesc":
      "Advanced system for managing and organizing big data with advanced search and filtering capabilities",
    "features.encryptionProtection": "Encryption & Protection",
    "features.encryptionProtectionDesc": "Advanced encryption for sensitive data with multi-layered security protocols",

    // Hero Section
    "hero.ministryBadge": "Ministry of Human Resources and Social Development",
    "hero.advancedAnalysis": "Advanced AI Analysis",
    "hero.advancedAnalysisDesc": "Sophisticated algorithms that detect fraud patterns with exceptional accuracy",
    "hero.continuousMonitoring": "24/7 Continuous Monitoring",
    "hero.continuousMonitoringDesc":
      "Comprehensive monitoring system for financial transactions and suspicious activities",
    "hero.advancedSecurity": "Advanced Security & Protection",
    "hero.advancedSecurityDesc": "Highest government security standards and regulatory compliance",

    // Footer
    "footer.description":
      "An advanced system for detecting financial fraud and employment manipulation, enhancing financial transparency and organizational efficiency at the Ministry of Human Resources and Social Development",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Information",
    "footer.developedWith": "Developed with the highest quality and security standards for the government sector",
    "footer.availableLanguages": "Available in Arabic and English",
    "footer.allRightsReserved": "© 2024 Ministry of Human Resources and Social Development. All rights reserved.",
  },
  ar: {
    // Navigation - التنقل
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.howItWorks": "كيف يعمل",
    "nav.watchVideo": "شاهد الفيديو",
    "nav.technologies": "التقنيات",
    "nav.contact": "تواصل معنا",
    "nav.dashboard": "لوحة التحكم",
    "nav.cases": "القضايا",
    "nav.login": "تسجيل الدخول",
    "nav.logout": "تسجيل الخروج",
    "nav.profile": "الملف الشخصي",
    "nav.settings": "الإعدادات",

    // Homepage - الصفحة الرئيسية
    "home.title": "مدقق",
    "home.subtitle": "نظام كشف الاحتيال المدعوم بالذكاء الاصطناعي",
    "home.description":
      "تقنية الذكاء الاصطناعي المتقدمة لكشف الاحتيال المالي والتلاعب في التوظيف لوزارة الموارد البشرية والتنمية الاجتماعية",
    "home.getStarted": "ابدأ الآن",
    "home.learnMore": "اعرف المزيد",
    "home.watchDemo": "شاهد العرض التوضيحي",
    "home.features.title": "ميزات متقدمة لكشف الاحتيال",
    "home.features.subtitle": "أدوات شاملة مدعومة بالذكاء الاصطناعي مصممة خصيصاً لكشف ومنع الاحتيال الحكومي",
    "home.stats.title": "نتائج تجريبية جيدة وتأثير فعال",
    "home.stats.subtitle": "أثبت مدقق تحسينات كبيرة في كفاءة ودقة كشف الاحتيال",

    // About - حول النظام
    "about.title": "حول نظام مدقق",
    "about.subtitle": "ريادة مستقبل كشف الاحتيال بالذكاء الاصطناعي",
    "about.description":
      "مدقق هو نظام متقدم لكشف الاحتيال مدعوم بالذكاء الاصطناعي تم تطويره خصيصاً لوزارة الموارد البشرية والتنمية الاجتماعية لمكافحة الاحتيال المالي والتلاعب في التوظيف",
    "about.mission.title": "مهمتنا",
    "about.mission.description":
      "حماية الموارد العامة وضمان الشفافية في الخدمات الحكومية من خلال تقنية الذكاء الاصطناعي المتطورة",
    "about.vision.title": "رؤيتنا",
    "about.vision.description":
      "أن نكون النظام الرائد لكشف الاحتيال في المنطقة، ودعم رؤية المملكة العربية السعودية 2030",
    "about.systemFeatures": "مميزات النظام",
    "about.systemFeaturesDesc": "نظام متكامل يجمع بين أحدث التقنيات والخبرات المتخصصة",
    "about.provenStats": "إحصائيات مثبتة",
    "about.provenStatsDesc": "أرقام تؤكد فعالية النظام في كشف ومنع الاحتيال",

    // How It Works - كيف يعمل
    "howItWorks.title": "كيف يعمل مدقق",
    "howItWorks.subtitle": "تقنية الذكاء الاصطناعي المتقدمة في خطوات بسيطة",
    "howItWorks.step1.title": "جمع البيانات",
    "howItWorks.step1.description": "جمع وتحليل المستندات والبيانات المالية من مصادر متعددة",
    "howItWorks.step2.title": "التحليل بالذكاء الاصطناعي",
    "howItWorks.step2.description": "خوارزميات التعلم الآلي المتقدمة تكتشف الأنماط والشذوذ",
    "howItWorks.step3.title": "تقييم المخاطر",
    "howItWorks.step3.description": "إنشاء درجات مخاطر شاملة وتقييمات احتمالية الاحتيال",
    "howItWorks.step4.title": "الإجراءات والتقارير",
    "howItWorks.step4.description": "توفير رؤى قابلة للتنفيذ وتقارير مفصلة لصناع القرار",

    // Technologies - التقنيات
    "technologies.title": "التقنيات المتقدمة",
    "technologies.subtitle": "أحدث تقنيات الذكاء الاصطناعي والتعلم الآلي",
    "technologies.ai.title": "الذكاء الاصطناعي",
    "technologies.ai.description": "خوارزميات التعلم العميق للتعرف على الأنماط وكشف الشذوذ",
    "technologies.ml.title": "التعلم الآلي",
    "technologies.ml.description": "نماذج التعلم المُشرف وغير المُشرف لكشف الاحتيال",
    "technologies.nlp.title": "معالجة اللغة الطبيعية",
    "technologies.nlp.description": "قدرات تحليل النصوص والتحقق من المستندات",
    "technologies.blockchain.title": "أمان البلوك تشين",
    "technologies.blockchain.description": "مسارات تدقيق غير قابلة للتغيير والتحقق الآمن من البيانات",

    // Contact - التواصل
    "contact.title": "تواصل معنا",
    "contact.subtitle": "تواصل مع فريقنا",
    "contact.address": "وزارة الموارد البشرية والتنمية الاجتماعية، الرياض، المملكة العربية السعودية",
    "contact.phone": "4567 123 11 966+",
    "contact.email": "info@mhrsd.gov.sa",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "عنوان البريد الإلكتروني",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "الرسالة",
    "contact.form.send": "إرسال الرسالة",

    // Video - الفيديو
    "video.title": "شاهد مدقق في العمل",
    "video.subtitle": "اكتشف كيف يكشف نظامنا الذكي الاحتيال في الوقت الفعلي",
    "video.duration": "المدة: 3:45",

    // Login - تسجيل الدخول
    "login.title": "تسجيل الدخول إلى مدقق",
    "login.subtitle": "الوصول إلى لوحة تحكم كشف الاحتيال",
    "login.email": "عنوان البريد الإلكتروني",
    "login.password": "كلمة المرور",
    "login.rememberMe": "تذكرني",
    "login.forgotPassword": "نسيت كلمة المرور؟",
    "login.signIn": "تسجيل الدخول",
    "login.showPassword": "إظهار كلمة المرور",
    "login.hidePassword": "إخفاء كلمة المرور",
    "login.demo.title": "بيانات تجريبية",
    "login.demo.email": "البريد الإلكتروني: admin@mhrsd.gov.sa",
    "login.demo.password": "كلمة المرور: admin123",

    // Dashboard - لوحة التحكم
    "dashboard.title": "لوحة تحكم كشف الاحتيال",
    "dashboard.subtitle": "مراقبة وتحليل أنشطة كشف الاحتيال في الوقت الفعلي",
    "dashboard.overview": "نظرة عامة",
    "dashboard.totalCases": "إجمالي القضايا",
    "dashboard.activeCases": "القضايا النشطة",
    "dashboard.resolvedCases": "القضايا المحلولة",
    "dashboard.riskScore": "متوسط درجة المخاطر",
    "dashboard.recentCases": "القضايا الحديثة",
    "dashboard.uploadCase": "رفع قضية جديدة",
    "dashboard.viewAll": "عرض جميع القضايا",
    "dashboard.quickActions": "إجراءات سريعة",
    "dashboard.systemStatus": "حالة النظام",
    "dashboard.recentCasesDesc": "أحدث قضايا كشف الاحتيال ونتائج تحليلها",
    "dashboard.analysisEngine": "محرك التحليل",
    "dashboard.activeUsers": "المستخدمون النشطون",
    "dashboard.processingQueue": "طابور المعالجة",
    "dashboard.database": "قاعدة البيانات",
    "dashboard.online": "متصل",
    "dashboard.healthy": "صحية",
    "dashboard.cases": "قضايا",
    "dashboard.performanceMetrics": "مقاييس الأداء",
    "dashboard.detectionAccuracy": "دقة الكشف",
    "dashboard.processingSpeed": "سرعة المعالجة",
    "dashboard.systemUsage": "استخدام النظام",
    "dashboard.fromLastMonth": "من الشهر الماضي",
    "dashboard.viewAnalytics": "عرض التحليلات",
    "dashboard.generateReport": "إنشاء تقرير",

    // Cases - القضايا
    "cases.upload": "رفع قضية",
    "cases.analyze": "تحليل بالذكاء الاصطناعي",
    "cases.riskLevel": "مستوى المخاطر",
    "cases.status": "الحالة",
    "cases.date": "التاريخ",
    "cases.id": "رقم القضية",
    "cases.title": "عنوان القضية",
    "cases.category": "الفئة",
    "cases.priority": "الأولوية",
    "cases.description": "الوصف",
    "cases.documents": "المستندات",
    "cases.timeline": "الجدول الزمني",
    "cases.findings": "النتائج الرئيسية",
    "cases.recommendations": "التوصيات",
    "cases.high": "مخاطر عالية",
    "cases.medium": "مخاطر متوسطة",
    "cases.low": "مخاطر منخفضة",
    "cases.pending": "قيد الانتظار",
    "cases.completed": "مكتملة",
    "cases.underReview": "قيد المراجعة",
    "cases.escalated": "مُصعدة",
    "cases.closed": "مغلقة",
    "cases.management": "إدارة القضايا",
    "cases.managementDesc": "عرض وإدارة جميع قضايا كشف الاحتيال",
    "cases.searchFilter": "البحث والتصفية",
    "cases.searchPlaceholder": "البحث في القضايا...",
    "cases.allStatuses": "جميع الحالات",
    "cases.allRiskLevels": "جميع مستويات المخاطر",
    "cases.highRisk": "مخاطر عالية",
    "cases.mediumRisk": "مخاطر متوسطة",
    "cases.lowRisk": "مخاطر منخفضة",
    "cases.advancedFilter": "تصفية متقدمة",
    "cases.casesList": "قائمة القضايا",
    "cases.showing": "عرض",
    "cases.of": "من أصل",
    "cases.assignedTo": "المسؤول",
    "cases.actions": "الإجراءات",
    "cases.view": "عرض",

    // Common - عام
    "common.loading": "جاري التحميل...",
    "common.error": "خطأ",
    "common.success": "نجح",
    "common.warning": "تحذير",
    "common.info": "معلومات",
    "common.cancel": "إلغاء",
    "common.save": "حفظ",
    "common.delete": "حذف",
    "common.edit": "تعديل",
    "common.view": "عرض",
    "common.search": "بحث",
    "common.filter": "تصفية",
    "common.export": "تصدير",
    "common.import": "استيراد",
    "common.download": "تحميل",
    "common.upload": "رفع",
    "common.refresh": "تحديث",
    "common.back": "رجوع",
    "common.next": "التالي",
    "common.previous": "السابق",
    "common.close": "إغلاق",
    "common.confirm": "تأكيد",
    "common.yes": "نعم",
    "common.no": "لا",

    // Errors - الأخطاء
    "error.general": "حدث خطأ غير متوقع",
    "error.network": "خطأ في الاتصال بالشبكة",
    "error.unauthorized": "وصول غير مصرح به",
    "error.notFound": "الصفحة غير موجودة",
    "error.validation": "يرجى التحقق من المدخلات",
    "error.upload": "فشل في رفع الملف",
    "error.analysis": "فشل في التحليل",

    // Success Messages - رسائل النجاح
    "success.login": "تم تسجيل الدخول بنجاح",
    "success.logout": "تم تسجيل الخروج بنجاح",
    "success.upload": "تم رفع الملف بنجاح",
    "success.analysis": "تم التحليل بنجاح",
    "success.save": "تم حفظ البيانات بنجاح",
    "success.message.sent": "تم إرسال الرسالة بنجاح",

    // Stats Section - قسم الإحصائيات
    "stats.detectionAccuracy": "دقة الكشف",
    "stats.detectionAccuracyDesc": "معدل دقة كشف الاحتيال والأنشطة المشبوهة",
    "stats.processingSpeed": "تسريع المعالجة",
    "stats.processingSpeedDesc": "تقليل وقت معالجة القضايا والتحليل",
    "stats.monitoring": "المراقبة",
    "stats.monitoringDesc": "مراقبة مستمرة على مدار الساعة طوال أيام الأسبوع",
    "stats.analyzedCases": "قضية محللة",
    "stats.analyzedCasesDesc": "إجمالي قضايا الاحتيال المعالجة بنجاح",

    // Features Section - قسم الميزات
    "features.advancedDetection": "كشف الاحتيال المتقدم",
    "features.advancedDetectionDesc":
      "خوارزميات متطورة تحلل الأنماط وتكتشف الأنشطة الاحتيالية بدقة عالية ومعدلات خطأ منخفضة",
    "features.governmentSecurity": "الأمان الحكومي",
    "features.governmentSecurityDesc":
      "إجراءات أمنية على مستوى المؤسسات تضمن حماية البيانات والامتثال للوائح التنظيمية",
    "features.instantProcessing": "المعالجة الفورية",
    "features.instantProcessingDesc": "تحليل فوري وتنبيهات سريعة تمكن من الاستجابة السريعة لحالات الاحتيال المحتملة",
    "features.bilingualSupport": "الدعم ثنائي اللغة",
    "features.bilingualSupportDesc": "دعم كامل للغتين العربية والإنجليزية لتجربة مستخدم سلسة ومتكاملة",
    "features.multiUserAccess": "الوصول متعدد المستخدمين",
    "features.multiUserAccessDesc": "نظام تحكم في الوصول قائم على الأدوار لمختلف الإدارات ومستويات المستخدمين",
    "features.advancedAnalytics": "التحليلات المتقدمة",
    "features.advancedAnalyticsDesc": "تقارير شاملة وتحليلات متعمقة لاتخاذ قرارات مدروسة ومبنية على البيانات",
    "features.smartDataManagement": "إدارة البيانات الذكية",
    "features.smartDataManagementDesc": "نظام متطور لإدارة وتنظيم البيانات الضخمة مع إمكانيات بحث وفلترة متقدمة",
    "features.encryptionProtection": "التشفير والحماية",
    "features.encryptionProtectionDesc": "تشفير متقدم للبيانات الحساسة مع بروتوكولات أمان متعددة الطبقات",

    // Hero Section - القسم الرئيسي
    "hero.ministryBadge": "وزارة الموارد البشرية والتنمية الاجتماعية",
    "hero.advancedAnalysis": "تحليل متقدم بالذكاء الاصطناعي",
    "hero.advancedAnalysisDesc": "خوارزميات متطورة تكتشف أنماط الاحتيال بدقة استثنائية",
    "hero.continuousMonitoring": "مراقبة مستمرة 24/7",
    "hero.continuousMonitoringDesc": "نظام مراقبة شامل للمعاملات المالية والأنشطة المشبوهة",
    "hero.advancedSecurity": "حماية وأمان متقدم",
    "hero.advancedSecurityDesc": "أعلى معايير الأمان الحكومي والامتثال للوائح التنظيمية",

    // Footer - التذييل
    "footer.description":
      "نظام متطور لكشف الاحتيال المالي والتلاعب في التوظيف، يعزز الشفافية المالية والكفاءة التنظيمية في وزارة الموارد البشرية والتنمية الاجتماعية",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactInfo": "معلومات التواصل",
    "footer.developedWith": "تم تطويره بأعلى معايير الجودة والأمان للقطاع الحكومي",
    "footer.availableLanguages": "متوفر باللغتين العربية والإنجليزية",
    "footer.allRightsReserved": "© 2024 وزارة الموارد البشرية والتنمية الاجتماعية. جميع الحقوق محفوظة.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar") // Default to Arabic

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
    document.documentElement.className = language === "ar" ? "rtl" : "ltr"

    // Update body class for font switching
    document.body.className = language === "ar" ? "font-arabic" : "font-sans"
  }, [language])

  const t = useCallback(
    (key: string): string => {
      return translations[language][key as keyof (typeof translations)[typeof language]] || key
    },
    [language],
  )

  const isRTL = language === "ar"

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      isRTL,
    }),
    [language, t, isRTL],
  )

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
