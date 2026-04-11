import type { Metadata } from 'next'
import Link from 'next/link'
import { takeMeSubpages } from '@/data/navigation'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return takeMeSubpages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = takeMeSubpages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: `Take My Class For Me — ${page.label} | NursingSchoolTutors`,
    description: `Take My Class For Me for ${page.label}. Our certified nursing experts handle all coursework — discussions, assignments, exams. A or B guaranteed. 100% confidential.`,
  }
}

export default function TakeMeSubPage({ params }: { params: { slug: string } }) {
  const page = takeMeSubpages.find(p => p.slug === params.slug)
  if (!page) notFound()
  const related = takeMeSubpages.filter(p => p.slug !== params.slug).slice(0, 8)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services/take-my-class-for-me">Take My Class For Me</Link> › {page.label}
          </nav>
          <h1>Take My Class For Me — {page.label}</h1>
          <p>Our certified nursing expert takes over your entire {page.label} course. A or B guaranteed, 100% confidential.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0'}}>
        <div className="container" style={{maxWidth:'900px'}}>
          <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'40px',marginBottom:'40px'}}>
            <h2 style={{fontFamily:'var(--font-heading)',fontSize:'26px',color:'var(--jungle-dark)',marginBottom:'16px'}}>
              Take My Class For Me — {page.label}
            </h2>
            <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              Struggling to keep up with <strong>{page.label}</strong>? Our certified nursing academic experts take full ownership of your course so you can focus on clinical work, family, or other priorities.
            </p>
            <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              When you hire us to take your <strong>{page.label}</strong> class, we assign a tutor who has specific experience with this exact course. They will complete every discussion board post, written assignment, quiz, and proctored exam — all original, AI-free content submitted before every deadline.
            </p>
            <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'24px'}}>
              Our <strong>Grade Guarantee</strong> means you receive an A or minimum B. If we fall short, you get a full refund — no questions asked.
            </p>
            <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
              <span className="badge badge-green">✅ A or B Guaranteed</span>
              <span className="badge badge-green">🔒 100% Confidential</span>
              <span className="badge badge-gold">🧬 AI-Free Work</span>
              <span className="badge badge-gold">⏰ 24/7 Expert Support</span>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',marginBottom:'40px'}}>
            {[
              {icon:'📋',title:'All Assignments',desc:'Every written assignment completed on time with proper APA formatting and original content.'},
              {icon:'💬',title:'Discussion Posts',desc:'Thoughtful, cited discussion posts and peer responses that reflect nursing expertise.'},
              {icon:'📝',title:'Quizzes & Exams',desc:'All online quizzes and non-proctored exams handled by your dedicated expert.'},
              {icon:'📄',title:'Papers & Projects',desc:'Research papers, care plans, capstone projects — all original, AI-free, and plagiarism-checked.'},
            ].map(item => (
              <div key={item.title} style={{background:'var(--jungle-xlight)',borderRadius:'var(--radius)',padding:'22px',border:'1px solid rgba(0,148,143,0.15)'}}>
                <div style={{fontSize:'24px',marginBottom:'8px'}}>{item.icon}</div>
                <h3 style={{fontFamily:'var(--font-heading)',fontSize:'16px',color:'var(--jungle-dark)',marginBottom:'6px'}}>{item.title}</h3>
                <p style={{fontSize:'13px',color:'var(--text-light)',lineHeight:'1.6'}}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="related-box">
            <h3>Other Courses We Take For You</h3>
            <div className="related-links">
              {related.map(p => (
                <Link key={p.slug} href={`/services/take-my-class-for-me/${p.slug}`}>{p.label}</Link>
              ))}
              <Link href="/services/take-my-class-for-me">View All Courses →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Hand Off Your {page.label} Course?</h2>
          <p>Get matched with a certified expert in 30 minutes. Start today, stress-free.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
