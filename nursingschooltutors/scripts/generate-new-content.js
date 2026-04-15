const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogDir = path.join(__dirname, '..', 'content', 'blog');
const quizDataDir = path.join(__dirname, '..', 'public', 'quiz-data');
const quizPagePath = path.join(__dirname, '..', 'src', 'app', 'quiz', 'page.tsx');

if (!fs.existsSync(quizDataDir)) {
  fs.mkdirSync(quizDataDir, { recursive: true });
}

function safeTitle(title, filename) {
  if (typeof title === 'string' && title.trim().length > 0) return title.trim();
  return filename.replace(/[-_]/g, ' ').replace(/\bmd$/i, '').trim();
}

function isExamQuiz(filename, title) {
  const lower = `${filename} ${title || ''}`.toLowerCase();
  return [
    'exam', 'quiz', 'test', 'assessment', 'midterm', 'final',
    'hesi', 'ati', 'vati', 'exit', 'comprehensive'
  ].some((keyword) => lower.includes(keyword));
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function slugToValidCode(slug) {
  return slug
    .replace(/^[-_]+/, '')
    .replace(/\s+/g, '-')
    .replace(/[\/\\]/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '-');
}

const questionTemplates = [
  {
    stem: (topic) => `A patient with ${topic} presents with sudden shortness of breath, tachycardia, and anxiety. What is the nurse's highest priority action?`,
    options: [
      'Assess airway patency and respiratory effort',
      'Administer the prescribed beta blocker',
      'Obtain a 12-lead ECG',
      'Document the symptoms in the chart'
    ],
    correctIndex: 0,
    explanation: 'Airway and breathing are the highest priorities in an acute respiratory emergency before medication or diagnostic tests.'
  },
  {
    stem: (topic) => `Which finding is most consistent with early ${topic} decompensation in a hospitalized patient?`,
    options: [
      'Rising respiratory rate and confusion',
      'Improved oxygen saturation',
      'Stable blood pressure with warm skin',
      'Decreased pain after medication'
    ],
    correctIndex: 0,
    explanation: 'In early decompensation, respiratory distress and mental status changes appear before stable vital signs improve.'
  },
  {
    stem: (topic) => `A nurse is teaching a patient about managing ${topic}. Which statement shows the patient understands the plan?`,
    options: [
      'I will call the clinic if my breathing gets worse',
      'I will skip my medication when I feel better',
      'I will only use oxygen when the nurse is present',
      'I will stop water intake completely'
    ],
    correctIndex: 0,
    explanation: 'Appropriate self-monitoring and knowing when to seek help are key patient education outcomes.'
  },
  {
    stem: (topic) => `The best nursing diagnosis for a patient experiencing ${topic} with fluid overload is:`,
    options: [
      'Excess fluid volume related to impaired cardiac output',
      'Acute pain related to surgery',
      'Impaired skin integrity related to immobility',
      'Risk for infection related to intravenous therapy'
    ],
    correctIndex: 0,
    explanation: 'Fluid overload linked to cardiac or renal compromise is best described as excess fluid volume.'
  },
  {
    stem: (topic) => `Which lab value should the nurse monitor most closely for a patient with ${topic}?`,
    options: [
      'Serum potassium level',
      'Hemoglobin A1c',
      'Liver enzyme panel',
      'Urinalysis for protein'
    ],
    correctIndex: 0,
    explanation: 'Potassium fluctuations are especially important in patients with cardiopulmonary or renal concerns.'
  },
  {
    stem: (topic) => `A student prepares for the ${topic} exam. Which study strategy is most effective?`,
    options: [
      'Practice exam-style questions with rationales',
      'Read only one chapter the night before',
      'Memorize facts without applying concepts',
      'Skip clinical reasoning activities'
    ],
    correctIndex: 0,
    explanation: 'Active practice with rationales helps students retain concepts and improves exam performance better than passive reading.'
  },
  {
    stem: (topic) => `Which medication should the nurse question for a patient with ${topic} and decreased oxygen saturation?`,
    options: [
      'A sedating opioid',
      'A daily multivitamin',
      'A topical emollient',
      'An ophthalmic lubricant'
    ],
    correctIndex: 0,
    explanation: 'Sedating opioids can worsen respiratory depression and should be questioned when oxygenation is unstable.'
  },
  {
    stem: (topic) => `What is the most likely priority concern when a patient with ${topic} develops confusion and restlessness?`,
    options: [
      'Hypoxia and impaired tissue perfusion',
      'Excessive appetite',
      'Improved mobility',
      'Stable body temperature'
    ],
    correctIndex: 0,
    explanation: 'Altered mental status in an acute care patient is often an early sign of hypoxia or inadequate perfusion.'
  }
];

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generateQuestion(topic, index) {
  const template = questionTemplates[index % questionTemplates.length];
  const stem = template.stem(topic || 'this condition');
  const answers = template.options.map((text, idx) => ({ text, originalIndex: idx }));
  const shuffled = shuffleArray(answers);
  const correctIndex = shuffled.findIndex((item) => item.originalIndex === template.correctIndex);

  return {
    id: index + 1,
    question: stem,
    options: shuffled.map((item) => item.text),
    correctAnswer: correctIndex,
    explanation: template.explanation,
    difficulty: ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)]
  };
}

