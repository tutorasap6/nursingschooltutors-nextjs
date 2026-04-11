'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { examSubpages, classSubpages, takeMeSubpages, writingSubpages } from '@/data/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Logo */}
        <Link href="/" className="logo-link" aria-label="Nursing School Tutors Home">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="21" fill="#004B49"/>
            <path d="M21 8C14 8 8 14 8 21s6 13 13 13 13-6 13-13S28 8 21 8zm0 2c6.07 0 11 4.93 11 11s-4.93 11-11 11S10 27.07 10 21 14.93 10 21 10z" fill="#C9A84C"/>
            <path d="M19 15h4v4h4v4h-4v4h-4v-4h-4v-4h4z" fill="#C9A84C"/>
            <circle cx="21" cy="21" r="3" fill="#004B49"/>
          </svg>
          <div className="logo-text">
            <span className="logo-title">NursingSchoolTutors</span>
            <span className="logo-sub">A's &amp; B's Guaranteed</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" className="nav-link">Home</Link>

          {/* Services mega menu */}
          <div className="dropdown">
            <button className="nav-link nav-btn" aria-haspopup="true" onClick={() => setServiceOpen(!serviceOpen)}>
              Services <span className="chevron">▾</span>
            </button>
            <div className="mega-menu services-mega">
              <div className="mega-col">
                <h4>🏛️ Proctored Exam Help</h4>
                <Link href="/services/online-proctored-exam-help" className="mega-main-link">→ All Proctored Exams</Link>
                {examSubpages.slice(0, 12).map(p => (
                  <Link key={p.slug} href={`/services/online-proctored-exam-help/${p.slug}`}>{p.label}</Link>
                ))}
              </div>
              <div className="mega-col">
                <h4>💻 Pay Someone For My Class</h4>
                <Link href="/services/pay-someone-to-do-my-online-class" className="mega-main-link">→ All Online Classes</Link>
                {classSubpages.map(p => (
                  <Link key={p.slug} href={`/services/pay-someone-to-do-my-online-class/${p.slug}`}>{p.label}</Link>
                ))}
                <h4 style={{marginTop:'16px'}}>📚 Take My Class For Me</h4>
                <Link href="/services/take-my-class-for-me" className="mega-main-link">→ Full Course Takeover</Link>
                {takeMeSubpages.slice(0, 6).map(p => (
                  <Link key={p.slug} href={`/services/take-my-class-for-me/${p.slug}`}>{p.label}</Link>
                ))}
              </div>
              <div className="mega-col">
                <h4>✍️ AI-Free Writing Help</h4>
                <Link href="/services/ai-free-nursing-writing-assignment-help" className="mega-main-link">→ All Writing Services</Link>
                {writingSubpages.map(p => (
                  <Link key={p.slug} href={`/services/ai-free-nursing-writing-assignment-help/${p.slug}`}>{p.label}</Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/order" className="nav-link btn btn-primary btn-sm nav-cta">
            🎯 Free Quote — Order Now
          </Link>
        </nav>

        {/* Mobile burger */}
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="mobile-nav">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <details>
            <summary>Services</summary>
            <div className="mobile-submenu">
              <Link href="/services/online-proctored-exam-help" onClick={() => setMobileOpen(false)}>🏛️ Online Proctored Exam Help</Link>
              <Link href="/services/pay-someone-to-do-my-online-class" onClick={() => setMobileOpen(false)}>💻 Pay Someone For My Online Class</Link>
              <Link href="/services/take-my-class-for-me" onClick={() => setMobileOpen(false)}>📚 Take My Class For Me</Link>
              <Link href="/services/ai-free-nursing-writing-assignment-help" onClick={() => setMobileOpen(false)}>✍️ AI-Free Writing Help</Link>
            </div>
          </details>
          <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/order" className="btn btn-primary" onClick={() => setMobileOpen(false)}>🎯 Free Quote — Order Now</Link>
        </nav>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 900;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1.5px solid var(--border);
          transition: box-shadow 0.25s;
        }
        .site-header.scrolled { box-shadow: 0 4px 24px rgba(0,75,73,0.12); }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-h);
          gap: 24px;
        }
        .logo-link { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .logo-text { display: flex; flex-direction: column; line-height: 1.2; }
        .logo-title { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--jungle-dark); }
        .logo-sub { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); }
        .desktop-nav { display: flex; align-items: center; gap: 4px; }
        .nav-link {
          padding: 8px 14px;
          font-size: 14.5px;
          font-weight: 600;
          color: var(--text);
          border-radius: 8px;
          transition: all 0.18s;
          display: flex; align-items: center; gap: 4px;
        }
        .nav-link:hover { color: var(--jungle-green); background: var(--jungle-xlight); }
        .nav-btn { background: none; border: none; font-family: var(--font-body); cursor: pointer; }
        .nav-cta { background: var(--gold) !important; color: var(--jungle-dark) !important; margin-left: 8px; box-shadow: 0 3px 14px rgba(201,168,76,0.3); }
        .nav-cta:hover { background: var(--gold-light) !important; transform: translateY(-1px); }
        .chevron { font-size: 11px; }
        .mega-main-link { font-weight: 700 !important; color: var(--jungle-green) !important; margin-bottom: 6px; }
        .services-mega { left: -200px; }
        .mobile-toggle { display: none; flex-direction: column; gap: 5px; padding: 8px; background: none; border: none; }
        .mobile-toggle span { display: block; width: 24px; height: 2px; background: var(--jungle-dark); border-radius: 2px; transition: all 0.2s; }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 16px 24px 24px;
          background: var(--white);
          border-top: 1px solid var(--border);
          gap: 4px;
        }
        .mobile-nav a, .mobile-nav summary {
          padding: 12px 16px;
          font-weight: 600;
          font-size: 15px;
          color: var(--text);
          border-radius: var(--radius);
          cursor: pointer;
          list-style: none;
        }
        .mobile-nav a:hover { background: var(--jungle-xlight); color: var(--jungle-green); }
        .mobile-submenu { display: flex; flex-direction: column; padding-left: 16px; }
        .mobile-submenu a { font-size: 14px; padding: 8px 14px; }
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: flex; }
        }
      `}</style>
    </header>
  )
}
