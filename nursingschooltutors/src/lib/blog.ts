import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')
const POSTS_PER_PAGE = 6

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content?: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return getSamplePosts()
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug: file.replace('.md', ''),
      title: data.title || 'Untitled',
      excerpt: data.excerpt || content.slice(0, 180).replace(/[#*]/g, '').trim() + '...',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      tags: data.tags || [],
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPaginatedPosts(page: number) {
  const all = getAllPosts()
  const total = all.length
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE))
  const start = (page - 1) * POSTS_PER_PAGE
  return { posts: all.slice(start, start + POSTS_PER_PAGE), total, totalPages, page }
}

export function getPost(slug: string): Post | null {
  const file = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    date: data.date ? new Date(data.date).toISOString() : '',
    tags: data.tags || [],
    content,
  }
}

function getSamplePosts(): Post[] {
  return [
    { slug: 'how-to-pass-ati-teas-exam', title: 'How to Pass the ATI TEAS Exam in 2025 — Complete Study Guide', excerpt: 'The ATI TEAS exam is a major hurdle for nursing school applicants. Learn the exact strategies our experts use to help students score 85%+ consistently.', date: '2025-03-15', tags: ['ATI TEAS', 'Nursing Exams', 'Study Tips'] },
    { slug: 'nr-507-advanced-pathophysiology-tips', title: 'NR 507 Advanced Pathophysiology at Chamberlain — How to Get an A', excerpt: 'NR-507 is one of the hardest MSN courses at Chamberlain. Discover the study strategies and expert resources that help students ace every module.', date: '2025-03-10', tags: ['NR 507', 'Chamberlain', 'Pathophysiology'] },
    { slug: 'hesi-a2-exam-guide', title: 'HESI A2 Exam Prep — Everything You Need to Know', excerpt: 'Your complete HESI A2 preparation guide covering all 8 sections, scoring benchmarks, and the fastest way to prepare in under 2 weeks.', date: '2025-03-05', tags: ['HESI', 'Nursing Exams', 'Exam Prep'] },
    { slug: 'pay-someone-to-do-my-nursing-class', title: 'Is It Safe to Pay Someone to Do My Nursing Online Class?', excerpt: 'Thousands of nursing students use academic help services every semester. Learn how to choose a reputable service and what guarantees to look for.', date: '2025-02-28', tags: ['Online Class Help', 'Nursing', 'Academic Help'] },
    { slug: 'picot-question-nursing', title: 'How to Write a Perfect PICOT Question for Nursing Research', excerpt: 'PICOT questions form the foundation of evidence-based nursing practice. This guide walks through every component with real nursing examples.', date: '2025-02-20', tags: ['PICOT', 'Nursing Research', 'Writing Help'] },
    { slug: 'dnp-capstone-project-ideas', title: '20 DNP Capstone Project Ideas for Nursing Students in 2025', excerpt: 'Choosing your DNP capstone topic is one of the most important decisions in your doctoral journey. Here are 20 high-impact, faculty-approved ideas.', date: '2025-02-15', tags: ['DNP', 'Capstone', 'Nursing Writing'] },
  ]
}