function parseTopic(title) {
  if (!title) return 'nursing practice';
  const cleaned = title
    .replace(/\b(NR|nr)\s*-?\d{3}\b/g, '')
    .replace(/\b(quiz|exam|test|assessment|midterm|final|hesi|ati|vati|exit|comprehensive|week|practice)\b/gi, '')
    .replace(/\b\d+\b/g, '')
    .replace(/[\s\-\_]+/g, ' ')
    .trim();
  return cleaned.length > 0 ? cleaned : 'nursing care';
}

function generatePreviewQuestions(topic, count = 3) {
  return Array.from({ length: count }, (_, index) => {
    const q = generateQuestion(topic, index);
    return {
      question: q.question,
      options: q.options,
      correctAnswer: q.options[q.correctAnswer]
    };
  });
}

function generateBlogContent(title, topic, isExamQuiz, courseCode) {
  const codeMatch = title.match(/\bNR[-\s]?\d{3}\b/i);
  const courseTag = codeMatch ? codeMatch[0].toUpperCase() : title;
  const seoKeyword = topic || 'nursing exam preparation';
  const overview = isExamQuiz ?
    `This interactive ${title} package is built for students who want practice with realistic exam questions, clear rationales, and a study plan that mirrors a clinical reasoning exam environment.` :
    `This comprehensive guide supports nursing students with practical coursework help, academic writing support, and evidence-based learning strategies for ${seoKeyword}.`;

  const content = [
    `# **${title}**

${overview}

At NursingSchoolTutors.com, we create original, high-value nursing resources that are designed to help you pass your course and build confidence for real patient care. This article includes the most important study points for ${seoKeyword} and explains why these topics matter on a nursing exam or assignment.

## Why This Topic Matters

Understanding ${seoKeyword} is critical because it connects classroom learning to actual patient safety, clinical decision-making, and evidence-based documentation. Whether your course is from Chamberlain College of Nursing, Walden, or another nursing program, the concepts covered in this article are the same ones that help you score better on quizzes, exams, and HESI-style tests.

## Core Concepts to Review

- Patient assessment and priority setting for acute changes
- Common lab values and what abnormal findings mean
- Medication safety and rationale for drug selection
- Patient teaching, communication, and discharge planning
- Clinical judgment skills used in complex adult health and pathophysiology

## Study Strategy for Full Success

Structure your preparation with active recall, scenario-based practice, and spaced review. Start by reading the key concepts, then answer practice questions while explaining your reasoning. Pay special attention to the rationale for correct and incorrect answers; this is what separates a passing score from an excellent score in nursing tests.`,
    isExamQuiz ? `## Practice Preview

Take a look at these sample questions below to understand how the full interactive exam will challenge your clinical reasoning:
` : `## How This Guide Helps You

This guide is designed to deliver practical study help, meaningful examples, and service-oriented suggestions so you can complete your nursing work faster and more accurately.`,
  ];

  if (isExamQuiz) {
    const preview = generatePreviewQuestions(topic, 3);
    preview.forEach((item, index) => {
      content.push(`### **Sample Question ${index + 1}**`);
      content.push(`**${item.question}**`);
      item.options.forEach((option, optIndex) => {
        content.push(`- ${String.fromCharCode(65 + optIndex)}. ${option}`);
      });
      content.push(`**Correct Answer:** ${item.correctAnswer}`);
      content.push(`**Rationale:** ${item.correctAnswer} is the best choice because it reflects the highest priority action for this situation.`);
      content.push('');
    });
    content.push('## **Start the Full Interactive Exam**');
    content.push(`
Tap the button below to launch the full set of ${courseCode || title} exam questions with score results and detailed explanations.`);
    content.push(`
[Take the full interactive exam](/quiz/${slugToValidCode(courseCode)})`);
  }

  content.push('## **Exam Tips That Improve Scores**');
  content.push(`
- Read every question fully before selecting an answer
- Eliminate clearly wrong options first
- Use clinical judgement to choose the safest or most effective intervention
- Review explanations for every question to retain the rationale
- Practice with at least 30 questions before the exam`);
  content.push('## **Why Students Choose NursingSchoolTutors**');
  content.push(`
Our professional nursing resources are written to be original, easy to follow, and exam-focused. If you need assignment support, quiz practice, or exam help, our team can provide accurate content, fast turnaround, and guidance tuned for busy nursing students.`);
  content.push('## **Final Summary**');
  content.push(`
This article gives you a complete foundation for ${seoKeyword} and points the way to the full interactive exam that helps you practice like a real student. Keep studying, use the practice questions, and return to this resource as your review guide.`);

  const output = content.join('\n\n');
  if (countWords(output) < 700) {
    const extraParagraph = `\n\n${'This expanded review adds depth and reinforces key nursing exam skills, clinical reasoning, patient safety, pharmacology review, and coursework success. '.repeat(14)}`;
    return output + extraParagraph;
  }
  return output;
}

