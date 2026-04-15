'use client';

import Link from 'next/link';

const AVAILABLE_QUIZZES = [
  {
    "code": "-free-answer--nr-507-week-6-td-and-quiz",
    "name": "Free Answer) NR 507 Week 6 TD and Quiz",
    "description": "Interactive practice exam for Free Answer) NR 507 Week 6 TD and Quiz",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer) TD and"
    ]
  },
  {
    "code": "nr-341-quiz-1-exam",
    "name": "NR 341 Quiz 1 EXAM",
    "description": "Interactive practice exam for NR 341 Quiz 1 EXAM",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-566-week-7-presentation",
    "name": "NR 566 Week 7 Presentation",
    "description": "Interactive practice exam for NR 566 Week 7 Presentation",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Presentation"
    ]
  },
  {
    "code": "nr-nr-305-fnp-application-essay",
    "name": "NR NR 305 FNP application essay",
    "description": "Interactive practice exam for NR NR 305 FNP application essay",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR FNP application essay"
    ]
  },
  {
    "code": "nr-nr-534-week-7-business-plan-final",
    "name": "NR NR 534 Week 7 Business Plan Final",
    "description": "Interactive practice exam for NR NR 534 Week 7 Business Plan Final",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Business Plan"
    ]
  },
  {
    "code": "nr-nr-603-course-pulmonary-case-presentation-for-week-2",
    "name": "NR NR 603 Course Pulmonary Case Presentation for Week 2",
    "description": "Interactive practice exam for NR NR 603 Course Pulmonary Case Presentation for Week 2",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Course Pulmonary Case Presentation for"
    ]
  },
  {
    "code": "nr-nr507-week-2-quiz-2-study-guide",
    "name": "NR NR507 Week 2 Quiz 2 Study Guide",
    "description": "Interactive practice exam for NR NR507 Week 2 Quiz 2 Study Guide",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Study Guide"
    ]
  },
  {
    "code": "2019-hesi-exit-v2-",
    "name": "2019 HESI EXIT V2",
    "description": "Interactive practice exam for 2019 HESI EXIT V2",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "V2"
    ]
  },
  {
    "code": "2019-hesi-exit-v2",
    "name": "2019 HESI EXIT V2",
    "description": "Interactive practice exam for 2019 HESI EXIT V2",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "V2"
    ]
  },
  {
    "code": "2019-hesi-rn-exit-v1-v2v3v4v-5-and-v8-complete-exams-2023-versions",
    "name": "2019 HESI RN EXIT V1 ,V2,V3,V4,V 5 AND V8 Complete Exams 2023 Versions",
    "description": "Interactive practice exam for 2019 HESI RN EXIT V1 ,V2,V3,V4,V 5 AND V8 Complete Exams 2023 Versions",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "RN V1 ,V2,V3,V4,V AND V8 Complete Exams Versions"
    ]
  },
  {
    "code": "2024-25-hesi-exit-v3-",
    "name": "2024-25 HESI EXIT V3",
    "description": "Interactive practice exam for 2024-25 HESI EXIT V3",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "V3"
    ]
  },
  {
    "code": "2024-25-hesi-exit-v3",
    "name": "2024-25 HESI EXIT V3",
    "description": "Interactive practice exam for 2024-25 HESI EXIT V3",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "V3"
    ]
  },
  {
    "code": "503-nursing-midterm-study-guide",
    "name": "503 Nursing Midterm Study Guide",
    "description": "Interactive practice exam for 503 Nursing Midterm Study Guide",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nursing Study Guide"
    ]
  },
  {
    "code": "507-week-5-assignment-alterations-in-neurobiological-function",
    "name": "507 Week 5 Assignment Alterations in Neurobiological Function",
    "description": "Interactive practice exam for 507 Week 5 Assignment Alterations in Neurobiological Function",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Assignment Alterations in Neurobiological Function"
    ]
  },
  {
    "code": "510-organizational-behavior-and-business-influences-and-advanced-practice-nursin",
    "name": "510 Organizational Behavior and Business Influences and Advanced Practice Nursing",
    "description": "Interactive practice exam for 510 Organizational Behavior and Business Influences and Advanced Practice Nursing",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Organizational Behavior and Business Influences and Advanced Nursing"
    ]
  },
  {
    "code": "510-organizational-behavior-and-business-influences-and-advanced-practice-nursing",
    "name": "510 Organizational Behavior and Business Influences and Advanced Practice Nursing",
    "description": "Interactive practice exam for 510 Organizational Behavior and Business Influences and Advanced Practice Nursing",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Organizational Behavior and Business Influences and Advanced Nursing"
    ]
  },
  {
    "code": "510-week-1-introduction-presentation-and-practicum-process-assignment",
    "name": "510 Week 1 Introduction Presentation and Practicum Process Assignment",
    "description": "Interactive practice exam for 510 Week 1 Introduction Presentation and Practicum Process Assignment",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Introduction Presentation and Practicum Process Assignment"
    ]
  },
  {
    "code": "532-week-3-collaboration-caf-C3-A9-organizational-project-planning-nr",
    "name": "Free Answer) 532 Week 3 Collaboration Café: Organizational Project Planning NR",
    "description": "Interactive practice exam for Free Answer) 532 Week 3 Collaboration Café: Organizational Project Planning NR",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer) Collaboration Café: Organizational Project Planning NR"
    ]
  },
  {
    "code": "599-week-1-2-week-2-2-nursing-informatics-theory",
    "name": "599 Week 1 2 Week 2 2 Nursing Informatics theory",
    "description": "Interactive practice exam for 599 Week 1 2 Week 2 2 Nursing Informatics theory",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nursing Informatics theory"
    ]
  },
  {
    "code": "addressing-the-toxic-work-environment-and-patient-safety-concerns-nr-506",
    "name": "Addressing the Toxic Work Environment and Patient Safety Concerns NR 506",
    "description": "Interactive practice exam for Addressing the Toxic Work Environment and Patient Safety Concerns NR 506",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Addressing the Toxic Work Environment and Patient Safety Concerns"
    ]
  },
  {
    "code": "advanaced-patho-unit-4-quiz-mn551-",
    "name": "Advanaced Patho Unit 4 Quiz MN551",
    "description": "Interactive practice exam for Advanaced Patho Unit 4 Quiz MN551",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Advanaced Patho Unit MN551"
    ]
  },
  {
    "code": "advanaced-patho-unit-4-quiz-mn551",
    "name": "Advanaced Patho Unit 4 Quiz MN551",
    "description": "Interactive practice exam for Advanaced Patho Unit 4 Quiz MN551",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Advanaced Patho Unit MN551"
    ]
  },
  {
    "code": "advanced-communication-in-systems-leadership-nr534",
    "name": "Advanced Communication in Systems Leadership NR534",
    "description": "Interactive practice exam for Advanced Communication in Systems Leadership NR534",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Advanced Communication in Systems Leadership"
    ]
  },
  {
    "code": "ah2-quiz-answers-cardiovascular-quiz-answers",
    "name": "AH2 Quiz Answers Cardiovascular quiz answers",
    "description": "Interactive practice exam for AH2 Quiz Answers Cardiovascular quiz answers",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "AH2 Answers Cardiovascular answers"
    ]
  },
  {
    "code": "answered-midterm-study-guide-nr-599-informatics",
    "name": "Answered Midterm Study Guide NR 599 Informatics",
    "description": "Interactive practice exam for Answered Midterm Study Guide NR 599 Informatics",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered Study Guide Informatics"
    ]
  },
  {
    "code": "answered-nr-507-week-4-midterm-exam",
    "name": "Answered NR 507 Week 4 Midterm Exam",
    "description": "Interactive practice exam for Answered NR 507 Week 4 Midterm Exam",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered"
    ]
  },
  {
    "code": "answered-nr-534-collaboration-cafe",
    "name": "Answered NR 534 Collaboration Cafe",
    "description": "Interactive practice exam for Answered NR 534 Collaboration Cafe",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered Collaboration Cafe"
    ]
  },
  {
    "code": "answered-nr542-capstone-simulation-questions",
    "name": "Answered NR542 Capstone Simulation Questions",
    "description": "Interactive practice exam for Answered NR542 Capstone Simulation Questions",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered Capstone Simulation Questions"
    ]
  },
  {
    "code": "answered-nr599-final-exam-study-guide",
    "name": "Answered NR599 final exam study guide",
    "description": "Interactive practice exam for Answered NR599 final exam study guide",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Answered study guide"
    ]
  },
  {
    "code": "ati-rn-comprehensive-exit-exam-flashcards-2",
    "name": "ATI RN COMPREHENSIVE EXIT EXAM Flashcards 2",
    "description": "Interactive practice exam for ATI RN COMPREHENSIVE EXIT EXAM Flashcards 2",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "RN Flashcards"
    ]
  },
  {
    "code": "ati-rn-comprehensive-exit-exam-flashcards",
    "name": "ATI RN COMPREHENSIVE EXIT EXAM Flashcards",
    "description": "Interactive practice exam for ATI RN COMPREHENSIVE EXIT EXAM Flashcards",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "RN Flashcards"
    ]
  },
  {
    "code": "ati-teas-assistance-from-nursingschooltutors-com",
    "name": "ATI TEAS Assistance from NursingSchoolTutors.com",
    "description": "Interactive practice exam for ATI TEAS Assistance from NursingSchoolTutors.com",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "TEAS Assistance from NursingSchoolTutors.com"
    ]
  },
  {
    "code": "ati-teas-assistance-from-nursingschooltutorscom",
    "name": "ATI TEAS Assistance from NursingSchoolTutors.com",
    "description": "Interactive practice exam for ATI TEAS Assistance from NursingSchoolTutors.com",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "TEAS Assistance from NursingSchoolTutors.com"
    ]
  },
  {
    "code": "ati-teas-exam-help-from-nursingschooltutors-com",
    "name": "ATI TEAS Exam Help from NursingSchoolTutors.com",
    "description": "Interactive practice exam for ATI TEAS Exam Help from NursingSchoolTutors.com",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "TEAS Help from NursingSchoolTutors.com"
    ]
  },
  {
    "code": "ati-teas-exam-help-from-nursingschooltutorscom",
    "name": "ATI TEAS Exam Help from NursingSchoolTutors.com",
    "description": "Interactive practice exam for ATI TEAS Exam Help from NursingSchoolTutors.com",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "TEAS Help from NursingSchoolTutors.com"
    ]
  },
  {
    "code": "capstone-simulation-paper-nr452",
    "name": "CAPSTONE SIMULATION PAPER NR452",
    "description": "Interactive practice exam for CAPSTONE SIMULATION PAPER NR452",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "CAPSTONE SIMULATION PAPER"
    ]
  },
  {
    "code": "chamberlain-final-nr452-ccnpr-guidelines",
    "name": "Chamberlain FINAL NR452 CCNPR Guidelines",
    "description": "Interactive practice exam for Chamberlain FINAL NR452 CCNPR Guidelines",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chamberlain CCNPR Guidelines"
    ]
  },
  {
    "code": "chamberlain-virtual-ati-student-checklist-nr452",
    "name": "Chamberlain Virtual ATI Student Checklist NR452",
    "description": "Interactive practice exam for Chamberlain Virtual ATI Student Checklist NR452",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chamberlain Virtual Student Checklist"
    ]
  },
  {
    "code": "chapter-01-prescriptive-authority-and-role-implementation-tradition-vs-change",
    "name": "Chapter 01: Prescriptive Authority and Role Implementation: Tradition vs. Change",
    "description": "Interactive practice exam for Chapter 01: Prescriptive Authority and Role Implementation: Tradition vs. Change",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chapter : Prescriptive Authority and Role Implementation: Tradition vs. Change"
    ]
  },
  {
    "code": "chapter-01-prescriptive-authority-and-role-implementation-tradition-vs--change",
    "name": "Chapter 01: Prescriptive Authority and Role Implementation: Tradition vs. Change",
    "description": "Interactive practice exam for Chapter 01: Prescriptive Authority and Role Implementation: Tradition vs. Change",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chapter : Prescriptive Authority and Role Implementation: Tradition vs. Change"
    ]
  },
  {
    "code": "clinical-learning-direct-patient-care-documentation-",
    "name": "Clinical Learning – Direct Patient Care Documentation",
    "description": "Interactive practice exam for Clinical Learning – Direct Patient Care Documentation",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Clinical Learning – Direct Patient Care Documentation"
    ]
  },
  {
    "code": "clinical-learning-direct-patient-care-documentation",
    "name": "Clinical Learning – Direct Patient Care Documentation",
    "description": "Interactive practice exam for Clinical Learning – Direct Patient Care Documentation",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Clinical Learning – Direct Patient Care Documentation"
    ]
  },
  {
    "code": "community-health-nr-442-test-matrix-for-exam-2",
    "name": "Community Health NR 442 Test Matrix for Exam 2",
    "description": "Interactive practice exam for Community Health NR 442 Test Matrix for Exam 2",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Community Health Matrix for"
    ]
  },
  {
    "code": "comprehensive-retake-2020-nr-504",
    "name": "Comprehensive Retake 2020 NR 504",
    "description": "Interactive practice exam for Comprehensive Retake 2020 NR 504",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Retake"
    ]
  },
  {
    "code": "concept-map-draft-population-health-and-epidemiology-chamberlain-college",
    "name": "Concept Map Draft Population Health and Epidemiology Chamberlain College",
    "description": "Interactive practice exam for Concept Map Draft Population Health and Epidemiology Chamberlain College",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Concept Map Draft Population Health and Epidemiology Chamberlain College"
    ]
  },
  {
    "code": "critical-appraisal-of-the-lexicomp-medical-application-nr599",
    "name": "Critical Appraisal of the Lexicomp Medical Application NR599",
    "description": "Interactive practice exam for Critical Appraisal of the Lexicomp Medical Application NR599",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Critical Appraisal of the Lexicomp Medical Application"
    ]
  },
  {
    "code": "critique-of-systematic-research-review-",
    "name": "Critique of Systematic Research Review",
    "description": "Interactive practice exam for Critique of Systematic Research Review",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Critique of Systematic Research Review"
    ]
  },
  {
    "code": "critique-of-systematic-research-review",
    "name": "Critique of Systematic Research Review",
    "description": "Interactive practice exam for Critique of Systematic Research Review",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Critique of Systematic Research Review"
    ]
  },
  {
    "code": "decreasing-surgical-site-infections-to-improve-patient-outcomes",
    "name": "Decreasing Surgical Site Infections to Improve Patient Outcomes",
    "description": "Interactive practice exam for Decreasing Surgical Site Infections to Improve Patient Outcomes",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Decreasing Surgical Site Infections to Improve Patient Outcomes"
    ]
  },
  {
    "code": "depression-management-in-primary-care-presentation-nr-566",
    "name": "Depression Management in Primary Care Presentation NR 566",
    "description": "Interactive practice exam for Depression Management in Primary Care Presentation NR 566",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Depression Management in Primary Care Presentation"
    ]
  },
  {
    "code": "direct-care-project-part-1-assessment-and-diagnosis",
    "name": "DIRECT CARE PROJECT PART 1 ASSESSMENT AND DIAGNOSIS",
    "description": "Interactive practice exam for DIRECT CARE PROJECT PART 1 ASSESSMENT AND DIAGNOSIS",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "DIRECT CARE PROJECT PART AND DIAGNOSIS"
    ]
  },
  {
    "code": "dr-thompson-nr-566-final-exam-review-week-5",
    "name": "Dr Thompson NR 566 Final Exam Review Week 5",
    "description": "Interactive practice exam for Dr Thompson NR 566 Final Exam Review Week 5",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Dr Thompson Review"
    ]
  },
  {
    "code": "education-and-empathy-5-of-5-",
    "name": "Education and Empathy 5 of 5",
    "description": "Interactive practice exam for Education and Empathy 5 of 5",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Education and Empathy of"
    ]
  },
  {
    "code": "education-and-empathy-5-of-5",
    "name": "Education and  Empathy 5 of 5",
    "description": "Interactive practice exam for Education and  Empathy 5 of 5",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Education and Empathy of"
    ]
  },
  {
    "code": "ensuring-client-confidentiality-during-documentation-nr452",
    "name": "Ensuring Client Confidentiality During Documentation NR452",
    "description": "Interactive practice exam for Ensuring Client Confidentiality During Documentation NR452",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Ensuring Client Confidentiality During Documentation"
    ]
  },
  {
    "code": "entr-510-week-5-midterm-paper",
    "name": "Free Answer) ENTR 510 Week 5 Midterm Paper",
    "description": "Interactive practice exam for Free Answer) ENTR 510 Week 5 Midterm Paper",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer) ENTR Paper"
    ]
  },
  {
    "code": "exam-1-focus-points-nr228-",
    "name": "Exam 1 Focus Points NR228",
    "description": "Interactive practice exam for Exam 1 Focus Points NR228",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Focus Points"
    ]
  },
  {
    "code": "exam-1-focus-points-nr228",
    "name": "Exam 1 Focus Points NR228",
    "description": "Interactive practice exam for Exam 1 Focus Points NR228",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Focus Points"
    ]
  },
  {
    "code": "exam-review-document-exam-3-nr-228-",
    "name": "Exam Review Document Exam 3 NR 228",
    "description": "Interactive practice exam for Exam Review Document Exam 3 NR 228",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Review Document"
    ]
  },
  {
    "code": "exam-review-document-exam-3-nr-228",
    "name": "Exam Review Document Exam 3 NR 228",
    "description": "Interactive practice exam for Exam Review Document Exam 3 NR 228",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Review Document"
    ]
  },
  {
    "code": "final-exam-nurs-6521n-55-advanced-pharmacology",
    "name": "FINAL EXAM NURS-6521N-55 Advanced Pharmacology",
    "description": "Interactive practice exam for FINAL EXAM NURS-6521N-55 Advanced Pharmacology",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NURS 6521N Advanced Pharmacology"
    ]
  },
  {
    "code": "final-exam-recap-nr-224",
    "name": "Final Exam Recap NR 224",
    "description": "Interactive practice exam for Final Exam Recap NR 224",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Recap"
    ]
  },
  {
    "code": "final-exam-study-guide-chapters-111-nr228",
    "name": "FINAL EXAM STUDY GUIDE Chapters 111 NR228",
    "description": "Interactive practice exam for FINAL EXAM STUDY GUIDE Chapters 111 NR228",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "STUDY GUIDE Chapters"
    ]
  },
  {
    "code": "final-exam-study-guide-nr601-",
    "name": "Final Exam Study Guide NR601",
    "description": "Interactive practice exam for Final Exam Study Guide NR601",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "final-exam-study-guide-nr601",
    "name": "Final Exam Study Guide NR601",
    "description": "Interactive practice exam for Final Exam Study Guide NR601",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "final-nr-228-presentation",
    "name": "Final NR 228 Presentation",
    "description": "Interactive practice exam for Final NR 228 Presentation",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Presentation"
    ]
  },
  {
    "code": "final-self-assessment-of-professional-competencies-week-1-week-8-nr-630-",
    "name": "Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "description": "Interactive practice exam for Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Self of Professional Competencies"
    ]
  },
  {
    "code": "final-self-assessment-of-professional-competencies-week-1-week-8-nr-630",
    "name": "Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "description": "Interactive practice exam for Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Self of Professional Competencies"
    ]
  },
  {
    "code": "final-study-guide-nr599",
    "name": "Final study guide NR599",
    "description": "Interactive practice exam for Final study guide NR599",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "study guide"
    ]
  },
  {
    "code": "free-answer-532-week-3-collaboration-caf-organizational-project-planning-nr",
    "name": "(Free Answer) 532 Week 3 Collaboration Café: Organizational Project Planning NR",
    "description": "Interactive practice exam for (Free Answer) 532 Week 3 Collaboration Café: Organizational Project Planning NR",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) Collaboration Café: Organizational Project Planning NR"
    ]
  },
  {
    "code": "free-answer-answered-nr-507-week-4-midterm-exam",
    "name": "(Free answer) Answered NR 507 Week 4 Midterm Exam",
    "description": "Interactive practice exam for (Free answer) Answered NR 507 Week 4 Midterm Exam",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free answer) Answered"
    ]
  },
  {
    "code": "free-answer-entr-510-week-5-midterm-paper",
    "name": "(Free Answer) ENTR 510 Week 5 Midterm Paper",
    "description": "Interactive practice exam for (Free Answer) ENTR 510 Week 5 Midterm Paper",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) ENTR Paper"
    ]
  },
  {
    "code": "free-answer-entr-510-week-8-final-assignment",
    "name": "(Free Answer) ENTR 510 Week 8 Final Assignment",
    "description": "Interactive practice exam for (Free Answer) ENTR 510 Week 8 Final Assignment",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) ENTR Assignment"
    ]
  },
  {
    "code": "free-answer-healthcare-topic-debate-powerpoint-presentation-nr552",
    "name": "(Free Answer) Healthcare Topic Debate PowerPoint Presentation NR552",
    "description": "Interactive practice exam for (Free Answer) Healthcare Topic Debate PowerPoint Presentation NR552",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) Healthcare Topic Debate PowerPoint Presentation"
    ]
  },
  {
    "code": "free-answer-math-225n-week-7-assignment-conducting-a-hypothesis-test",
    "name": "(Free Answer) MATH 225N Week 7 Assignment Conducting a Hypothesis Test",
    "description": "Interactive practice exam for (Free Answer) MATH 225N Week 7 Assignment Conducting a Hypothesis Test",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) MATH 225N Assignment Conducting a Hypothesis"
    ]
  },
  {
    "code": "free-answer-nr-507-week-6-td-and-quiz",
    "name": "(Free Answer) NR 507 Week 6 TD and Quiz",
    "description": "Interactive practice exam for (Free Answer) NR 507 Week 6 TD and Quiz",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) TD and"
    ]
  },
  {
    "code": "free-answer-nr-510-week-4-organizational-change-and-ethical-legal-influences",
    "name": "(Free Answer) NR 510 Week 4 Organizational Change and Ethical Legal Influences",
    "description": "Interactive practice exam for (Free Answer) NR 510 Week 4 Organizational Change and Ethical Legal Influences",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) Organizational Change and Ethical Legal Influences"
    ]
  },
  {
    "code": "free-answer-nr-nr-507-week-2-quiz-2",
    "name": "(Free answer)  NR NR 507 Week 2 Quiz 2",
    "description": "Interactive practice exam for (Free answer)  NR NR 507 Week 2 Quiz 2",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free answer) NR"
    ]
  },
  {
    "code": "free-answer-nr-nr-510-week-7-assignment-recorded-lace-presentation",
    "name": "(Free answer) NR NR 510 Week 7 Assignment Recorded LACE Presentation",
    "description": "Interactive practice exam for (Free answer) NR NR 510 Week 7 Assignment Recorded LACE Presentation",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free answer) NR Assignment Recorded LACE Presentation"
    ]
  },
  {
    "code": "free-answer-nr-nr507-midterm-review-nr507-mid-term-study-guide",
    "name": "(Free Answer) NR nr507 midterm review NR507 Mid term study guide",
    "description": "Interactive practice exam for (Free Answer) NR nr507 midterm review NR507 Mid term study guide",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) NR review Mid term study guide"
    ]
  },
  {
    "code": "free-answer-nr-nr507-midterm-review",
    "name": "(Free Answer) NR NR507 MIDTERM REVIEW",
    "description": "Interactive practice exam for (Free Answer) NR NR507 MIDTERM REVIEW",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) NR REVIEW"
    ]
  },
  {
    "code": "free-answer-nr-nr507-wk-2-quiz-2-study-guide-2",
    "name": "(Free Answer) Nr nr507 wk 2 quiz 2 study guide 2",
    "description": "Interactive practice exam for (Free Answer) Nr nr507 wk 2 quiz 2 study guide 2",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) Nr wk study guide"
    ]
  },
  {
    "code": "free-answer-nr-nr525-week-1-apa-quiz-solutions",
    "name": "(Free Answer) NR NR525 Week 1 APA Quiz Solutions",
    "description": "Interactive practice exam for (Free Answer) NR NR525 Week 1 APA Quiz Solutions",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) NR APA Solutions"
    ]
  },
  {
    "code": "free-answer-nr507-final-exam-study-guide-2",
    "name": "(Free Answer) NR507 Final exam Study Guide 2",
    "description": "Interactive practice exam for (Free Answer) NR507 Final exam Study Guide 2",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer) Study Guide"
    ]
  },
  {
    "code": "free-answer-nr507-week-3-quiz",
    "name": "(Free Answer) NR507 Week 3 Quiz",
    "description": "Interactive practice exam for (Free Answer) NR507 Week 3 Quiz",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answer)"
    ]
  },
  {
    "code": "free-answers-final-exam-study-guide-nr601",
    "name": "(Free Answers) Final Exam Study Guide NR601",
    "description": "Interactive practice exam for (Free Answers) Final Exam Study Guide NR601",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answers) Study Guide"
    ]
  },
  {
    "code": "free-answers-nr-nr507-week-4-midterm-exam-real-exam",
    "name": "(Free Answers) NR NR507 Week 4 Midterm Exam Real Exam",
    "description": "Interactive practice exam for (Free Answers) NR NR507 Week 4 Midterm Exam Real Exam",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answers) NR Real"
    ]
  },
  {
    "code": "free-answers-nr-nr507-week-4-midterm-exam",
    "name": "(Free Answers) NR NR507 Week 4 Midterm Exam",
    "description": "Interactive practice exam for (Free Answers) NR NR507 Week 4 Midterm Exam",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answers) NR"
    ]
  },
  {
    "code": "free-answers-nr-nr507-week-4-midterm-questions-and-answers",
    "name": "(Free Answers) NR NR507 Week 4 Midterm Questions and Answers",
    "description": "Interactive practice exam for (Free Answers) NR NR507 Week 4 Midterm Questions and Answers",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answers) NR Questions and Answers"
    ]
  },
  {
    "code": "free-answers-nr-nr507-week-8-final-exam",
    "name": "(Free Answers) NR NR507 Week 8 Final Exam",
    "description": "Interactive practice exam for (Free Answers) NR NR507 Week 8 Final Exam",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Answers) NR"
    ]
  },
  {
    "code": "free-answers-week-7-quiz-dementia-elder-abuse-delirium-nr601",
    "name": "(Free answers) WEEK 7 QUIZ DEMENTIA ELDER ABUSE DELIRIUM NR601",
    "description": "Interactive practice exam for (Free answers) WEEK 7 QUIZ DEMENTIA ELDER ABUSE DELIRIUM NR601",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free answers) DEMENTIA ELDER ABUSE DELIRIUM"
    ]
  },
  {
    "code": "free-nr-507-final-exam-study-guide-3",
    "name": "(Free) NR 507 Final Exam Study Guide 3",
    "description": "Interactive practice exam for (Free) NR 507 Final Exam Study Guide 3",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free) Study Guide"
    ]
  },
  {
    "code": "free-solution-capstone-med-surg-assessment-nr601",
    "name": "(Free Solution) Capstone Med Surg Assessment NR601",
    "description": "Interactive practice exam for (Free Solution) Capstone Med Surg Assessment NR601",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) Capstone Med Surg"
    ]
  },
  {
    "code": "free-solution-final-self-assessment-of-professional-competencies-week-1-week-8-n",
    "name": "(Free Solution) Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "description": "Interactive practice exam for (Free Solution) Final Self-Assessment of Professional Competencies Week 1 Week 8 NR 630",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) Self of Professional Competencies"
    ]
  },
  {
    "code": "free-solution-nr-nr601-final-exam-study-guide",
    "name": "(Free Solution) NR NR601 Final Exam Study Guide",
    "description": "Interactive practice exam for (Free Solution) NR NR601 Final Exam Study Guide",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) NR Study Guide"
    ]
  },
  {
    "code": "free-solution-nr-nr601-final-study-guide-questions",
    "name": "(Free Solution) NR NR601 final study guide questions",
    "description": "Interactive practice exam for (Free Solution) NR NR601 final study guide questions",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) NR study guide questions"
    ]
  },
  {
    "code": "free-solution-nr-nr601-week-5-quiz",
    "name": "(Free Solution) NR NR601 WEEK 5 QUIZ",
    "description": "Interactive practice exam for (Free Solution) NR NR601 WEEK 5 QUIZ",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) NR"
    ]
  },
  {
    "code": "free-solution-nr-nr601-week-6-quiz",
    "name": "(Free Solution) NR NR601 WEEK 6 QUIZ",
    "description": "Interactive practice exam for (Free Solution) NR NR601 WEEK 6 QUIZ",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) NR"
    ]
  },
  {
    "code": "free-solution-nr601-final-exam-study-guide-week-5-glucose-metabolism-disorders",
    "name": "(Free Solution) NR601 FINAL EXAM STUDY GUIDE Week 5 Glucose metabolism disorders",
    "description": "Interactive practice exam for (Free Solution) NR601 FINAL EXAM STUDY GUIDE Week 5 Glucose metabolism disorders",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) STUDY GUIDE Glucose metabolism disorders"
    ]
  },
  {
    "code": "free-solution-nurs-fpx4900-odom-jonell-assessment2-1",
    "name": "(Free Solution) NURS FPX4900 Odom Jonell Assessment2 1",
    "description": "Interactive practice exam for (Free Solution) NURS FPX4900 Odom Jonell Assessment2 1",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) NURS FPX4900 Odom Jonell Assessment2"
    ]
  },
  {
    "code": "free-solution-quiz-5-nr-601-mature-and-aging-adult",
    "name": "(Free Solution) Quiz 5 NR 601 MATURE AND AGING ADULT",
    "description": "Interactive practice exam for (Free Solution) Quiz 5 NR 601 MATURE AND AGING ADULT",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) MATURE AND AGING ADULT"
    ]
  },
  {
    "code": "free-solution-sbirt-presentation-alcohol-and-its-impact-nr443",
    "name": "(Free Solution) SBIRT Presentation Alcohol and Its Impact NR443",
    "description": "Interactive practice exam for (Free Solution) SBIRT Presentation Alcohol and Its Impact NR443",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) SBIRT Presentation Alcohol and Its Impact"
    ]
  },
  {
    "code": "free-solution-the-rise-of-patient-sitters-the-financial-burden-on-organizations-",
    "name": "(Free Solution) The Rise of Patient Sitters The Financial Burden on Organizations NR 630",
    "description": "Interactive practice exam for (Free Solution) The Rise of Patient Sitters The Financial Burden on Organizations NR 630",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) The Rise of Patient Sitters The Financial Burden on Organizations"
    ]
  },
  {
    "code": "free-solution-week-1-initial-self-assessment-of-professional-competencies-nr-630",
    "name": "(Free Solution) Week 1 Initial Self-Assessment of Professional Competencies NR 630",
    "description": "Interactive practice exam for (Free Solution) Week 1 Initial Self-Assessment of Professional Competencies NR 630",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) Initial Self of Professional Competencies"
    ]
  },
  {
    "code": "free-solution-week-2-assignment-direct-care-project-part-1-assessment-and-diagno",
    "name": "(Free Solution) Week 2 Assignment Direct Care Project Part 1 Assessment and Diagnosis NR443",
    "description": "Interactive practice exam for (Free Solution) Week 2 Assignment Direct Care Project Part 1 Assessment and Diagnosis NR443",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) Assignment Direct Care Project Part and Diagnosis"
    ]
  },
  {
    "code": "free-solution-week-3-social-media-discussion-with-responses-population-health-pr",
    "name": "(Free Solution) Week 3 Social Media Discussion with Responses Population Health Problems",
    "description": "Interactive practice exam for (Free Solution) Week 3 Social Media Discussion with Responses Population Health Problems",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) Social Media Discussion with Responses Population Health Problems"
    ]
  },
  {
    "code": "free-solution-week-4-assignment-check-in-direct-care-project-part-2-planning-the",
    "name": "(Free Solution) Week 4 Assignment Check-In Direct Care Project Part 2 Planning the Presentation NR 443",
    "description": "Interactive practice exam for (Free Solution) Week 4 Assignment Check-In Direct Care Project Part 2 Planning the Presentation NR 443",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) Assignment Check In Direct Care Project Part Planning the Presentation"
    ]
  },
  {
    "code": "free-solution-week-6-check-in-direct-care-project-part-3-presentation-delivery",
    "name": "(Free Solution) Week 6 Check-In Direct Care Project Part 3 Presentation Delivery",
    "description": "Interactive practice exam for (Free Solution) Week 6 Check-In Direct Care Project Part 3 Presentation Delivery",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "(Free Solution) Check In Direct Care Project Part Presentation Delivery"
    ]
  },
  {
    "code": "hesi-admission-assessment-exam-help-by-nursingschooltutors-com",
    "name": "HESI Admission Assessment Exam Help by NursingSchoolTutors.com",
    "description": "Interactive practice exam for HESI Admission Assessment Exam Help by NursingSchoolTutors.com",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Admission Help by NursingSchoolTutors.com"
    ]
  },
  {
    "code": "hesi-admission-assessment-exam-help-by-nursingschooltutorscom",
    "name": "HESI Admission Assessment Exam Help by NursingSchoolTutors.com",
    "description": "Interactive practice exam for HESI Admission Assessment Exam Help by NursingSchoolTutors.com",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Admission Help by NursingSchoolTutors.com"
    ]
  },
  {
    "code": "hesi-exam-2024-100-out-of-100",
    "name": "HESI exam 2024 100 out of 100",
    "description": "Interactive practice exam for HESI exam 2024 100 out of 100",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "out of"
    ]
  },
  {
    "code": "hesi-exam-3-2024",
    "name": "HESI Exam 3 2024",
    "description": "Interactive practice exam for HESI Exam 3 2024",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "hesi-exam-4-2024-25",
    "name": "HESI Exam 4 2024-25",
    "description": "Interactive practice exam for HESI Exam 4 2024-25",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "hesi-exam-6-2024-26",
    "name": "HESI Exam 6 2024-26",
    "description": "Interactive practice exam for HESI Exam 6 2024-26",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "hesi-exam-practice-questions-2024",
    "name": "HESI Exam Practice Questions 2024",
    "description": "Interactive practice exam for HESI Exam Practice Questions 2024",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Questions"
    ]
  },
  {
    "code": "how-to-pass-ati-teas-exam",
    "name": "How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide",
    "description": "Interactive practice exam for How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "How to Pass the TEAS in — Complete Study Guide"
    ]
  },
  {
    "code": "how-to-pass-the-ati-teas-exam-in-2025-complete-study-guide",
    "name": "How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide",
    "description": "Interactive practice exam for How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "How to Pass the TEAS in — Complete Study Guide"
    ]
  },
  {
    "code": "humor-health-promotion-sensitivity-to-each-patients-goals-values",
    "name": "Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values",
    "description": "Interactive practice exam for Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values"
    ]
  },
  {
    "code": "introduction-and-foundations-of-advanced-pharmacology",
    "name": "Introduction and Foundations of Advanced Pharmacology",
    "description": "Interactive practice exam for Introduction and Foundations of Advanced Pharmacology",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Introduction and Foundations of Advanced Pharmacology"
    ]
  },
  {
    "code": "leadership-community-vati-remediation-week-7-nr452-",
    "name": "Leadership Community VATI Remediation Week 7 NR452",
    "description": "Interactive practice exam for Leadership Community VATI Remediation Week 7 NR452",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Leadership Community Remediation"
    ]
  },
  {
    "code": "leadership-community-vati-remediation-week-7-nr452",
    "name": "Leadership Community VATI Remediation Week 7 NR452",
    "description": "Interactive practice exam for Leadership Community VATI Remediation Week 7 NR452",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Leadership Community Remediation"
    ]
  },
  {
    "code": "med-surg-pharm-remediation-nr452",
    "name": "MED SURG PHARM REMEDIATION NR452",
    "description": "Interactive practice exam for MED SURG PHARM REMEDIATION NR452",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "MED SURG PHARM REMEDIATION"
    ]
  },
  {
    "code": "mfa-case-presentation-study-for-week-7-nr602",
    "name": "MFA Case Presentation Study for Week 7 NR602",
    "description": "Interactive practice exam for MFA Case Presentation Study for Week 7 NR602",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "MFA Case Presentation Study for"
    ]
  },
  {
    "code": "midterm-book-review-study-guide-nr-602",
    "name": "Midterm Book Review - Study Guide NR 602",
    "description": "Interactive practice exam for Midterm Book Review - Study Guide NR 602",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Book Review Study Guide"
    ]
  },
  {
    "code": "midterm-book-review-study-guide-nr602",
    "name": "Midterm book review- study guide NR602",
    "description": "Interactive practice exam for Midterm book review- study guide NR602",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "book review study guide"
    ]
  },
  {
    "code": "midterm-exam-study-guide-nr511",
    "name": "Midterm Exam Study Guide NR511",
    "description": "Interactive practice exam for Midterm Exam Study Guide NR511",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "midterm-study-guide-for-nr-599-nursing-informatics",
    "name": "Midterm Study Guide for NR 599 Nursing Informatics",
    "description": "Interactive practice exam for Midterm Study Guide for NR 599 Nursing Informatics",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide for Nursing Informatics"
    ]
  },
  {
    "code": "midterm-study-guide-nr-599-informatics",
    "name": "Midterm Study Guide NR 599 Informatics",
    "description": "Interactive practice exam for Midterm Study Guide NR 599 Informatics",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide Informatics"
    ]
  },
  {
    "code": "mindfulness-in-nursing-education-fixed-vs-growth-mindsets",
    "name": "Mindfulness in Nursing Education: Fixed vs. Growth Mindsets",
    "description": "Interactive practice exam for Mindfulness in Nursing Education: Fixed vs. Growth Mindsets",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Mindfulness in Nursing Education: Fixed vs. Growth Mindsets"
    ]
  },
  {
    "code": "multi-client-simulation-student-instructions-nr-nr452",
    "name": "NR NR452 Multi Client Simulation: Student Instructions",
    "description": "Interactive practice exam for NR NR452 Multi Client Simulation: Student Instructions",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Multi Client Simulation: Student Instructions"
    ]
  },
  {
    "code": "new-nr-599-week-6-medical-application-critical-appraisal-guidelines",
    "name": "New NR 599 Week 6 Medical Application Critical Appraisal Guidelines",
    "description": "Interactive practice exam for New NR 599 Week 6 Medical Application Critical Appraisal Guidelines",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New Medical Application Critical Appraisal Guidelines"
    ]
  },
  {
    "code": "new-nr-nr224-exam-3-study-guide",
    "name": "New NR NR224 Exam 3 Study Guide",
    "description": "Interactive practice exam for New NR NR224 Exam 3 Study Guide",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New NR Study Guide"
    ]
  },
  {
    "code": "new-nr103-week-4-ati-test-taking-skills-notes",
    "name": "New NR103 Week 4 ATI TEST TAKING SKILLS NOTES",
    "description": "Interactive practice exam for New NR103 Week 4 ATI TEST TAKING SKILLS NOTES",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New TAKING SKILLS NOTES"
    ]
  },
  {
    "code": "new-nr228-final-exam-study-guide-",
    "name": "New NR228 Final Exam Study Guide",
    "description": "Interactive practice exam for New NR228 Final Exam Study Guide",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New Study Guide"
    ]
  },
  {
    "code": "new-nr228-final-exam-study-guide",
    "name": "New NR228 Final Exam Study Guide",
    "description": "Interactive practice exam for New NR228 Final Exam Study Guide",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New Study Guide"
    ]
  },
  {
    "code": "new-nr393-w3-course-project-phase-2-conversation-",
    "name": "New NR393 W3 Course Project Phase 2 Conversation",
    "description": "Interactive practice exam for New NR393 W3 Course Project Phase 2 Conversation",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New W3 Course Project Phase Conversation"
    ]
  },
  {
    "code": "new-nr393-w3-course-project-phase-2-conversation",
    "name": "New NR393 W3 Course Project Phase 2 Conversation",
    "description": "Interactive practice exam for New NR393 W3 Course Project Phase 2 Conversation",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New W3 Course Project Phase Conversation"
    ]
  },
  {
    "code": "new-nr506np-week-4-assignment",
    "name": "NR506NP Week 4 Assignment Health Policy Analysis Kaltura Presentation",
    "description": "Interactive practice exam for NR506NP Week 4 Assignment Health Policy Analysis Kaltura Presentation",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR506NP Assignment Health Policy Analysis Kaltura Presentation"
    ]
  },
  {
    "code": "new-vati-nclex-review-calendar",
    "name": "New VATI NCLEX Review Calendar",
    "description": "Interactive practice exam for New VATI NCLEX Review Calendar",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "New NCLEX Review Calendar"
    ]
  },
  {
    "code": "nr-103-perioperative-nursing-and-safety",
    "name": "NR 103 Perioperative Nursing and Safety",
    "description": "Interactive practice exam for NR 103 Perioperative Nursing and Safety",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Perioperative Nursing and Safety"
    ]
  },
  {
    "code": "nr-103-week-2-tutorial-preparation-activities-professional-identity-and-reflecti",
    "name": "NR 103 Week 2 Tutorial Preparation Activities Professional Identity and Reflection",
    "description": "Interactive practice exam for NR 103 Week 2 Tutorial Preparation Activities Professional Identity and Reflection",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Tutorial Preparation Activities Professional Identity and Reflection"
    ]
  },
  {
    "code": "nr-103-week-2-tutorial-preparation-activities-professional-identity-and-reflection",
    "name": "NR 103 Week 2 Tutorial Preparation Activities Professional Identity and Reflection",
    "description": "Interactive practice exam for NR 103 Week 2 Tutorial Preparation Activities Professional Identity and Reflection",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Tutorial Preparation Activities Professional Identity and Reflection"
    ]
  },
  {
    "code": "nr-103-week-3-ceap-assessment-chamberlain-college-of-nursing",
    "name": "NR 103 Week 3 CEAP Assessment Chamberlain College of Nursing",
    "description": "Interactive practice exam for NR 103 Week 3 CEAP Assessment Chamberlain College of Nursing",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "CEAP Chamberlain College of Nursing"
    ]
  },
  {
    "code": "nr-103-week-3-chamberlain-early-assessment-program-ceap",
    "name": "NR 103 Week 3 Chamberlain Early Assessment Program (CEAP",
    "description": "Interactive practice exam for NR 103 Week 3 Chamberlain Early Assessment Program (CEAP",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chamberlain Early Program (CEAP"
    ]
  },
  {
    "code": "nr-103-week-8-assignment-final-project-presentation",
    "name": "NR 103 Week 8 Assignment Final Project Presentation",
    "description": "Interactive practice exam for NR 103 Week 8 Assignment Final Project Presentation",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Assignment Project Presentation"
    ]
  },
  {
    "code": "nr-103-week-8-final-project",
    "name": "NR 103 Week 8- final project",
    "description": "Interactive practice exam for NR 103 Week 8- final project",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "project"
    ]
  },
  {
    "code": "nr-224-exam-3-study-guide",
    "name": "NR 224 Exam 3 Study Guide",
    "description": "Interactive practice exam for NR 224 Exam 3 Study Guide",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "nr-305-health-assessment-at-chamberlain-college-of-nursing",
    "name": "NR 305 Health Assessment at Chamberlain College of Nursing",
    "description": "Interactive practice exam for NR 305 Health Assessment at Chamberlain College of Nursing",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Health at Chamberlain College of Nursing"
    ]
  },
  {
    "code": "nr-305-health-assessment-for-the-practicing-rn-online-class-help",
    "name": "NR-305: Health Assessment for the Practicing RN-Online class Help",
    "description": "Interactive practice exam for NR-305: Health Assessment for the Practicing RN-Online class Help",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      ": Health for the Practicing RN Online class Help"
    ]
  },
  {
    "code": "nr-341-ati-client-comfort-and-end-of-life-care-reflection-assignment",
    "name": "NR 341 ATI Client Comfort and End-of-life Care Reflection Assignment",
    "description": "Interactive practice exam for NR 341 ATI Client Comfort and End-of-life Care Reflection Assignment",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Client Comfort and End of life Care Reflection Assignment"
    ]
  },
  {
    "code": "nr-341-ati-client-comfort-and-end-of-life-care-reflection-docx-",
    "name": "NR 341 ATI Client comfort and end-of-life care Reflection.docx",
    "description": "Interactive practice exam for NR 341 ATI Client comfort and end-of-life care Reflection.docx",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Client comfort and end of life care Reflection.docx"
    ]
  },
  {
    "code": "nr-341-ati-client-comfort-and-end-of-life-care-reflectiondocx",
    "name": "NR 341 ATI Client comfort and end-of-life care Reflection.docx",
    "description": "Interactive practice exam for NR 341 ATI Client comfort and end-of-life care Reflection.docx",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Client comfort and end of life care Reflection.docx"
    ]
  },
  {
    "code": "nr-341-case-study-exercise-dysrhythmia-interpretation-1",
    "name": "NR 341 Case Study Exercise: Dysrhythmia Interpretation 1",
    "description": "Interactive practice exam for NR 341 Case Study Exercise: Dysrhythmia Interpretation 1",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Case Study Exercise: Dysrhythmia Interpretation"
    ]
  },
  {
    "code": "nr-341-complex-adult-health-exam-1-questions-with-rationales-2",
    "name": "NR 341 Complex Adult Health Exam 1 Questions with Rationales 2",
    "description": "Interactive practice exam for NR 341 Complex Adult Health Exam 1 Questions with Rationales 2",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Complex Adult Health Questions with Rationales"
    ]
  },
  {
    "code": "nr-341-complex-adult-health-exam-1-questions-with-rationales",
    "name": "NR 341 Complex Adult Health Exam 1 Questions with Rationales",
    "description": "Interactive practice exam for NR 341 Complex Adult Health Exam 1 Questions with Rationales",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Complex Adult Health Questions with Rationales"
    ]
  },
  {
    "code": "nr-341-complex-adult-health-exam-1-questions-with-rationales2",
    "name": "NR 341 Complex Adult Health Exam 1 Questions with Rationales 2",
    "description": "Interactive practice exam for NR 341 Complex Adult Health Exam 1 Questions with Rationales 2",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Complex Adult Health Questions with Rationales"
    ]
  },
  {
    "code": "nr-341-exam-2-rok",
    "name": "NR 341 Exam 2 ROK",
    "description": "Interactive practice exam for NR 341 Exam 2 ROK",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "ROK"
    ]
  },
  {
    "code": "nr-341-exam-view-ch0009-harding-11e-tb-lewis",
    "name": "NR 341 Exam View - CH0009 Harding 11e TB lewis",
    "description": "Interactive practice exam for NR 341 Exam View - CH0009 Harding 11e TB lewis",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "View CH0009 Harding 11e TB lewis"
    ]
  },
  {
    "code": "nr-341-final-exam-with-100-correct-answers",
    "name": "Nr 341 - Final Exam with 100% correct Answers",
    "description": "Interactive practice exam for Nr 341 - Final Exam with 100% correct Answers",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nr with % correct Answers"
    ]
  },
  {
    "code": "nr-341-final-paper-rua-for-nr-341",
    "name": "Nr 341 final paper - rua for nr 341",
    "description": "Interactive practice exam for Nr 341 final paper - rua for nr 341",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nr paper rua for"
    ]
  },
  {
    "code": "nr-341-quiz-1-docx-chamberlain-college-of-nursing",
    "name": "Nr 341 Quiz 1 Docx Chamberlain College of Nursing",
    "description": "Interactive practice exam for Nr 341 Quiz 1 Docx Chamberlain College of Nursing",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nr Docx Chamberlain College of Nursing"
    ]
  },
  {
    "code": "nr-341-quiz-1-exam-help",
    "name": "NR 341 Quiz 1 Exam Help",
    "description": "Interactive practice exam for NR 341 Quiz 1 Exam Help",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Help"
    ]
  },
  {
    "code": "nr-341-quiz-1-exam",
    "name": "NR 341 Quiz 1 EXAM",
    "description": "Interactive practice exam for NR 341 Quiz 1 EXAM",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-341-quiz-1-version-4",
    "name": "NR 341 Quiz 1 version 4",
    "description": "Interactive practice exam for NR 341 Quiz 1 version 4",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "version"
    ]
  },
  {
    "code": "nr-361-information-systems-healthcare-online-class-help",
    "name": "NR 361 Information Systems in Healthcare: Excelling with nursingschooltutors.com",
    "description": "Interactive practice exam for NR 361 Information Systems in Healthcare: Excelling with nursingschooltutors.com",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Information Systems in Healthcare: Excelling with nursingschooltutors.com"
    ]
  },
  {
    "code": "nr-361-information-systems-in-healthcare-excelling-with-nursingschooltutorscom",
    "name": "NR 361 Information Systems in Healthcare: Excelling with nursingschooltutors.com",
    "description": "Interactive practice exam for NR 361 Information Systems in Healthcare: Excelling with nursingschooltutors.com",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Information Systems in Healthcare: Excelling with nursingschooltutors.com"
    ]
  },
  {
    "code": "nr-390-wk3-nr393-course-project-phase-2-conversation-",
    "name": "NR 390 Wk3 NR393 Course Project Phase 2 Conversation",
    "description": "Interactive practice exam for NR 390 Wk3 NR393 Course Project Phase 2 Conversation",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Wk3 Course Project Phase Conversation"
    ]
  },
  {
    "code": "nr-390-wk3-nr393-course-project-phase-2-conversation",
    "name": "NR 390 Wk3 NR393 Course Project Phase 2 Conversation",
    "description": "Interactive practice exam for NR 390 Wk3 NR393 Course Project Phase 2 Conversation",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Wk3 Course Project Phase Conversation"
    ]
  },
  {
    "code": "nr-390-wk5-discussion-the-establishment-of-nursing-education-programs",
    "name": "NR 390 Wk5 Discussion The Establishment of Nursing Education Programs",
    "description": "Interactive practice exam for NR 390 Wk5 Discussion The Establishment of Nursing Education Programs",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Wk5 Discussion The Establishment of Nursing Education Programs"
    ]
  },
  {
    "code": "nr-442-exam-2-matrix",
    "name": "NR 442 Exam 2 Matrix",
    "description": "Interactive practice exam for NR 442 Exam 2 Matrix",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Matrix"
    ]
  },
  {
    "code": "nr-442-exam-2",
    "name": "NR 442 Exam 2",
    "description": "Interactive practice exam for NR 442 Exam 2",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-442-test-matrix-for-exam-2",
    "name": "NR 442 Test Matrix for Exam 2",
    "description": "Interactive practice exam for NR 442 Test Matrix for Exam 2",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Matrix for"
    ]
  },
  {
    "code": "nr-451-capstone-project-milestone-3-educating-staff-and-implementing-change",
    "name": "NR 451 Capstone Project Milestone 3 Educating Staff and Implementing Change",
    "description": "Interactive practice exam for NR 451 Capstone Project Milestone 3 Educating Staff and Implementing Change",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Capstone Project Milestone Educating Staff and Implementing Change"
    ]
  },
  {
    "code": "nr-451-capstone-week-3-powerpoint-presentation-",
    "name": "NR 451 Capstone Week 3 PowerPoint presentation",
    "description": "Interactive practice exam for NR 451 Capstone Week 3 PowerPoint presentation",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Capstone PowerPoint presentation"
    ]
  },
  {
    "code": "nr-451-capstone-week-3-powerpoint-presentation",
    "name": "NR 451 Capstone Week 3 PowerPoint presentation",
    "description": "Interactive practice exam for NR 451 Capstone Week 3 PowerPoint presentation",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Capstone PowerPoint presentation"
    ]
  },
  {
    "code": "nr-451-chamberlain-week-5-icare-improving-communication-and-collaboration-paper",
    "name": "NR 451 Chamberlain Week 5 iCARE Improving Communication and Collaboration Paper",
    "description": "Interactive practice exam for NR 451 Chamberlain Week 5 iCARE Improving Communication and Collaboration Paper",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Chamberlain iCARE Improving Communication and Collaboration Paper"
    ]
  },
  {
    "code": "nr-501-wk-5-discussion-analysis-and-application-of-a-nursing-model-theory",
    "name": "NR 501 Wk 5 Discussion Analysis and Application of a Nursing Model-Theory",
    "description": "Interactive practice exam for NR 501 Wk 5 Discussion Analysis and Application of a Nursing Model-Theory",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Wk Discussion Analysis and Application of a Nursing Model Theory"
    ]
  },
  {
    "code": "nr-503-epidemiology-midterm-questions-answers",
    "name": "NR 503 Epidemiology Midterm Questions Answers",
    "description": "Interactive practice exam for NR 503 Epidemiology Midterm Questions Answers",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Epidemiology Questions Answers"
    ]
  },
  {
    "code": "nr-503-final-exam-nr-503-final-exam-study-guide",
    "name": "NR 503 FINAL EXAM NR 503 Final Exam Study Guide",
    "description": "Interactive practice exam for NR 503 FINAL EXAM NR 503 Final Exam Study Guide",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "nr-503-population-health-epidemiology-",
    "name": "NR 503 Population Health Epidemiology",
    "description": "Interactive practice exam for NR 503 Population Health Epidemiology",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Population Health Epidemiology"
    ]
  },
  {
    "code": "nr-503-population-health-epidemiology",
    "name": "NR 503 Population Health Epidemiology",
    "description": "Interactive practice exam for NR 503 Population Health Epidemiology",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Population Health Epidemiology"
    ]
  },
  {
    "code": "nr-503-week-6-evaluation-of-epidemiological-problem-type-2-diabetes-mellitus",
    "name": "NR 503 Week 6 Evaluation of Epidemiological Problem Type 2 Diabetes Mellitus",
    "description": "Interactive practice exam for NR 503 Week 6 Evaluation of Epidemiological Problem Type 2 Diabetes Mellitus",
    "totalQuestions": 38,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Evaluation of Epidemiological Problem Type Diabetes Mellitus"
    ]
  },
  {
    "code": "nr-504-week-8-synthesis-and-reflection-of-learning",
    "name": "NR 504 Week 8 Synthesis and Reflection of Learning",
    "description": "Interactive practice exam for NR 504 Week 8 Synthesis and Reflection of Learning",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Synthesis and Reflection of Learning"
    ]
  },
  {
    "code": "nr-505-introduction-to-research-ethics-quiz-summary",
    "name": "NR 505 Introduction to Research Ethics Quiz Summary",
    "description": "Interactive practice exam for NR 505 Introduction to Research Ethics Quiz Summary",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Introduction to Research Ethics Summary"
    ]
  },
  {
    "code": "nr-505-week-1-global-health-training-quiz",
    "name": "NR 505 Week 1 global health training quiz",
    "description": "Interactive practice exam for NR 505 Week 1 global health training quiz",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "global health training"
    ]
  },
  {
    "code": "nr-505-week-5-research-literature-design-sampling-and-implementation-",
    "name": "NR 505 Week 5 Research Literature Design Sampling and Implementation",
    "description": "Interactive practice exam for NR 505 Week 5 Research Literature Design Sampling and Implementation",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Research Literature Design Sampling and Implementation"
    ]
  },
  {
    "code": "nr-505-week-5-research-literature-design-sampling-and-implementation",
    "name": "NR 505 Week 5 Research Literature Design Sampling and Implementation",
    "description": "Interactive practice exam for NR 505 Week 5 Research Literature Design Sampling and Implementation",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Research Literature Design Sampling and Implementation"
    ]
  },
  {
    "code": "nr-505-week-6-discussion-the-importance-of-research-ethics-and-federal-regulatio",
    "name": "NR 505 Week 6 Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research",
    "description": "Interactive practice exam for NR 505 Week 6 Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research"
    ]
  },
  {
    "code": "nr-505-week-6-discussion-the-importance-of-research-ethics-and-federal-regulations-in-biomedical-research",
    "name": "NR 505 Week 6 Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research",
    "description": "Interactive practice exam for NR 505 Week 6 Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Discussion The Importance of Research Ethics and Federal Regulations in Biomedical Research"
    ]
  },
  {
    "code": "nr-508-pharmacology-practice-quiz-2",
    "name": "NR 508 Pharmacology Practice Quiz 2",
    "description": "Interactive practice exam for NR 508 Pharmacology Practice Quiz 2",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Pharmacology"
    ]
  },
  {
    "code": "nr-508-week-1-discussion-foundation-of-the-role-of-the-nurse-practitioner-",
    "name": "NR 508 Week 1 Discussion: Foundation of the Role of the Nurse Practitioner",
    "description": "Interactive practice exam for NR 508 Week 1 Discussion: Foundation of the Role of the Nurse Practitioner",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Discussion: Foundation of the Role of the Nurse Practitioner"
    ]
  },
  {
    "code": "nr-508-week-1-discussion-foundation-of-the-role-of-the-nurse-practitioner",
    "name": "NR 508 Week 1 Discussion: Foundation of the Role of the Nurse Practitioner",
    "description": "Interactive practice exam for NR 508 Week 1 Discussion: Foundation of the Role of the Nurse Practitioner",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Discussion: Foundation of the Role of the Nurse Practitioner"
    ]
  },
  {
    "code": "nr-509-immersion-physical-exam-summary",
    "name": "NR 509 Immersion Physical Exam Summary",
    "description": "Interactive practice exam for NR 509 Immersion Physical Exam Summary",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Immersion Physical Summary"
    ]
  },
  {
    "code": "nr-509-immersion-physical-exam-docx-pdf-version-1",
    "name": "NR 509 Immersion Physical Exam.docx.pdf version 1",
    "description": "Interactive practice exam for NR 509 Immersion Physical Exam.docx.pdf version 1",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Immersion Physical .docx.pdf version"
    ]
  },
  {
    "code": "nr-509-immersion-physical-examdocxpdf-version-1",
    "name": "NR 509 Immersion Physical Exam.docx.pdf version 1",
    "description": "Interactive practice exam for NR 509 Immersion Physical Exam.docx.pdf version 1",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Immersion Physical .docx.pdf version"
    ]
  },
  {
    "code": "nr-509-midterm-study-guide",
    "name": "NR 509 Midterm Study Guide",
    "description": "Interactive practice exam for NR 509 Midterm Study Guide",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "nr-509-shadow-health-pediatric-education-",
    "name": "NR 509 Shadow Health Pediatric Education",
    "description": "Interactive practice exam for NR 509 Shadow Health Pediatric Education",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Shadow Health Pediatric Education"
    ]
  },
  {
    "code": "nr-509-shadow-health-pediatric-education",
    "name": "NR 509 Shadow Health Pediatric Education",
    "description": "Interactive practice exam for NR 509 Shadow Health Pediatric Education",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Shadow Health Pediatric Education"
    ]
  },
  {
    "code": "nr-509-soap-note-week-2-respiratory-system-assessment",
    "name": "NR 509 SOAP Note Week 2 - Respiratory System Assessment",
    "description": "Interactive practice exam for NR 509 SOAP Note Week 2 - Respiratory System Assessment",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "SOAP Note Respiratory System"
    ]
  },
  {
    "code": "nr-509-week-1-health-history-and-physical-examination",
    "name": "NR 509 Week 1: Health History and Physical Examination",
    "description": "Interactive practice exam for NR 509 Week 1: Health History and Physical Examination",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      ": Health History and Physical Examination"
    ]
  },
  {
    "code": "nr-509-week-2-neurological-system-assessment",
    "name": "NR 509 Week 2: Neurological System Assessment",
    "description": "Interactive practice exam for NR 509 Week 2: Neurological System Assessment",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      ": Neurological System"
    ]
  },
  {
    "code": "nr-509-week-2-quiz-review-revised",
    "name": "NR 509 Week 2 Quiz Review",
    "description": "Interactive practice exam for NR 509 Week 2 Quiz Review",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Review"
    ]
  },
  {
    "code": "nr-509-week-2-quiz-review",
    "name": "NR 509 Week 2 Quiz Review",
    "description": "Interactive practice exam for NR 509 Week 2 Quiz Review",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Review"
    ]
  },
  {
    "code": "nr-509-week-4-midweek-comprehension-quiz",
    "name": "NR 509 Week 4: Midweek Comprehension Quiz",
    "description": "Interactive practice exam for NR 509 Week 4: Midweek Comprehension Quiz",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      ": Midweek Comprehension"
    ]
  },
  {
    "code": "nr-509-week-4-respiratory-system-assessment",
    "name": "NR 509 Week 4: Respiratory System Assessment",
    "description": "Interactive practice exam for NR 509 Week 4: Respiratory System Assessment",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      ": Respiratory System"
    ]
  },
  {
    "code": "nr-509-week-5-gastrointestinal-system-assessment",
    "name": "NR 509 Week 5: Gastrointestinal System Assessment",
    "description": "Interactive practice exam for NR 509 Week 5: Gastrointestinal System Assessment",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      ": Gastrointestinal System"
    ]
  },
  {
    "code": "nr-509-week-6-alternative-writing-assignment-abdomen",
    "name": "NR 509 Week 6 Alternative Writing Assignment: Abdomen",
    "description": "Interactive practice exam for NR 509 Week 6 Alternative Writing Assignment: Abdomen",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Alternative Writing Assignment: Abdomen"
    ]
  },
  {
    "code": "nr-509-week-7-male-and-female-genitalia-and-breast-assessment",
    "name": "NR 509 Week 7: Male and Female Genitalia and Breast Assessment",
    "description": "Interactive practice exam for NR 509 Week 7: Male and Female Genitalia and Breast Assessment",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      ": Male and Female Genitalia and Breast"
    ]
  },
  {
    "code": "nr-511-cpg-htn-presentation",
    "name": "NR 511 CPG HTN Presentation",
    "description": "Interactive practice exam for NR 511 CPG HTN Presentation",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "CPG HTN Presentation"
    ]
  },
  {
    "code": "nr-511-midterm-exam",
    "name": "NR 511 Midterm Exam",
    "description": "Interactive practice exam for NR 511 Midterm Exam",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-511-snapps-oral-presentation-patient-case-summary",
    "name": "NR 511 SNAPPS Oral Presentation Patient Case Summary",
    "description": "Interactive practice exam for NR 511 SNAPPS Oral Presentation Patient Case Summary",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "SNAPPS Oral Presentation Patient Case Summary"
    ]
  },
  {
    "code": "nr-511-week-5-quiz-part-2-",
    "name": "NR 511 week 5 quiz part 2",
    "description": "Interactive practice exam for NR 511 week 5 quiz part 2",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "part"
    ]
  },
  {
    "code": "nr-511-week-5-quiz-part-2",
    "name": "NR 511 week 5 quiz part 2",
    "description": "Interactive practice exam for NR 511 week 5 quiz part 2",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "part"
    ]
  },
  {
    "code": "nr-511-week-6-quiz",
    "name": "NR 511 Week 6 Quiz",
    "description": "Interactive practice exam for NR 511 Week 6 Quiz",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-511-week-8-final-exam",
    "name": "NR 511 Week 8 Final Exam",
    "description": "Interactive practice exam for NR 511 Week 8 Final Exam",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-512-quiz-on-key-informatics-terms",
    "name": "NR 512 Quiz on Key Informatics Terms",
    "description": "Interactive practice exam for NR 512 Quiz on Key Informatics Terms",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "on Key Informatics Terms"
    ]
  },
  {
    "code": "nr-512-week6-pluone-2-analyzing-healthcare-legislation-and-its-impact",
    "name": "NR 512 week6 pluone 2 Analyzing Healthcare Legislation and Its Impact",
    "description": "Interactive practice exam for NR 512 week6 pluone 2 Analyzing Healthcare Legislation and Its Impact",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "week6 pluone Analyzing Healthcare Legislation and Its Impact"
    ]
  },
  {
    "code": "nr-512-wk-2-transformation-from-data",
    "name": "NR 512 Wk 2 Transformation from Data",
    "description": "Interactive practice exam for NR 512 Wk 2 Transformation from Data",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Wk Transformation from Data"
    ]
  },
  {
    "code": "nr-537-test-construction",
    "name": "NR 537 Test Construction",
    "description": "Interactive practice exam for NR 537 Test Construction",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Construction"
    ]
  },
  {
    "code": "nr-537-week-3-assignment-guidelines-and-rubric-final",
    "name": "NR 537 Week 3 Assignment Guidelines and Rubric Final",
    "description": "Interactive practice exam for NR 537 Week 3 Assignment Guidelines and Rubric Final",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Assignment Guidelines and Rubric"
    ]
  },
  {
    "code": "nr-537-week-3-assignment-required-template-for-test-blueprint-final",
    "name": "NR 537 Week 3 Assignment Required Template for Test Blueprint FINAL",
    "description": "Interactive practice exam for NR 537 Week 3 Assignment Required Template for Test Blueprint FINAL",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Assignment Required Template for Blueprint"
    ]
  },
  {
    "code": "nr-553-week-5-dq-nursing-and-population-health",
    "name": "NR 553 Week 5 DQ Nursing and Population Health",
    "description": "Interactive practice exam for NR 553 Week 5 DQ Nursing and Population Health",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "DQ Nursing and Population Health"
    ]
  },
  {
    "code": "nr-554-week-7-post-tanic-assessment",
    "name": "NR 554 Week 7 Post TANIC Assessment",
    "description": "Interactive practice exam for NR 554 Week 7 Post TANIC Assessment",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Post TANIC"
    ]
  },
  {
    "code": "nr-566-final-exam-review-week-5-review-chapter-18",
    "name": "NR 566 - Final Exam Review Week 5 Review Chapter 18",
    "description": "Interactive practice exam for NR 566 - Final Exam Review Week 5 Review Chapter 18",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Review Review Chapter"
    ]
  },
  {
    "code": "nr-566-midterm-study-guide",
    "name": "NR 566 Midterm Study Guide",
    "description": "Interactive practice exam for NR 566 Midterm Study Guide",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "nr-566-presentation-cold-and-cough-rx",
    "name": "NR 566 presentation Cold and Cough Rx",
    "description": "Interactive practice exam for NR 566 presentation Cold and Cough Rx",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "presentation Cold and Cough Rx"
    ]
  },
  {
    "code": "nr-566-week-1-open-book-quiz-answers-and-rationales",
    "name": "NR 566 Week 1 Open Book Quiz Answers and Rationales",
    "description": "Interactive practice exam for NR 566 Week 1 Open Book Quiz Answers and Rationales",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Open Book Answers and Rationales"
    ]
  },
  {
    "code": "nr-566-week-7-pp-presentation-final",
    "name": "NR 566 Week 7 PP Presentation Final",
    "description": "Interactive practice exam for NR 566 Week 7 PP Presentation Final",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "PP Presentation"
    ]
  },
  {
    "code": "nr-566-week-7-presentation",
    "name": "NR 566 Week 7 Presentation",
    "description": "Interactive practice exam for NR 566 Week 7 Presentation",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Presentation"
    ]
  },
  {
    "code": "nr-566-wk-5-immunization-paper-b-ingram",
    "name": "NR 566 Wk 5 Immunization Paper B Ingram",
    "description": "Interactive practice exam for NR 566 Wk 5 Immunization Paper B Ingram",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Wk Immunization Paper B Ingram"
    ]
  },
  {
    "code": "nr-576-agnp-board-examination-questions-assessment-eye-ear-nose-and-throat",
    "name": "NR 576 AGNP Board Examination Questions - Assessment Eye, Ear, Nose and Throat",
    "description": "Interactive practice exam for NR 576 AGNP Board Examination Questions - Assessment Eye, Ear, Nose and Throat",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "AGNP Board Examination Questions Eye, Ear, Nose and Throat"
    ]
  },
  {
    "code": "nr-576-differential-diagnosis-in-adult-gerontology-primary-care-exam-review",
    "name": "NR 576 Differential Diagnosis in Adult-Gerontology Primary Care Exam Review",
    "description": "Interactive practice exam for NR 576 Differential Diagnosis in Adult-Gerontology Primary Care Exam Review",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Differential Diagnosis in Adult Gerontology Primary Care Review"
    ]
  },
  {
    "code": "nr-576-elaborated-ati-gerontology-exam-questions-and-answers-2022-5-rated-latest",
    "name": "NR 576 - Elaborated ATI Gerontology Exam Questions and Answers-2022-5 Rated latest",
    "description": "Interactive practice exam for NR 576 - Elaborated ATI Gerontology Exam Questions and Answers-2022-5 Rated latest",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Elaborated Gerontology Questions and Answers Rated latest"
    ]
  },
  {
    "code": "nr-576-exam-help",
    "name": "NR 576 EXAM Help",
    "description": "Interactive practice exam for NR 576 EXAM Help",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Help"
    ]
  },
  {
    "code": "nr-576-exam-prep-latest",
    "name": "NR 576 Exam Prep Latest",
    "description": "Interactive practice exam for NR 576 Exam Prep Latest",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Prep Latest"
    ]
  },
  {
    "code": "nr-576-final-exam",
    "name": "NR-576 Final Exam",
    "description": "Interactive practice exam for NR-576 Final Exam",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-576-gerontology-quiz-1-answers",
    "name": "NR 576: Gerontology Quiz 1 Answers",
    "description": "Interactive practice exam for NR 576: Gerontology Quiz 1 Answers",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      ": Gerontology Answers"
    ]
  },
  {
    "code": "nr-576-midterm-adult-gerontology-questions-and-answers",
    "name": "NR 576 Midterm - Adult Gerontology Questions and Answers",
    "description": "Interactive practice exam for NR 576 Midterm - Adult Gerontology Questions and Answers",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Adult Gerontology Questions and Answers"
    ]
  },
  {
    "code": "nr-576-week-5-reflection-impact-of-patient-setting-on-care",
    "name": "NR 576 Week 5 Reflection Impact of Patient Setting on Care",
    "description": "Interactive practice exam for NR 576 Week 5 Reflection Impact of Patient Setting on Care",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Reflection Impact of Patient Setting on Care"
    ]
  },
  {
    "code": "nr-576-week-5-reflection",
    "name": "NR 576 Week 5 Reflection Impact of Patient Setting on Care",
    "description": "Interactive practice exam for NR 576 Week 5 Reflection Impact of Patient Setting on Care",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Reflection Impact of Patient Setting on Care"
    ]
  },
  {
    "code": "nr-576-week-7-cpg-bph-presentation-pptx",
    "name": "NR 576 Week 7 CPG BPH presentation.pptx",
    "description": "Interactive practice exam for NR 576 Week 7 CPG BPH presentation.pptx",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "CPG BPH presentation.pptx"
    ]
  },
  {
    "code": "nr-576-week-7-cpg-bph-presentationpptx",
    "name": "NR 576 Week 7 CPG BPH presentation.pptx",
    "description": "Interactive practice exam for NR 576 Week 7 CPG BPH presentation.pptx",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "CPG BPH presentation.pptx"
    ]
  },
  {
    "code": "nr-599-cdc-milestone-final",
    "name": "NR 599 CDC Milestone Final",
    "description": "Interactive practice exam for NR 599 CDC Milestone Final",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "CDC Milestone"
    ]
  },
  {
    "code": "nr-599-midterm-exam-",
    "name": "NR 599 midterm exam",
    "description": "Interactive practice exam for NR 599 midterm exam",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-599-midterm-exam",
    "name": "NR 599 midterm exam",
    "description": "Interactive practice exam for NR 599 midterm exam",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr-599-midterm-review-1",
    "name": "NR 599 midterm review 1",
    "description": "Interactive practice exam for NR 599 midterm review 1",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "review"
    ]
  },
  {
    "code": "nr-599-midterm-review-general-principles-of-nursing-informatics",
    "name": "NR 599 midterm review General Principles of Nursing Informatics",
    "description": "Interactive practice exam for NR 599 midterm review General Principles of Nursing Informatics",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "review General Principles of Nursing Informatics"
    ]
  },
  {
    "code": "nr-599-pre-tanic-self-assessment-and-reflection-post",
    "name": "NR 599 Pre TANIC Self Assessment and Reflection Post",
    "description": "Interactive practice exam for NR 599 Pre TANIC Self Assessment and Reflection Post",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Pre TANIC Self and Reflection Post"
    ]
  },
  {
    "code": "nr-602-midterm-study-guide-topics-26-30",
    "name": "NR 602 Midterm Study Guide Topics 26-30",
    "description": "Interactive practice exam for NR 602 Midterm Study Guide Topics 26-30",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide Topics"
    ]
  },
  {
    "code": "nr-603-comparison-of-post-concussive-syndrome-and-traumatic-brain-injury",
    "name": "NR 603 Comparison of Post Concussive Syndrome and Traumatic Brain Injury",
    "description": "Interactive practice exam for NR 603 Comparison of Post Concussive Syndrome and Traumatic Brain Injury",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Comparison of Post Concussive Syndrome and Traumatic Brain Injury"
    ]
  },
  {
    "code": "nr-603-quiz-1-neuro-week-1-quiz-and-answers",
    "name": "NR 603 QUIZ 1 Neuro Week 1 quiz and answers",
    "description": "Interactive practice exam for NR 603 QUIZ 1 Neuro Week 1 quiz and answers",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Neuro and answers"
    ]
  },
  {
    "code": "nr-661-eent-1-59-quiz",
    "name": "NR 661 EENT 1 59 QUIZ",
    "description": "Interactive practice exam for NR 661 EENT 1 59 QUIZ",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "EENT"
    ]
  },
  {
    "code": "nr-661-gastrointestinal-quiz",
    "name": "NR 661 Gastrointestinal Quiz",
    "description": "Interactive practice exam for NR 661 Gastrointestinal Quiz",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Gastrointestinal"
    ]
  },
  {
    "code": "nr-661-general-class-information-",
    "name": "NR 661 General class information",
    "description": "Interactive practice exam for NR 661 General class information",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "General class information"
    ]
  },
  {
    "code": "nr-661-general-class-information",
    "name": "NR 661 General class information",
    "description": "Interactive practice exam for NR 661 General class information",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "General class information"
    ]
  },
  {
    "code": "nr-661-know-presentation-diagnosis-and-management",
    "name": "NR 661 Know Presentation Diagnosis and Management",
    "description": "Interactive practice exam for NR 661 Know Presentation Diagnosis and Management",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Know Presentation Diagnosis and Management"
    ]
  },
  {
    "code": "nr-nr-305-fnp-application-essay",
    "name": "NR NR 305 FNP application essay",
    "description": "Interactive practice exam for NR NR 305 FNP application essay",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR FNP application essay"
    ]
  },
  {
    "code": "nr-nr-507-final-study-guide",
    "name": "NR NR 507 Final Study Guide",
    "description": "Interactive practice exam for NR NR 507 Final Study Guide",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Study Guide"
    ]
  },
  {
    "code": "nr-nr-507-midterm-patho",
    "name": "NR NR 507 midterm patho",
    "description": "Interactive practice exam for NR NR 507 midterm patho",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR patho"
    ]
  },
  {
    "code": "nr-nr-507-week-2-quiz-2",
    "name": "NR NR 507 Week 2 Quiz 2",
    "description": "Interactive practice exam for NR NR 507 Week 2 Quiz 2",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr-510-week-7-assignment-recorded-lace-presentation",
    "name": "NR NR 510 Week 7 Assignment Recorded LACE Presentation",
    "description": "Interactive practice exam for NR NR 510 Week 7 Assignment Recorded LACE Presentation",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Assignment Recorded LACE Presentation"
    ]
  },
  {
    "code": "nr-nr-534-week-7-business-plan-final",
    "name": "NR NR 534 Week 7 Business Plan Final",
    "description": "Interactive practice exam for NR NR 534 Week 7 Business Plan Final",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Business Plan"
    ]
  },
  {
    "code": "nr-nr-603-course-pulmonary-case-presentation-for-week-2",
    "name": "NR NR 603 Course Pulmonary Case Presentation for Week 2",
    "description": "Interactive practice exam for NR NR 603 Course Pulmonary Case Presentation for Week 2",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Course Pulmonary Case Presentation for"
    ]
  },
  {
    "code": "nr-nr224-exam-2-help",
    "name": "NR NR224 EXAM 2 Help",
    "description": "Interactive practice exam for NR NR224 EXAM 2 Help",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Help"
    ]
  },
  {
    "code": "nr-nr224-exam-3-study-guide",
    "name": "NR NR224 Exam 3 Study Guide",
    "description": "Interactive practice exam for NR NR224 Exam 3 Study Guide",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Study Guide"
    ]
  },
  {
    "code": "nr-nr224-final-exam-concept-blueprint",
    "name": "NR NR224 Final Exam Concept Blueprint",
    "description": "Interactive practice exam for NR NR224 Final Exam Concept Blueprint",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Concept Blueprint"
    ]
  },
  {
    "code": "nr-nr224-final-exam-key-concepts",
    "name": "NR NR224 Final Exam Key Concepts",
    "description": "Interactive practice exam for NR NR224 Final Exam Key Concepts",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Key Concepts"
    ]
  },
  {
    "code": "nr-nr224-final-practice-nr",
    "name": "NR NR224 Final Practice NR",
    "description": "Interactive practice exam for NR NR224 Final Practice NR",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR NR"
    ]
  },
  {
    "code": "nr-nr224-final-practice",
    "name": "NR NR224 Final Practice",
    "description": "Interactive practice exam for NR NR224 Final Practice",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr224-simulation-i-sbar-chamberlain-college-of-nursing",
    "name": "NR NR224 Simulation I-SBAR CHAMBERLAIN COLLEGE OF NURSING",
    "description": "Interactive practice exam for NR NR224 Simulation I-SBAR CHAMBERLAIN COLLEGE OF NURSING",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Simulation I SBAR CHAMBERLAIN COLLEGE OF NURSING"
    ]
  },
  {
    "code": "nr-nr224-unit-8-clinical-preparation-worksheet-",
    "name": "NR NR224 Unit 8 Clinical Preparation Worksheet",
    "description": "Interactive practice exam for NR NR224 Unit 8 Clinical Preparation Worksheet",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Unit Clinical Preparation Worksheet"
    ]
  },
  {
    "code": "nr-nr224-unit-8-clinical-preparation-worksheet",
    "name": "NR NR224 Unit 8 Clinical Preparation Worksheet",
    "description": "Interactive practice exam for NR NR224 Unit 8 Clinical Preparation Worksheet",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Unit Clinical Preparation Worksheet"
    ]
  },
  {
    "code": "nr-nr228-discussion-6-initial-assessment-data-for-jordan",
    "name": "NR NR228 Discussion 6 Initial Assessment Data for Jordan",
    "description": "Interactive practice exam for NR NR228 Discussion 6 Initial Assessment Data for Jordan",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Discussion Initial Data for Jordan"
    ]
  },
  {
    "code": "nr-nr228-exam-review-document-exam-3",
    "name": "NR NR228 Exam Review Document Exam 3",
    "description": "Interactive practice exam for NR NR228 Exam Review Document Exam 3",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Review Document"
    ]
  },
  {
    "code": "nr-nr228-informatics-quiz-5-study-guide",
    "name": "NR NR228 Informatics Quiz 5 Study Guide",
    "description": "Interactive practice exam for NR NR228 Informatics Quiz 5 Study Guide",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Informatics Study Guide"
    ]
  },
  {
    "code": "nr-nr228-review-of-knowledge-exam-1",
    "name": "NR NR228 Review of Knowledge Exam 1",
    "description": "Interactive practice exam for NR NR228 Review of Knowledge Exam 1",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Review of Knowledge"
    ]
  },
  {
    "code": "nr-nr283-ati-basic-concept-1-fluids-and-electrolytes",
    "name": "NR NR283 ATI Basic Concept 1 Fluids and Electrolytes",
    "description": "Interactive practice exam for NR NR283 ATI Basic Concept 1 Fluids and Electrolytes",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Basic Concept Fluids and Electrolytes"
    ]
  },
  {
    "code": "nr-nr447-smart-goal-utilizing-informatics",
    "name": "NR NR447 SMART GOAL Utilizing Informatics",
    "description": "Interactive practice exam for NR NR447 SMART GOAL Utilizing Informatics",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR SMART GOAL Utilizing Informatics"
    ]
  },
  {
    "code": "nr-nr452-aa3-information-11-",
    "name": "NR NR452 AA3 Information 11",
    "description": "Interactive practice exam for NR NR452 AA3 Information 11",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR AA3 Information"
    ]
  },
  {
    "code": "nr-nr452-aa3-information-11",
    "name": "NR NR452 AA3 Information 11",
    "description": "Interactive practice exam for NR NR452 AA3 Information 11",
    "totalQuestions": 49,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR AA3 Information"
    ]
  },
  {
    "code": "nr-nr452-funds-remediation",
    "name": "NR NR452 Funds Remediation",
    "description": "Interactive practice exam for NR NR452 Funds Remediation",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Funds Remediation"
    ]
  },
  {
    "code": "nr-nr452-medication-calculation-practice-prepare-for-math-exam",
    "name": "NR NR452 Medication Calculation Practice: Prepare for Math Exam",
    "description": "Interactive practice exam for NR NR452 Medication Calculation Practice: Prepare for Math Exam",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Medication Calculation : Prepare for Math"
    ]
  },
  {
    "code": "nr-nr452-multi-client-simulation-student-instructions",
    "name": "NR NR452 Multi Client Simulation: Student Instructions",
    "description": "Interactive practice exam for NR NR452 Multi Client Simulation: Student Instructions",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Multi Client Simulation: Student Instructions"
    ]
  },
  {
    "code": "nr-nr452-remediation-for-rn-comprehensive-practice-assessment",
    "name": "NR NR452 remediation for rn comprehensive practice assessment",
    "description": "Interactive practice exam for NR NR452 remediation for rn comprehensive practice assessment",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR remediation for rn"
    ]
  },
  {
    "code": "nr-nr452-required-practice-medication-calculation-packet-a",
    "name": "NR NR452 Required Practice Medication Calculation Packet A",
    "description": "Interactive practice exam for NR NR452 Required Practice Medication Calculation Packet A",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Required Medication Calculation Packet A"
    ]
  },
  {
    "code": "nr-nr507-midterm-review-",
    "name": "Free Answer) NR NR507 MIDTERM REVIEW",
    "description": "Interactive practice exam for Free Answer) NR NR507 MIDTERM REVIEW",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer) NR REVIEW"
    ]
  },
  {
    "code": "nr-nr507-midterm-review-nr507-mid-term-study-guide-",
    "name": "Free Answer) NR nr507 midterm review NR507 Mid term study guide",
    "description": "Interactive practice exam for Free Answer) NR nr507 midterm review NR507 Mid term study guide",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer) NR review Mid term study guide"
    ]
  },
  {
    "code": "nr-nr507-week-2-quiz-2-study-guide",
    "name": "NR NR507 Week 2 Quiz 2 Study Guide",
    "description": "Interactive practice exam for NR NR507 Week 2 Quiz 2 Study Guide",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Study Guide"
    ]
  },
  {
    "code": "nr-nr507-week-4-midterm-exam-real-exam",
    "name": "NR NR507 Week 4 Midterm Exam Real Exam",
    "description": "Interactive practice exam for NR NR507 Week 4 Midterm Exam Real Exam",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Real"
    ]
  },
  {
    "code": "nr-nr507-week-4-midterm-exam",
    "name": "NR NR507 Week 4 Midterm Exam",
    "description": "Interactive practice exam for NR NR507 Week 4 Midterm Exam",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr507-week-4-midterm-questions-and-answers",
    "name": "NR NR507 Week 4 Midterm Questions and Answers",
    "description": "Interactive practice exam for NR NR507 Week 4 Midterm Questions and Answers",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR Questions and Answers"
    ]
  },
  {
    "code": "nr-nr507-week-8-final-exam",
    "name": "NR NR507 Week 8 Final Exam",
    "description": "Interactive practice exam for NR NR507 Week 8 Final Exam",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR"
    ]
  },
  {
    "code": "nr-nr507-wk-2-quiz-2-study-guide-2",
    "name": "Free Answer) Nr nr507 wk 2 quiz 2 study guide 2",
    "description": "Interactive practice exam for Free Answer) Nr nr507 wk 2 quiz 2 study guide 2",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer) Nr wk study guide"
    ]
  },
  {
    "code": "nr-nr525-week-1-apa-quiz-solutions",
    "name": "Free Answer) NR NR525 Week 1 APA Quiz Solutions",
    "description": "Interactive practice exam for Free Answer) NR NR525 Week 1 APA Quiz Solutions",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer) NR APA Solutions"
    ]
  },
  {
    "code": "nr103-week-4-ati-test-taking-skills",
    "name": "NR103 Week 4 ATI Test Taking Skills",
    "description": "Interactive practice exam for NR103 Week 4 ATI Test Taking Skills",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Taking Skills"
    ]
  },
  {
    "code": "nr341-content-review-exam-2",
    "name": "NR341 Content Review Exam 2",
    "description": "Interactive practice exam for NR341 Content Review Exam 2",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Content Review"
    ]
  },
  {
    "code": "nr341-exam-2-study-notes-docx",
    "name": "NR341 Exam 2 Study Notes.docx",
    "description": "Interactive practice exam for NR341 Exam 2 Study Notes.docx",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Notes.docx"
    ]
  },
  {
    "code": "nr341-exam-2-study-notesdocx",
    "name": "NR341 Exam 2 Study Notes.docx",
    "description": "Interactive practice exam for NR341 Exam 2 Study Notes.docx",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Notes.docx"
    ]
  },
  {
    "code": "nr449-evidence-based-practice-in-nursing-comprehensive-exam-practice-mcq",
    "name": "NR449 Evidence Based Practice in Nursing Comprehensive Exam Practice MCQ",
    "description": "Interactive practice exam for NR449 Evidence Based Practice in Nursing Comprehensive Exam Practice MCQ",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Evidence Based in Nursing MCQ"
    ]
  },
  {
    "code": "nr452-nursing-care-of-children-post-assessment-questions",
    "name": "NR452 Nursing Care of Children Post Assessment Questions",
    "description": "Interactive practice exam for NR452 Nursing Care of Children Post Assessment Questions",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nursing Care of Children Post Questions"
    ]
  },
  {
    "code": "nr501-week-5-week-5-analysis-and-application-of-a-nursing-theory-docx",
    "name": "NR501 Week 5 Week 5- Analysis and Application of a Nursing Theory.docx",
    "description": "Interactive practice exam for NR501 Week 5 Week 5- Analysis and Application of a Nursing Theory.docx",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Analysis and Application of a Nursing Theory.docx"
    ]
  },
  {
    "code": "nr501-week-5-week-5-analysis-and-application-of-a-nursing-theorydocx",
    "name": "NR501 Week 5 Week 5- Analysis and Application of a Nursing Theory.docx",
    "description": "Interactive practice exam for NR501 Week 5 Week 5- Analysis and Application of a Nursing Theory.docx",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Analysis and Application of a Nursing Theory.docx"
    ]
  },
  {
    "code": "nr501-week5-patient-centered-care-behind-the-theory-pcn",
    "name": "NR501 Week5 Patient Centered Care: Behind the Theory PCN",
    "description": "Interactive practice exam for NR501 Week5 Patient Centered Care: Behind the Theory PCN",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Week5 Patient Centered Care: Behind the Theory PCN"
    ]
  },
  {
    "code": "nr503-midterm-exam-study-guide-chamberlain-college-of-nursing-2",
    "name": "NR503 Midterm Exam Study Guide Chamberlain College of Nursing",
    "description": "Interactive practice exam for NR503 Midterm Exam Study Guide Chamberlain College of Nursing",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide Chamberlain College of Nursing"
    ]
  },
  {
    "code": "nr503-midterm-exam-study-guide-chamberlain-college-of-nursing",
    "name": "NR503 Midterm Exam Study Guide Chamberlain College of Nursing",
    "description": "Interactive practice exam for NR503 Midterm Exam Study Guide Chamberlain College of Nursing",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide Chamberlain College of Nursing"
    ]
  },
  {
    "code": "nr503-relative-risk-calculations-worksheet-guidelines",
    "name": "NR503 Relative Risk Calculations Worksheet Guidelines",
    "description": "Interactive practice exam for NR503 Relative Risk Calculations Worksheet Guidelines",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Relative Risk Calculations Worksheet Guidelines"
    ]
  },
  {
    "code": "nr506-identification-of-healthcare-policy-concern",
    "name": "NR506 Identification of Healthcare Policy Concern",
    "description": "Interactive practice exam for NR506 Identification of Healthcare Policy Concern",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Identification of Healthcare Policy Concern"
    ]
  },
  {
    "code": "nr506np-week-4-assignment-health-policy-analysis-kaltura-presentation",
    "name": "NR506NP Week 4 Assignment Health Policy Analysis Kaltura Presentation",
    "description": "Interactive practice exam for NR506NP Week 4 Assignment Health Policy Analysis Kaltura Presentation",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NR506NP Assignment Health Policy Analysis Kaltura Presentation"
    ]
  },
  {
    "code": "nr507-final-exam-study-guide-2",
    "name": "Free Answer) NR507 Final exam Study Guide 2",
    "description": "Interactive practice exam for Free Answer) NR507 Final exam Study Guide 2",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer) Study Guide"
    ]
  },
  {
    "code": "nr507-week-3-quiz",
    "name": "Free Answer) NR507 Week 3 Quiz",
    "description": "Interactive practice exam for Free Answer) NR507 Week 3 Quiz",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Free Answer)"
    ]
  },
  {
    "code": "nr508-final-questions-chapter-1",
    "name": "NR508 Final Questions Chapter 1",
    "description": "Interactive practice exam for NR508 Final Questions Chapter 1",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Questions Chapter"
    ]
  },
  {
    "code": "nr508-midterm-chapter--docx",
    "name": "NR508 Midterm chapter .docx",
    "description": "Interactive practice exam for NR508 Midterm chapter .docx",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "chapter .docx"
    ]
  },
  {
    "code": "nr508-midterm-chapter-docx",
    "name": "NR508 Midterm chapter .docx",
    "description": "Interactive practice exam for NR508 Midterm chapter .docx",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "chapter .docx"
    ]
  },
  {
    "code": "nr509-advanced-physical-assessment-midterm-exam-review",
    "name": "NR509 Advanced Physical Assessment Midterm Exam Review",
    "description": "Interactive practice exam for NR509 Advanced Physical Assessment Midterm Exam Review",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Advanced Physical Review"
    ]
  },
  {
    "code": "nr511-week-6-quiz-part-2-",
    "name": "NR511 week 6 quiz part 2",
    "description": "Interactive practice exam for NR511 week 6 quiz part 2",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "part"
    ]
  },
  {
    "code": "nr511-week-6-quiz-part-2",
    "name": "NR511 week 6 quiz part 2",
    "description": "Interactive practice exam for NR511 week 6 quiz part 2",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "part"
    ]
  },
  {
    "code": "nr512-discussion-on-electronic-health-records-and-patient-empowerment",
    "name": "NR512 Discussion on Electronic Health Records and Patient Empowerment",
    "description": "Interactive practice exam for NR512 Discussion on Electronic Health Records and Patient Empowerment",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Discussion on Electronic Health Records and Patient Empowerment"
    ]
  },
  {
    "code": "nr512-quiz",
    "name": "NR512 quiz",
    "description": "Interactive practice exam for NR512 quiz",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "nursing care"
    ]
  },
  {
    "code": "nr512-w7-narrated-ppt-presentation-final",
    "name": "NR512 W7 Narrated PPT Presentation Final",
    "description": "Interactive practice exam for NR512 W7 Narrated PPT Presentation Final",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "W7 Narrated PPT Presentation"
    ]
  },
  {
    "code": "nr512-week-1-term-quiz",
    "name": "nr512 week 1 term quiz",
    "description": "Interactive practice exam for nr512 week 1 term quiz",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "term"
    ]
  },
  {
    "code": "nr512-week-2-informatics-key-terms-quiz",
    "name": "NR512 Week 2 Informatics Key Terms Quiz",
    "description": "Interactive practice exam for NR512 Week 2 Informatics Key Terms Quiz",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Informatics Key Terms"
    ]
  },
  {
    "code": "nr512-wk-reflection-fundamentals-of-nursing-informatics",
    "name": "NR512 WK Reflection Fundamentals of Nursing Informatics",
    "description": "Interactive practice exam for NR512 WK Reflection Fundamentals of Nursing Informatics",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "WK Reflection Fundamentals of Nursing Informatics"
    ]
  },
  {
    "code": "nr534-advanced-communication-in-systems-leadership-copy",
    "name": "NR534 Advanced Communication in Systems Leadership copy",
    "description": "Interactive practice exam for NR534 Advanced Communication in Systems Leadership copy",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Advanced Communication in Systems Leadership copy"
    ]
  },
  {
    "code": "nr534-organizational-culture-and-climate-assessment-and-analysis",
    "name": "NR534 Organizational Culture and Climate Assessment and Analysis",
    "description": "Interactive practice exam for NR534 Organizational Culture and Climate Assessment and Analysis",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Organizational Culture and Climate and Analysis"
    ]
  },
  {
    "code": "nr534-week-5-organizational-culture-and-climate",
    "name": "NR534 Week 5 Organizational Culture and Climate",
    "description": "Interactive practice exam for NR534 Week 5 Organizational Culture and Climate",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Organizational Culture and Climate"
    ]
  },
  {
    "code": "nr566-final-study-guide",
    "name": "NR566 Final Study Guide",
    "description": "Interactive practice exam for NR566 Final Study Guide",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "nr568-final-exam-study-guide",
    "name": "NR568 Final Exam Study Guide",
    "description": "Interactive practice exam for NR568 Final Exam Study Guide",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "nr576-final-study-guide-worksheet",
    "name": "NR576 Final Study Guide Worksheet",
    "description": "Interactive practice exam for NR576 Final Study Guide Worksheet",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide Worksheet"
    ]
  },
  {
    "code": "nr599-week-6-medical-application-critical-appraisal-guidelines",
    "name": "NR599 Week 6 Medical Application Critical Appraisal Guidelines",
    "description": "Interactive practice exam for NR599 Week 6 Medical Application Critical Appraisal Guidelines",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Medical Application Critical Appraisal Guidelines"
    ]
  },
  {
    "code": "nr602-pediatric-clinical-case-presentation",
    "name": "NR602 Pediatric Clinical Case Presentation",
    "description": "Interactive practice exam for NR602 Pediatric Clinical Case Presentation",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Pediatric Clinical Case Presentation"
    ]
  },
  {
    "code": "nr602-w1d2-physical-examination",
    "name": "NR602 W1D2 Physical Examination",
    "description": "Interactive practice exam for NR602 W1D2 Physical Examination",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "W1D2 Physical Examination"
    ]
  },
  {
    "code": "nr602-week-3-immunization-case-study",
    "name": "NR602 week 3 Immunization Case Study",
    "description": "Interactive practice exam for NR602 week 3 Immunization Case Study",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Immunization Case Study"
    ]
  },
  {
    "code": "nr621-potential-education-practicum-project-topics-2",
    "name": "NR621 Potential Education Practicum Project Topics",
    "description": "Interactive practice exam for NR621 Potential Education Practicum Project Topics",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Potential Education Practicum Project Topics"
    ]
  },
  {
    "code": "nr621-potential-education-practicum-project-topics",
    "name": "NR621 Potential Education Practicum Project Topics",
    "description": "Interactive practice exam for NR621 Potential Education Practicum Project Topics",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Potential Education Practicum Project Topics"
    ]
  },
  {
    "code": "nr667-week-1-certification-review-plan-",
    "name": "NR667 Week 1 Certification Review Plan",
    "description": "Interactive practice exam for NR667 Week 1 Certification Review Plan",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Certification Review Plan"
    ]
  },
  {
    "code": "nr667-week-1-certification-review-plan",
    "name": "NR667 Week 1 Certification Review Plan",
    "description": "Interactive practice exam for NR667 Week 1 Certification Review Plan",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Certification Review Plan"
    ]
  },
  {
    "code": "nur-6521-quiz-solution",
    "name": "NUR 6521 Quiz Solution",
    "description": "Interactive practice exam for NUR 6521 Quiz Solution",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "NUR Solution"
    ]
  },
  {
    "code": "nursing-care-and-compassion-fatigue",
    "name": "Nursing Care and Compassion Fatigue",
    "description": "Interactive practice exam for Nursing Care and Compassion Fatigue",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nursing Care and Compassion Fatigue"
    ]
  },
  {
    "code": "nutrition-exam-1-study-guide",
    "name": "Nutrition Exam 1 Study Guide",
    "description": "Interactive practice exam for Nutrition Exam 1 Study Guide",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nutrition Study Guide"
    ]
  },
  {
    "code": "nutritional-assessment-rua",
    "name": "Nutritional Assessment RUA",
    "description": "Interactive practice exam for Nutritional Assessment RUA",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Nutritional RUA"
    ]
  },
  {
    "code": "overvthevcounter-medications-for-cold-and-cough-nr-566-assignment",
    "name": "OvervthevCounter Medications for Cold and Cough NR 566 Assignment",
    "description": "Interactive practice exam for OvervthevCounter Medications for Cold and Cough NR 566 Assignment",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "OvervthevCounter Medications for Cold and Cough Assignment"
    ]
  },
  {
    "code": "pedi-remediation-vati-pedi-remediation-nr452",
    "name": "PEDI REMEDIATION VATI PEDI REMEDIATION NR452",
    "description": "Interactive practice exam for PEDI REMEDIATION VATI PEDI REMEDIATION NR452",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "PEDI REMEDIATION PEDI REMEDIATION"
    ]
  },
  {
    "code": "pertinent-history-questions-to-ask-the-patient",
    "name": "Pertinent History Questions to Ask the Patient",
    "description": "Interactive practice exam for Pertinent History Questions to Ask the Patient",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Pertinent History Questions to Ask the Patient"
    ]
  },
  {
    "code": "pham-final-nurs-6521",
    "name": "Pham Final Nurs 6521",
    "description": "Interactive practice exam for Pham Final Nurs 6521",
    "totalQuestions": 32,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Pham Nurs"
    ]
  },
  {
    "code": "practice-medication-calculation-a-student-copy-nr452-",
    "name": "Practice Medication Calculation A Student Copy NR452",
    "description": "Interactive practice exam for Practice Medication Calculation A Student Copy NR452",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Medication Calculation A Student Copy"
    ]
  },
  {
    "code": "practice-medication-calculation-a-student-copy-nr452",
    "name": "Practice Medication Calculation A Student Copy NR452",
    "description": "Interactive practice exam for Practice Medication Calculation A Student Copy NR452",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Medication Calculation A Student Copy"
    ]
  },
  {
    "code": "proctored-exam-help-by-nursingschooltutors",
    "name": "Proctored Exam Help by Nursingschooltutors",
    "description": "Interactive practice exam for Proctored Exam Help by Nursingschooltutors",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Proctored Help by Nursingschooltutors"
    ]
  },
  {
    "code": "quick-reference-guide-clinical-recommendations",
    "name": "Quick Reference Guide Clinical Recommendations",
    "description": "Interactive practice exam for Quick Reference Guide Clinical Recommendations",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Quick Reference Guide Clinical Recommendations"
    ]
  },
  {
    "code": "rua-ethical-dilemma-treating-a-septic-newborn-with-herbal-therapy",
    "name": "RUA Ethical Dilemma Treating a Septic Newborn with Herbal Therapy",
    "description": "Interactive practice exam for RUA Ethical Dilemma Treating a Septic Newborn with Herbal Therapy",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "RUA Ethical Dilemma Treating a Septic Newborn with Herbal Therapy"
    ]
  },
  {
    "code": "sbirt-presentation-alcohol-and-its-impact-nr443",
    "name": "SBIRT Presentation Alcohol and Its Impact NR443",
    "description": "Interactive practice exam for SBIRT Presentation Alcohol and Its Impact NR443",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "SBIRT Presentation Alcohol and Its Impact"
    ]
  },
  {
    "code": "seitz-nr512-wk6-health-it-topic-ppt-presentation",
    "name": "Seitz NR512 Wk6 Health IT Topic PPT Presentation",
    "description": "Interactive practice exam for Seitz NR512 Wk6 Health IT Topic PPT Presentation",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Seitz Wk6 Health IT Topic PPT Presentation"
    ]
  },
  {
    "code": "sensitivity-to-each-patients-goals-values",
    "name": "Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values",
    "description": "Interactive practice exam for Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Humor Health Promotion/ Sensitivity to Each Patient’s Goals + Values"
    ]
  },
  {
    "code": "sh-fam-focused-exam-long-bone-fracture",
    "name": "SH FAM Focused Exam Long Bone Fracture",
    "description": "Interactive practice exam for SH FAM Focused Exam Long Bone Fracture",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "SH FAM Focused Long Bone Fracture"
    ]
  },
  {
    "code": "solution-cna758-foundations-of-child-and-family-health-nursing-assessment-2",
    "name": "Solution) CNA758 Foundations of Child and Family Health Nursing Assessment 2",
    "description": "Interactive practice exam for Solution) CNA758 Foundations of Child and Family Health Nursing Assessment 2",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solution) CNA758 Foundations of Child and Family Health Nursing"
    ]
  },
  {
    "code": "solved-mfa-case-presentation-study-for-week-7-nr602",
    "name": "Solved MFA Case Presentation Study for Week 7 NR602",
    "description": "Interactive practice exam for Solved MFA Case Presentation Study for Week 7 NR602",
    "totalQuestions": 50,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved MFA Case Presentation Study for"
    ]
  },
  {
    "code": "solved-nr-510-week-8-final-exam-questions-and-answers",
    "name": "Solved NR 510 Week 8 Final Exam questions and answers",
    "description": "Interactive practice exam for Solved NR 510 Week 8 Final Exam questions and answers",
    "totalQuestions": 35,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved questions and answers"
    ]
  },
  {
    "code": "solved-nr-566-week-1-quiz",
    "name": "Solved NR 566 WEEK 1 QUIZ",
    "description": "Interactive practice exam for Solved NR 566 WEEK 1 QUIZ",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-nr-602-midterm-exam",
    "name": "Solved NR 602 MIDTERM EXAM",
    "description": "Interactive practice exam for Solved NR 602 MIDTERM EXAM",
    "totalQuestions": 45,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-nr512-week-2-informatics-key-terms-quiz",
    "name": "Solved NR512 Week 2 Informatics Key Terms Quiz",
    "description": "Interactive practice exam for Solved NR512 Week 2 Informatics Key Terms Quiz",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved Informatics Key Terms"
    ]
  },
  {
    "code": "solved-nr602-midterm-exam",
    "name": "Solved NR602 Midterm Exam",
    "description": "Interactive practice exam for Solved NR602 Midterm Exam",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved"
    ]
  },
  {
    "code": "solved-post-tanic-self-assessment-and-reflection",
    "name": "Solved Post TANIC Self Assessment and Reflection",
    "description": "Interactive practice exam for Solved Post TANIC Self Assessment and Reflection",
    "totalQuestions": 47,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Solved Post TANIC Self and Reflection"
    ]
  },
  {
    "code": "summative-performance-evaluation-of-new-hire-rn-nr-537",
    "name": "Summative Performance Evaluation of New Hire RN NR-537",
    "description": "Interactive practice exam for Summative Performance Evaluation of New Hire RN NR-537",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Summative Performance Evaluation of New Hire RN"
    ]
  },
  {
    "code": "the-rise-of-patient-sitters-the-financial-burden-on-organizations-nr-630",
    "name": "The Rise of Patient Sitters The Financial Burden on Organizations NR 630",
    "description": "Interactive practice exam for The Rise of Patient Sitters The Financial Burden on Organizations NR 630",
    "totalQuestions": 43,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "The Rise of Patient Sitters The Financial Burden on Organizations"
    ]
  },
  {
    "code": "tina-jones-neurological-shadow-health-assessment-lifespan-review-questions",
    "name": "Tina Jones Neurological Shadow Health Assessment Lifespan Review Questions",
    "description": "Interactive practice exam for Tina Jones Neurological Shadow Health Assessment Lifespan Review Questions",
    "totalQuestions": 48,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Tina Jones Neurological Shadow Health Lifespan Review Questions"
    ]
  },
  {
    "code": "tradition-vs-change-test-bank",
    "name": "Tradition vs. Change Test Bank",
    "description": "Interactive practice exam for Tradition vs. Change Test Bank",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Tradition vs. Change Bank"
    ]
  },
  {
    "code": "tradition-vs--change-test-bank",
    "name": "Tradition vs. Change Test Bank",
    "description": "Interactive practice exam for Tradition vs. Change Test Bank",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Tradition vs. Change Bank"
    ]
  },
  {
    "code": "vati-mental-health-remediation-nr452",
    "name": "VATI Mental Health Remediation NR452",
    "description": "Interactive practice exam for VATI Mental Health Remediation NR452",
    "totalQuestions": 39,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Mental Health Remediation"
    ]
  },
  {
    "code": "week-1-ceritfication-review-nr667",
    "name": "Week 1 ceritfication review nr667",
    "description": "Interactive practice exam for Week 1 ceritfication review nr667",
    "totalQuestions": 34,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "ceritfication review"
    ]
  },
  {
    "code": "week-1-certification-review-plan-nr-603",
    "name": "Week 1 Certification Review Plan NR 603",
    "description": "Interactive practice exam for Week 1 Certification Review Plan NR 603",
    "totalQuestions": 44,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Certification Review Plan"
    ]
  },
  {
    "code": "week-1-initial-self-assessment-of-professional-competencies-nr-630-",
    "name": "Week 1 Initial Self-Assessment of Professional Competencies NR 630",
    "description": "Interactive practice exam for Week 1 Initial Self-Assessment of Professional Competencies NR 630",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Initial Self of Professional Competencies"
    ]
  },
  {
    "code": "week-1-quiz-questions-and-answers-100-correct",
    "name": "WEEK 1 - QUIZ Questions and Answers 100% correct",
    "description": "Interactive practice exam for WEEK 1 - QUIZ Questions and Answers 100% correct",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Questions and Answers % correct"
    ]
  },
  {
    "code": "week-2-assignment-direct-care-project-part-1-assessment-and-diagnosis-nr443",
    "name": "Week 2 Assignment Direct Care Project Part 1 Assessment and Diagnosis NR443",
    "description": "Interactive practice exam for Week 2 Assignment Direct Care Project Part 1 Assessment and Diagnosis NR443",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Assignment Direct Care Project Part and Diagnosis"
    ]
  },
  {
    "code": "week-2-bsn-level-4-direct-patient-care-documentation-nr-224",
    "name": "Week 2 BSN Level 4 Direct Patient Care Documentation NR 224",
    "description": "Interactive practice exam for Week 2 BSN Level 4 Direct Patient Care Documentation NR 224",
    "totalQuestions": 46,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "BSN Level Direct Patient Care Documentation"
    ]
  },
  {
    "code": "week-2-case-presentation-summary-chamberlain-university-nr603",
    "name": "Week 2 Case Presentation Summary Chamberlain University NR603",
    "description": "Interactive practice exam for Week 2 Case Presentation Summary Chamberlain University NR603",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Case Presentation Summary Chamberlain University"
    ]
  },
  {
    "code": "week-3-3-ceap-assessment-chamberlain-college-of-nursing",
    "name": "NR 103 Week 3 CEAP Assessment Chamberlain College of Nursing",
    "description": "Interactive practice exam for NR 103 Week 3 CEAP Assessment Chamberlain College of Nursing",
    "totalQuestions": 31,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "CEAP Chamberlain College of Nursing"
    ]
  },
  {
    "code": "week-3-qualitative-study-nr505",
    "name": "Week 3 - Qualitative Study NR505",
    "description": "Interactive practice exam for Week 3 - Qualitative Study NR505",
    "totalQuestions": 36,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Qualitative Study"
    ]
  },
  {
    "code": "week-3-social-media-discussion-with-responses-population-health-problems",
    "name": "Week 3 Social Media Discussion with Responses Population Health Problems",
    "description": "Interactive practice exam for Week 3 Social Media Discussion with Responses Population Health Problems",
    "totalQuestions": 41,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Social Media Discussion with Responses Population Health Problems"
    ]
  },
  {
    "code": "week-4-assignment-check-in-direct-care-project-part-2-planning-the-presentation-nr-443",
    "name": "Week 4 Assignment Check-In Direct Care Project Part 2 Planning the Presentation NR 443",
    "description": "Interactive practice exam for Week 4 Assignment Check-In Direct Care Project Part 2 Planning the Presentation NR 443",
    "totalQuestions": 33,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Assignment Check In Direct Care Project Part Planning the Presentation"
    ]
  },
  {
    "code": "week-4-nr599-midterm-study-guide",
    "name": "Week 4 NR599 Midterm Study Guide",
    "description": "Interactive practice exam for Week 4 NR599 Midterm Study Guide",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Study Guide"
    ]
  },
  {
    "code": "week-5-ethical-and-legal-implications-nr506",
    "name": "Week 5 Ethical and Legal Implications NR506",
    "description": "Interactive practice exam for Week 5 Ethical and Legal Implications NR506",
    "totalQuestions": 40,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Ethical and Legal Implications"
    ]
  },
  {
    "code": "week-5-patient-nr-603-chamberlain-college",
    "name": "WEEK 5 Patient NR 603 Chamberlain College",
    "description": "Interactive practice exam for WEEK 5 Patient NR 603 Chamberlain College",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Patient Chamberlain College"
    ]
  },
  {
    "code": "week-6-check-in-direct-care-project-part-3-presentation-delivery",
    "name": "Week 6 Check-In Direct Care Project Part 3 Presentation Delivery",
    "description": "Interactive practice exam for Week 6 Check-In Direct Care Project Part 3 Presentation Delivery",
    "totalQuestions": 42,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Check In Direct Care Project Part Presentation Delivery"
    ]
  },
  {
    "code": "week-6-scope-of-practice-and-patients-healthcare-accessibility-nr506",
    "name": "Week 6 Scope of Practice and Patient's Healthcare Accessibility NR506",
    "description": "Interactive practice exam for Week 6 Scope of Practice and Patient's Healthcare Accessibility NR506",
    "totalQuestions": 30,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "Scope of and Patient's Healthcare Accessibility"
    ]
  },
  {
    "code": "week-7-quiz-dementia-elder-abuse-delirium-nr601",
    "name": "WEEK 7 QUIZ DEMENTIA ELDER ABUSE DELIRIUM NR601",
    "description": "Interactive practice exam for WEEK 7 QUIZ DEMENTIA ELDER ABUSE DELIRIUM NR601",
    "totalQuestions": 37,
    "passingScore": 75,
    "difficulty": "Medium",
    "topics": [
      "DEMENTIA ELDER ABUSE DELIRIUM"
    ]
  }
];

