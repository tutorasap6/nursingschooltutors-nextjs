import type { Metadata } from 'next'
import Link from 'next/link'
import { examSubpages } from '@/data/navigation'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return examSubpages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = examSubpages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: `Online Proctored Exam Help for ${page.label} | NursingSchoolTutors`,
    description: `Online Proctored Exam Help for ${page.label}. Expert tutors guarantee an A or minimum B. Confidential, AI-free, 24/7 support. Get a free quote today.`,
  }
}

export default function ExamSubPage({ params }: { params: { slug: string } }) {
  const page = examSubpages.find(p => p.slug === params.slug)
  if (!page) notFound()

  const related = examSubpages.filter(p => p.slug !== params.slug).slice(0, 8)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services/online-proctored-exam-help">Proctored Exam Help</Link> › {page.label}
          </nav>
          <h1>Online Proctored Exam Help for {page.label}</h1>
          <p>Certified nursing experts help you pass your {page.label} exam with an A or minimum B — guaranteed.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 Get Help Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0'}}>
        <div className="container" style={{maxWidth:'900px'}}>
          <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'40px',marginBottom:'40px'}}>
            <h2 style={{fontFamily:'var(--font-heading)',fontSize:'26px',color:'var(--jungle-dark)',marginBottom:'16px'}}>
              Expert Help for Your {page.label} Proctored Exam
            </h2>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              Are you struggling with your <strong>{page.label}</strong> proctored exam? You are not alone. Thousands of nursing students find these exams to be among the most challenging in their academic journey — but with the right expert help, passing with an A or B is entirely achievable.
            </p>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              Our team of certified nursing educators and clinical practitioners specialize in <strong>Online Proctored Exam Help for {page.label}</strong>. We provide targeted preparation coaching, detailed study materials, and expert guidance tailored specifically to this course&apos;s exam format, question types, and grading criteria.
            </p>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'24px'}}>
              Every session is 100% confidential. We match you with an expert who has passed this exact exam and knows the content inside out. Our 98% pass rate and money-back guarantee speak for themselves.
            </p>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <span className="badge badge-green">✅ 98% Pass Rate</span>
              <span className="badge badge-green">🔒 100% Confidential</span>
              <span className="badge badge-gold">🏆 A or B Guaranteed</span>
              <span className="badge badge-gold">⏰ 24/7 Expert Support</span>
            </div>
          </div>

          {/* Process */}
          <div style={{background:'var(--jungle-xlight)',border:'1.5px solid rgba(0,148,143,0.2)',borderRadius:'var(--radius-lg)',padding:'36px',marginBottom:'40px'}}>
            <h3 style={{fontFamily:'var(--font-heading)',fontSize:'22px',color:'var(--jungle-dark)',marginBottom:'20px'}}>How We Help With {page.label}</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'20px'}}>
              {['Personalized study plan tailored to your exam date', 'Practice questions mirroring real exam format', 'One-on-one coaching sessions with certified tutor', 'Last-minute cramming and key concept review', 'Guaranteed A or B — or full refund'].map((item, i) => (
                <div key={i} style={{display:'flex',gap:'10px',alignItems:'flex-start'}}>
                  <span style={{color:'var(--jungle-green)',fontWeight:800,fontSize:'18px',flexShrink:0}}>✓</span>
                  <span style={{fontSize:'14px',color:'var(--text-light)'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="related-box">
            <h3>Related Proctored Exam Help Pages</h3>
            <div className="related-links">
              {related.map(p => (
                <Link key={p.slug} href={`/services/online-proctored-exam-help/${p.slug}`}>{p.label}</Link>
              ))}
              <Link href="/services/online-proctored-exam-help">View All Proctored Exams →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Help With Your {page.label} Today</h2>
          <p>Our certified tutors are standing by. Get matched in 30 minutes, guaranteed results.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