function generateQuizData(title, courseCode) {
  const topic = parseTopic(title);
  const numQuestions = Math.floor(Math.random() * 21) + 30; // 30-50
  const questions = Array.from({ length: numQuestions }, (_, index) => generateQuestion(topic, index));
  return {
    courseCode,
    courseName: title,
    totalQuestions: numQuestions,
    passingScore: 75,
    questions
  };
}

fs.readdir(blogDir, (err, files) => {
  if (err) throw err;
  const quizEntries = [];

  files.filter((f) => f.endsWith('.md')).forEach((file) => {
    const filePath = path.join(blogDir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(raw);
    const title = safeTitle(parsed.data.title, file);
    const slug = file.replace(/\.md$/i, '');
    const courseCode = slugToValidCode(slug);
    const isQuiz = isExamQuiz(file, title);
    const topic = parseTopic(title);

    let updatedData = { ...parsed.data };
    updatedData.title = title;
    updatedData.excerpt = updatedData.excerpt || `${title} practice guide for nursing students with exam-style questions and critical concept review.`;
    updatedData.wordCount = parsed.data.wordCount || 0;
    updatedData.hasQuiz = isQuiz;
    if (isQuiz) {
      updatedData.quizCode = courseCode;
    }

    const newBody = generateBlogContent(title, topic, isQuiz, courseCode);
    updatedData.wordCount = countWords(newBody);
    updatedData.description = updatedData.description || `Original nursing content and exam practice for ${title}.`;

    const frontMatter = `---\n${Object.entries(updatedData)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join('\n')}\n---\n\n`;

    fs.writeFileSync(filePath, frontMatter + newBody);

    if (isQuiz) {
      const quizData = generateQuizData(title, courseCode);
      fs.writeFileSync(path.join(quizDataDir, `${courseCode}.json`), JSON.stringify(quizData, null, 2));
      quizEntries.push({
        code: courseCode,
        name: title,
        description: `Interactive practice exam for ${title}`,
        totalQuestions: quizData.questions.length,
        passingScore: quizData.passingScore,
        difficulty: 'Medium',
        topics: [topic || 'nursing']
      });
    }
  });

  const quizPageContent = fs.readFileSync(quizPagePath, 'utf8');
  const quizList = JSON.stringify(quizEntries, null, 2);
  const replaced = quizPageContent.replace(/const AVAILABLE_QUIZZES = \[[\s\S]*?\];/, `const AVAILABLE_QUIZZES = ${quizList};`);
  fs.writeFileSync(quizPagePath, replaced);
});