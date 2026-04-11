import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nursing School Tutors | Proctored Exam Help | Take My Online Class | AI-Free Writing',
  description: 'Pay someone to do your Nursing Online Assignments, Proctored Exams, Online Class, ATI Nursing, HESI, TEAS, and more. Guaranteed A\'s or minimum B. AI-free, plagiarism-free, 24/7.',
}

const services = [
  { icon: '🏛️', title: 'Online Proctored Exam Help', desc: 'Expert support for ATI TEAS, HESI, NCLEX, Chamberlain NR courses, GRE, GMAT & 60+ more exams.', href: '/services/online-proctored-exam-help', color: '#004B49' },
  { icon: '💻', title: 'Pay Someone For My Online Class', desc: 'We handle your entire Chamberlain NR course — assignments, quizzes, discussions & final exams.', href: '/services/pay-someone-to-do-my-online-class', color: '#006B68' },
  { icon: '📚', title: 'Take My Class For Me', desc: 'Full MSN, DNP, FNP, PA & MPH course takeover. You rest — our experts earn your grade.', href: '/services/take-my-class-for-me', color: '#00948F' },
  { icon: '✍️', title: 'AI-Free Writing Assignment Help', desc: 'Zero plagiarism, zero AI. Capstone projects, PICOT, dissertations, care plans & more.', href: '/services/ai-free-nursing-writing-assignment-help', color: '#C9A84C' },
]

const testimonials = [
  { text: 'I was failing my NR-507 Advanced Pathophysiology. They helped me turn a D into an A in just 3 weeks. Incredible!', name: 'Jessica M.', role: 'Chamberlain MSN Student', stars: 5 },
  { text: 'Took my ATI TEAS for me and I passed with a 92%. No stress, no sleepless nights. Just results.', name: 'Marcus T.', role: 'Aspiring Nursing Student', stars: 5 },
  { text: 'My DNP capstone was a nightmare. They delivered a flawless, AI-free paper in 5 days. Worth every dollar.', name: 'Priya S.', role: 'DNP Candidate, Chamberlain', stars: 5 },
  { text: 'Used them for 3 courses now. Never got below a B. They are literally my secret weapon for nursing school.', name: 'Carlos R.', role: 'BSN Student', stars: 5 },
]

