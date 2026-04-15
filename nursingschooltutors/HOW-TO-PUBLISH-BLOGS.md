# How to Publish Blogs to NursingSchoolTutors.com
## Complete Step-by-Step Guide

---

## What You Now Have

The v5 ZIP contains:

1. **`content/blog/*.md`** — 719 blog post files, each with real assignment-style content
2. **`src/components/ui/QuizEngine.tsx`** — Interactive quiz component (Quizlet-style)
3. **`src/data/quizzes/nr507-quizzes.ts`** — 30 NR507 quiz questions with answers + rationale
4. **Blog posts already written as real student assignments for:**
   - NR 103 RUA Paper 1 (Determinants of Health)
   - NR 630 Week 6 Breakeven Analysis (with full calculations)
   - NR 507 Week 1 Case Study Allergic Rhinitis (with full pathophysiology)
   - NR 507 Week 2 Cardiovascular Disorders Assignment
   - All quiz posts: interactive 30-question Quizlet-style quiz engine

---

## STEP 1 — Download and Extract the ZIP

1. Download `nursingschooltutors-nextjs-v5.zip`
2. Extract it to a folder on your computer
3. Open the folder in VS Code or any text editor

---

## STEP 2 — Push to GitHub

Open a terminal/command prompt inside the extracted folder and run:

```bash
git init
git add .
git commit -m "Add real assignment solutions and quiz engine"
git remote add origin https://github.com/tutorasap6/nursingschooltutors-nextjs.git
git push -u origin main --force
```

> If you already have a remote set up, just run:
> `git add . && git commit -m "Update blog content" && git push`

---

## STEP 3 — Netlify Will Auto-Deploy

After you push to GitHub, Netlify automatically starts a new build.
Watch the deploy log — it should succeed in 3-5 minutes.

---

## STEP 4 — How to Add More Real Content to Any Blog Post

Each blog post is a Markdown file in `content/blog/[slug].md`

To add/edit content:

1. Open `content/blog/week-6-assignment-breakeven-analysis-nr-630-.md`
2. Edit the content below the `---` frontmatter
3. Save, commit, and push — Netlify auto-deploys

**Content Format (copy this template):**

```markdown
---
title: "Your Post Title"
description: "SEO description"
date: "2025-03-01"
tags: ["NR-630", "Chamberlain College of Nursing"]
---

# Assignment Title

**Student Name:** Jane Smith
**Course:** NR 630 Executive Practicum
**Institution:** Chamberlain College of Nursing

## Introduction
[Real assignment content here...]

## References
- Author, A. (Year). *Title.* Publisher.
```

---

## STEP 5 — How the Quiz Posts Work

For posts with "Quiz" in the title, the blog post page automatically loads
the `QuizEngine` component, giving students:

- ✅ Timed exam environment (30 minutes)
- ✅ Question navigator grid
- ✅ Flag questions for review
- ✅ Instant score on submission
- ✅ Full answer key with rationale
- ✅ Filter wrong/flagged/unanswered questions

**To add quiz questions for a new course:**

1. Create `src/data/quizzes/nr601-quizzes.ts` (copy the NR507 format)
2. Add 30+ questions with answers A/B/C/D and rationale
3. In the blog post component, import and display your quiz

---

## STEP 6 — Content Priority List

Add real student-solution content to these high-traffic posts FIRST:

| Priority | Title | Slug |
|---|---|---|
| 1 | NR 507 Week 4 Midterm Exam | nr-nr507-week-4-midterm-exam |
| 2 | NR 507 Week 8 Final Exam | nr-nr507-week-8-final-exam |
| 3 | HESI Exit Exam 2024 | 2019-hesi-exit-v2- |
| 4 | NR 601 Final Exam Study Guide | final-exam-study-guide-nr601- |
| 5 | NR 341 Final Exam 100% Answers | nr-341-final-exam-with-100-correct-answers |

---

## STEP 7 — SEO Tips for Google Indexing

1. **Submit to Google Search Console:**
   - Go to search.google.com/search-console
   - Add your property: nursingschooltutors.com
   - Submit sitemap: nursingschooltutors.com/sitemap.xml

2. **Internal Links:** Each blog post already links to your services pages

3. **Content Quality:** Google rewards content that answers the question completely
   — your real assignment solutions do this better than any AI content

4. **Page Speed:** Netlify handles CDN and compression automatically

---

## Contact for Technical Help

📱 WhatsApp: +1 (765) 470-9090
📧 Email: instanthelp24hr@gmail.com
