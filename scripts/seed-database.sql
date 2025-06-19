-- Create initial admin user
INSERT INTO users (id, email, name, role, department, created_at, updated_at) VALUES
('admin-001', 'admin@mhrsd.gov.sa', 'System Administrator', 'ADMIN', 'IT Department', NOW(), NOW()),
('supervisor-001', 'supervisor@mhrsd.gov.sa', 'Ahmad Al-Rashid', 'SUPERVISOR', 'Compliance & Audit Division', NOW(), NOW()),
('analyst-001', 'analyst1@mhrsd.gov.sa', 'Fatima Al-Zahra', 'ANALYST', 'Fraud Investigation Unit', NOW(), NOW()),
('analyst-002', 'analyst2@mhrsd.gov.sa', 'Mohammed Al-Otaibi', 'ANALYST', 'Fraud Investigation Unit', NOW(), NOW());

-- Create sample cases
INSERT INTO cases (id, title, description, category, status, priority, risk_score, fraud_probability, confidence, assigned_to_id, created_at, updated_at) VALUES
('CASE-2024-001', 'Suspected Employment Fraud Investigation', 'Investigation into potential fraudulent employment claims and document manipulation', 'EMPLOYMENT_FRAUD', 'UNDER_REVIEW', 'HIGH', 87, 0.89, 0.94, 'supervisor-001', '2024-01-15 10:30:00', '2024-01-15 14:45:00'),
('CASE-2024-002', 'Financial Manipulation Case', 'Suspicious financial transactions and benefit claims requiring investigation', 'FINANCIAL_MANIPULATION', 'COMPLETED', 'MEDIUM', 62, 0.65, 0.88, 'analyst-001', '2024-01-14 09:15:00', '2024-01-14 16:30:00'),
('CASE-2024-003', 'Document Forgery Investigation', 'Multiple forged documents submitted for benefit applications', 'DOCUMENT_FORGERY', 'PENDING', 'HIGH', 91, 0.93, 0.96, 'analyst-002', '2024-01-13 11:20:00', '2024-01-13 11:20:00'),
('CASE-2024-004', 'Identity Theft Case', 'Suspected identity theft for fraudulent benefit claims', 'IDENTITY_THEFT', 'COMPLETED', 'LOW', 34, 0.38, 0.82, 'analyst-001', '2024-01-12 14:45:00', '2024-01-12 18:20:00');

-- Create sample AI analysis results
INSERT INTO ai_analysis_results (id, case_id, risk_score, fraud_probability, confidence, key_findings, recommendations, processed_at) VALUES
('analysis-001', 'CASE-2024-001', 87, 0.89, 0.94, 
 '["Multiple employment records with overlapping dates detected", "Inconsistent salary information across different documents", "Suspicious patterns in document submission timestamps", "Identity verification failed for secondary documentation"]',
 '["Immediate suspension of benefits pending investigation", "Contact all listed employers for verification", "Request additional identity documentation", "Schedule in-person interview with claimant"]',
 '2024-01-15 10:42:00'),
('analysis-002', 'CASE-2024-002', 62, 0.65, 0.88,
 '["Unusual transaction patterns in bank statements", "Inconsistent income reporting", "Missing documentation for claimed expenses"]',
 '["Request additional financial documentation", "Verify income sources with employers", "Schedule financial audit review"]',
 '2024-01-14 09:25:00');