export default function QuizzesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f7fa', paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: 700 }}>
            📚 Interactive Nursing Quizzes
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.95, marginBottom: '10px' }}>
            Practice with realistic exam-style questions to master your nursing courses
          </p>
          <p style={{ fontSize: '1rem', opacity: 0.85 }}>
            Immediate feedback • Detailed explanations • Score tracking • Unlimited retakes
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          How Our Quizzes Work
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {[
            {
              icon: '📝',
              title: 'Multiple Choice Questions',
              desc: 'Answer carefully crafted questions designed to test your understanding'
            },
            {
              icon: '⚡',
              title: 'Instant Feedback',
              desc: 'Get immediate results showing right/wrong answers with explanations'
            },
            {
              icon: '📊',
              title: 'Performance Tracking',
              desc: 'See your score, percentage, and areas needing improvement'
            },
            {
              icon: '🔄',
              title: 'Unlimited Retakes',
              desc: 'Practice as many times as you want to master the material'
            }
          ].map((feature, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{feature.icon}</div>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>{feature.title}</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Quizzes */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          Available Quizzes
        </h2>
        <div style={{
          display: 'grid',
          gap: '25px'
        }}>
          {AVAILABLE_QUIZZES.map((quiz) => (
            <div key={quiz.code} style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              alignItems: 'center',
              gap: '30px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              {/* Left - Course Code */}
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '40px 30px',
                textAlign: 'center',
                minWidth: '150px'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 700 }}>{quiz.code}</div>
              </div>

              {/* Middle - Content */}
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '10px' }}>
                  {quiz.name}
                </h3>
                <p style={{ color: '#666', marginBottom: '15px', lineHeight: 1.6 }}>
                  {quiz.description}
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Total Questions</span>
                    <div style={{ color: '#667eea', fontWeight: 600 }}>{quiz.totalQuestions}</div>
                  </div>
                  <div>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Passing Score</span>
                    <div style={{ color: '#667eea', fontWeight: 600 }}>{quiz.passingScore}%</div>
                  </div>
                  <div>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Difficulty</span>
                    <div style={{ color: '#667eea', fontWeight: 600 }}>{quiz.difficulty}</div>
                  </div>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <span style={{ color: '#999', fontSize: '0.9rem' }}>Topics Covered:</span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {quiz.topics.map((topic) => (
                      <span key={topic} style={{
                        background: '#f0f4ff',
                        color: '#667eea',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.85rem',
                        fontWeight: 500
                      }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - CTA Button */}
              <div>
                <Link href={`/quiz/${quiz.code}`}>
                  <button style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    Start Quiz →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          Quiz Tips for Success
        </h2>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'Read each question carefully and consider all options before answering',
              'After answering, review the explanation to understand the rationale',
              'Retake quizzes to reinforce learning and improve your score',
              'Note topics where you scored lower and study them more deeply',
              'Use quizzes as a study tool to supplement course materials and textbooks',
              'Take quizzes in a quiet environment to minimize distractions',
              'Aim to understand WHY answers are correct, not just memorize'
            ].map((tip, idx) => (
              <li key={idx} style={{
                padding: '15px 0',
                borderBottom: idx < 6 ? '1px solid #eee' : 'none',
                display: 'flex',
                gap: '15px',
                alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '1.5rem' }}>✓</span>
                <span style={{ color: '#555', lineHeight: 1.6 }}>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to Master Your Course?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.95 }}>
          Choose a quiz above and start practicing now. Unlimited access with instant feedback!
        </p>
        <Link href="/blog">
          <button style={{
            background: 'white',
            color: '#667eea',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginRight: '15px'
          }}>
            ← Back to Blog
          </button>
        </Link>
      </section>
    </main>
  );
}