const faqs = [
  { q: 'Is it safe to pay someone to take my nursing class?', a: 'Yes. We operate with 100% confidentiality. Your identity is never shared, all communications are encrypted, and we have served 50,000+ students without a single privacy breach.' },
  { q: 'What grades do you guarantee?', a: 'We guarantee a minimum grade of B or better, with the goal of achieving A grades. If we fall short, we offer a full money-back guarantee.' },
  { q: 'How quickly can you start?', a: 'We can begin within 30 minutes of your order for urgent requests. Contact us via WhatsApp for the fastest response.' },
  { q: 'Do you cover all Chamberlain NR courses?', a: 'Yes — we cover every NR course from NR-103 through NR-703, including all MSN, DNP, FNP, PA, MPH and MSW programs.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {[
            '🏆 #1 Trusted Nursing Help Platform',
            '✅ 50,000+ Students Helped',
            '📊 98% Pass Rate',
            '🔒 100% Confidential',
            '⚡ Results in 30 Minutes',
            '🎓 A\'s & B\'s Guaranteed',
            '🧬 AI-Free, Plagiarism-Free',
            '⏰ 24/7 Expert Support',
            '🏆 #1 Trusted Nursing Help Platform',
            '✅ 50,000+ Students Helped',
            '📊 98% Pass Rate',
            '🔒 100% Confidential',
            '⚡ Results in 30 Minutes',
            '🎓 A\'s & B\'s Guaranteed',
            '🧬 AI-Free, Plagiarism-Free',
            '⏰ 24/7 Expert Support',
          ].map((item, i) => (
            <div key={i} className="trust-bar-item">
              <span>{item.split(' ')[0]}</span>
              {item.split(' ').slice(1).join(' ')}
            </div>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        {/* Anatomy background decorations */}
        <div className="hero-bg-deco" aria-hidden="true">
          <svg className="dna-spiral" viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({length:12}).map((_,i) => (
              <g key={i}>
                <ellipse cx={50 + Math.sin(i*0.8)*30} cy={20+i*30} rx="8" ry="4" fill="rgba(201,168,76,0.15)" />
                <ellipse cx={50 - Math.sin(i*0.8)*30} cy={20+i*30} rx="8" ry="4" fill="rgba(0,148,143,0.12)" />
                <line x1={50+Math.sin(i*0.8)*30} y1={20+i*30} x2={50-Math.sin(i*0.8)*30} y2={20+i*30} stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              </g>
            ))}
          </svg>
          <div className="hex-grid" aria-hidden="true">
            {Array.from({length:8}).map((_,i)=><div key={i} className="hex" style={{animationDelay:`${i*0.4}s`}}/>)}
          </div>
        </div>

        <div className="container hero-inner">
          {/* LEFT: Content */}
          <div className="hero-content">
            <span className="badge badge-gold hero-badge">
              🏆 #1 Trusted Nursing Academic Help — Since 2018
            </span>
            <h1>
              <span className="accent-line">Pay Someone</span> to Do Your<br/>
              Nursing Exams, Classes<br/>&amp; Assignments
            </h1>
            <p className="hero-sub">
              Expert help for <strong>ATI TEAS</strong>, <strong>HESI A2</strong>, <strong>NCLEX</strong>, Chamberlain NR courses,
              proctored exams, full online class takeovers &amp; AI-free writing.
              Guaranteed <strong>A or minimum B</strong> — or your money back.
            </p>
            <div className="hero-buttons">
              <a href="https://wa.me/17654709090?text=Hi!%20I%20need%20help%20with%20my%20nursing%20exam%20or%20class." target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                💬 WhatsApp — Get Instant Help
              </a>
              <Link href="/order" className="btn btn-outline btn-lg">
                🎯 Get Free Quote
              </Link>
            </div>
            <div className="hero-proof">
              <div className="hero-stat"><span>50,000+</span>Students Helped</div>
              <div className="hero-stat-div"/>
              <div className="hero-stat"><span>98%</span>Pass Rate</div>
              <div className="hero-stat-div"/>
              <div className="hero-stat"><span>A/B</span>Grade Guaranteed</div>
              <div className="hero-stat-div"/>
              <div className="hero-stat"><span>24/7</span>Expert Support</div>
            </div>
          </div>

          {/* RIGHT: Device mockup with anatomy visuals */}
          <div className="hero-visual" aria-hidden="true">
            {/* Anatomy circles in background */}
            <div className="anatomy-ring ring-1"/>
            <div className="anatomy-ring ring-2"/>

            {/* Laptop mockup */}
            <div className="device-laptop">
              <div className="laptop-screen">
                <div className="laptop-ui">
                  <div className="lui-bar">
                    <span style={{background:'#ff5f57'}}/>
                    <span style={{background:'#febc2e'}}/>
                    <span style={{background:'#28c840'}}/>
                  </div>
                  <div className="lui-content">
                    <div className="lui-header">NursingSchoolTutors.com</div>
                    <div className="lui-grade">
                      <div className="grade-circle">A+</div>
                      <div>
                        <div className="grade-label">NR-507 Pathophysiology</div>
                        <div className="grade-sub">Grade received: 97% ✅</div>
                      </div>
                    </div>
                    <div className="lui-stats">
                      <div className="lui-bar-stat"><span style={{width:'92%'}}/></div>
                      <div className="lui-bar-stat"><span style={{width:'88%'}}/></div>
                      <div className="lui-bar-stat"><span style={{width:'97%'}}/></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="laptop-base"/>
              <div className="laptop-foot"/>
            </div>

            {/* Mobile phone */}
            <div className="device-mobile">
              <div className="mobile-screen">
                <div className="mob-wa">
                  <div className="mob-wa-header">💬 WhatsApp</div>
                  <div className="mob-msg received">Hi! Need help with TEAS exam 🩺</div>
                  <div className="mob-msg sent">We start in 30 min! ✅</div>
                  <div className="mob-msg received">What&apos;s my grade guarantee?</div>
                  <div className="mob-msg sent">A or B — money back! 🏆</div>
                </div>
              </div>
            </div>

            {/* Floating anatomy badges */}
            <div className="float-badge fb1">🧬 Pathophysiology Expert</div>
            <div className="float-badge fb2">💊 Pharmacology Ready</div>
            <div className="float-badge fb3">🫀 ATI TEAS Passed ✓</div>
          </div>
        </div>

        <style>{`
          .hero {
            background: linear-gradient(135deg, var(--jungle-dark) 0%, var(--jungle-green) 55%, #007A75 100%);
            padding: 80px 0 90px;
            position: relative;
            overflow: hidden;
            min-height: 680px;
            display: flex;
            align-items: center;
          }
          .hero::after {
            content: '';
            position: absolute;
            bottom: -2px; left: 0; right: 0;
            height: 80px;
            background: var(--white);
            clip-path: ellipse(55% 100% at 50% 100%);
          }
          .hero-bg-deco {
            position: absolute; inset: 0; pointer-events: none;
          }
          .dna-spiral {
            position: absolute; right: 5%; top: 0; height: 100%; width: 80px; opacity: 0.5;
          }
          .hex-grid {
            position: absolute; left: 0; top: 0; width: 100%; height: 100%;
            display: flex; flex-wrap: wrap; gap: 40px;
            padding: 20px; opacity: 0.04;
          }
          .hex {
            width: 60px; height: 60px;
            background: white;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            animation: hexPulse 4s ease-in-out infinite alternate;
          }
          @keyframes hexPulse { from { opacity: 0.3; } to { opacity: 1; } }
          .hero-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            position: relative;
            z-index: 2;
          }
          .hero-content { color: var(--white); }
          .hero-badge { margin-bottom: 20px; display: inline-flex; }
          .hero-content h1 {
            font-family: var(--font-heading);
            font-size: clamp(32px, 5vw, 58px);
            color: var(--white);
            line-height: 1.15;
            margin-bottom: 20px;
          }
          .accent-line { color: var(--gold-light); }
          .hero-sub {
            font-size: 17px;
            color: rgba(255,255,255,0.82);
            line-height: 1.65;
            margin-bottom: 32px;
            max-width: 540px;
          }
          .hero-sub strong { color: var(--gold-light); }
          .hero-buttons { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 36px; }
          .hero-proof {
            display: flex;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
          }
          .hero-stat { text-align: center; }
          .hero-stat span {
            display: block;
            font-family: var(--font-heading);
            font-size: 26px;
            font-weight: 900;
            color: var(--gold-light);
            line-height: 1;
          }
          .hero-stat { font-size: 12px; color: rgba(255,255,255,0.65); }
          .hero-stat-div { width: 1px; height: 36px; background: rgba(255,255,255,0.2); }

          /* DEVICES */
          .hero-visual {
            position: relative;
            height: 480px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .anatomy-ring {
            position: absolute;
            border-radius: 50%;
            border: 1.5px solid rgba(201,168,76,0.15);
          }
          .ring-1 { width: 380px; height: 380px; top: 50%; left: 50%; transform: translate(-50%,-50%); animation: ringPulse 5s ease-in-out infinite; }
          .ring-2 { width: 460px; height: 460px; top: 50%; left: 50%; transform: translate(-50%,-50%); border-color: rgba(0,148,143,0.1); animation: ringPulse 5s ease-in-out infinite 0.8s; }
          @keyframes ringPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }

          .device-laptop {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-52%, -52%);
            width: 280px;
          }
          .laptop-screen {
            background: #1a2a2a;
            border-radius: 10px 10px 0 0;
            border: 3px solid #2a3a3a;
            overflow: hidden;
            aspect-ratio: 16/10;
          }
          .laptop-ui { padding: 10px; }
          .lui-bar { display: flex; gap: 5px; margin-bottom: 8px; }
          .lui-bar span { width: 8px; height: 8px; border-radius: 50%; }
          .lui-content { background: var(--jungle-dark); border-radius: 6px; padding: 10px; }
          .lui-header { font-size: 8px; color: var(--gold-light); font-weight: 700; margin-bottom: 8px; }
          .lui-grade { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
          .grade-circle { width: 34px; height: 34px; border-radius: 50%; background: var(--gold); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 11px; color: var(--jungle-dark); flex-shrink: 0; }
          .grade-label { font-size: 8px; color: white; font-weight: 700; }
          .grade-sub { font-size: 7px; color: rgba(255,255,255,0.6); }
          .lui-stats { display: flex; flex-direction: column; gap: 5px; }
          .lui-bar-stat { height: 5px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
          .lui-bar-stat span { display: block; height: 100%; background: linear-gradient(90deg, var(--gold), var(--jungle-light)); border-radius: 3px; }
          .laptop-base { height: 14px; background: #2a3a3a; border-radius: 0 0 4px 4px; }
          .laptop-foot { width: 80px; height: 8px; background: #222; border-radius: 0 0 8px 8px; margin: 0 auto; }

          .device-mobile {
            position: absolute;
            right: 4%;
            top: 50%;
            transform: translateY(-45%);
            width: 110px;
          }
          .mobile-screen {
            background: #0a1a1a;
            border-radius: 16px;
            border: 3px solid #1e2e2e;
            overflow: hidden;
            aspect-ratio: 9/18;
            padding: 8px 6px;
          }
          .mob-wa-header { font-size: 7px; color: #25D366; font-weight: 800; margin-bottom: 6px; text-align: center; }
          .mob-msg { font-size: 6.5px; padding: 4px 6px; border-radius: 8px; margin-bottom: 4px; max-width: 85%; line-height: 1.4; }
          .mob-msg.received { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.85); align-self: flex-start; }
          .mob-msg.sent { background: #25D366; color: white; margin-left: auto; }
          .mob-wa { display: flex; flex-direction: column; }

          .float-badge {
            position: absolute;
            background: white;
            color: var(--jungle-dark);
            font-size: 11px;
            font-weight: 700;
            padding: 7px 13px;
            border-radius: 50px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.18);
            white-space: nowrap;
            border-left: 3px solid var(--gold);
            animation: floatBadge 3s ease-in-out infinite alternate;
          }
          .fb1 { top: 12%; left: 0%; animation-delay: 0s; }
          .fb2 { bottom: 20%; left: -5%; animation-delay: 0.7s; }
          .fb3 { top: 55%; right: 0%; animation-delay: 1.3s; }
          @keyframes floatBadge { from{transform:translateY(0)} to{transform:translateY(-8px)} }

          @media (max-width: 900px) {
            .hero-inner { grid-template-columns: 1fr; }
            .hero-visual { display: none; }
            .hero { padding: 60px 0 80px; }
          }
        `}</style>
      </section>

      {/* ── SERVICES ── */}
      <section style={{padding:'80px 0', background:'var(--white)'}}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Everything You Need to <span>Excel</span> in Nursing School</h2>
            <p className="section-sub">From single assignments to full course takeovers — our certified nursing experts handle it all.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <Link key={s.href} href={s.href} className="service-card" style={{'--card-color': s.color} as React.CSSProperties}>
                <div className="sc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="sc-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .service-card {
            display: flex; flex-direction: column;
            background: var(--white);
            border: 1.5px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 32px;
            transition: all 0.25s ease;
            position: relative; overflow: hidden;
          }
          .service-card::before {
            content: '';
            position: absolute; top: 0; left: 0; right: 0;
            height: 4px;
            background: var(--card-color, var(--jungle-green));
          }
          .service-card:hover { box-shadow: var(--shadow-md); transform: translateY(-6px); border-color: var(--jungle-light); }
          .sc-icon { font-size: 36px; margin-bottom: 14px; }
          .service-card h3 { font-family: var(--font-heading); font-size: 20px; color: var(--jungle-dark); margin-bottom: 10px; }
          .service-card p { font-size: 14px; color: var(--text-light); line-height: 1.65; flex: 1; margin-bottom: 18px; }
          .sc-link { font-size: 14px; font-weight: 700; color: var(--jungle-green); }
          .service-card:hover .sc-link { text-decoration: underline; }
        `}</style>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{padding:'80px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">Get Help in <span>3 Easy Steps</span></h2>
          </div>
          <div className="steps-grid">
            {[
              { n:'01', title:'Contact Us', desc:'WhatsApp, email, or fill out the free quote form. Tell us your course, deadline, and budget.' },
              { n:'02', title:'Match with Expert', desc:'We match you with a certified nursing tutor with experience in your specific course or exam.' },
              { n:'03', title:'Get Your Grade', desc:'Sit back while our expert handles everything. We guarantee an A or minimum B — or money back.' },
            ].map(s => (
              <div key={s.n} className="step-card">
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'48px', display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Us Now</a>
            <Link href="/order" className="btn btn-green btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
        <style>{`
          .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
          .step-card { background: var(--white); border-radius: var(--radius-lg); padding: 36px 28px; text-align: center; border: 1.5px solid var(--border); position: relative; }
          .step-num { font-family: var(--font-heading); font-size: 52px; font-weight: 900; color: var(--jungle-xlight); line-height: 1; margin-bottom: 14px; }
          .step-card h3 { font-family: var(--font-heading); font-size: 20px; color: var(--jungle-dark); margin-bottom: 10px; }
          .step-card p { font-size: 14.5px; color: var(--text-light); line-height: 1.65; }
          @media(max-width:768px) { .steps-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{padding:'80px 0', background:'var(--white)'}}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Student Reviews</span>
            <h2 className="section-title">Thousands of Students <span>Trust Us</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 24px; }`}</style>
      </section>

      {/* ── FAQ ── */}
      <section style={{padding:'80px 0', background:'var(--off-white)'}}>
        <div className="container" style={{maxWidth:'760px'}}>
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          </div>
          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-question">{f.q} <span>+</span></summary>
              <div className="faq-answer open" style={{maxHeight:'none'}}>{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Ace Your Nursing Class?</h2>
          <p>Join 50,000+ students who got A&apos;s and B&apos;s with NursingSchoolTutors. Get started in 30 minutes.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 Chat on WhatsApp</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote Now</Link>
            <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg">📧 Email Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
