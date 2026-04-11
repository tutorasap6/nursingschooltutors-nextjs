import type { Metadata } from 'next'
import Link from 'next/link'
import { getPost, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const related = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><a href="/">Home</a> › <a href="/blog">Blog</a> › {post.title}</nav>
          <h1>{post.title}</h1>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginTop:'14px'}}>
            {post.tags.map(tag => <span key={tag} className="badge badge-gold">{tag}</span>)}
            <span style={{color:'rgba(255,255,255,0.55)',fontSize:'13px',alignSelf:'center'}}>
              {new Date(post.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}
            </span>
          </div>
        </div>
      </div>

      <div className="blog-cta-strip2">
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'16px',flexWrap:'wrap'}}>
          <span>💬 Need help with this topic? Our experts are available 24/7.</span>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-sm">WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-sm">Free Quote</Link>
          </div>
        </div>
      </div>

      <article style={{padding:'64px 0',background:'var(--white)'}}>
        <div className="container blog-layout">
          <div className="blog-content prose" dangerouslySetInnerHTML={{__html: post.content || `<p>${post.excerpt}</p>`}}/>
          <aside className="blog-sidebar">
            <div className="sidebar-box">
              <h3>🎯 Need Help Now?</h3>
              <p>Our nursing experts are standing by 24/7. Get an A or B — guaranteed.</p>
              <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp" style={{width:'100%',justifyContent:'center',marginBottom:'10px'}}>💬 WhatsApp Us</a>
              <Link href="/order" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>🎯 Free Quote</Link>
            </div>
            <div className="sidebar-box">
              <h4>Our Services</h4>
              <Link href="/services/online-proctored-exam-help">📋 Proctored Exam Help</Link>
              <Link href="/services/pay-someone-to-do-my-online-class">💻 Pay For My Class</Link>
              <Link href="/services/take-my-class-for-me">📚 Take My Class For Me</Link>
              <Link href="/services/ai-free-nursing-writing-assignment-help">✍️ AI-Free Writing</Link>
            </div>
            {post.tags.length > 0 && (
              <div className="sidebar-box">
                <h4>Tags</h4>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {post.tags.map(t => <span key={t} className="blog-tag">{t}</span>)}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{padding:'64px 0',background:'var(--off-white)'}}>
          <div className="container">
            <h2 className="section-title">Related <span>Articles</span></h2>
            <div className="blog-grid">
              {related.map(p => (
                <article key={p.slug} className="blog-card">
                  <div className="blog-card-body">
                    <div className="blog-card-tags">{p.tags.slice(0,2).map(t=><span key={t} className="blog-tag">{t}</span>)}</div>
                    <h3 className="blog-card-title"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                    <p className="blog-card-excerpt">{p.excerpt}</p>
                    <Link href={`/blog/${p.slug}`} className="blog-card-read-more">Read More →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .blog-cta-strip2 { background: var(--jungle-green); padding: 14px 0; color: white; font-weight: 600; font-size: 14px; }
        .blog-layout { display: grid; grid-template-columns: 1fr 300px; gap: 48px; align-items: start; }
        .blog-content.prose { font-size: 16px; line-height: 1.8; color: var(--text); }
        .blog-content.prose h1,.blog-content.prose h2,.blog-content.prose h3 { font-family: var(--font-heading); color: var(--jungle-dark); margin: 32px 0 14px; line-height: 1.3; }
        .blog-content.prose h2 { font-size: 26px; border-left: 4px solid var(--gold); padding-left: 14px; }
        .blog-content.prose h3 { font-size: 20px; }
        .blog-content.prose p { margin-bottom: 18px; }
        .blog-content.prose ul,.blog-content.prose ol { margin: 16px 0 18px 24px; }
        .blog-content.prose li { margin-bottom: 8px; }
        .blog-content.prose strong { color: var(--jungle-dark); }
        .blog-content.prose a { color: var(--jungle-green); text-decoration: underline; }
        .sidebar-box { background: var(--white); border: 1.5px solid var(--border); border-radius: var(--radius); padding: 22px; margin-bottom: 20px; }
        .sidebar-box h3 { font-family: var(--font-heading); color: var(--jungle-dark); font-size: 18px; margin-bottom: 10px; }
        .sidebar-box h4 { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); margin-bottom: 12px; }
        .sidebar-box p { font-size: 13.5px; color: var(--text-light); margin-bottom: 14px; }
        .sidebar-box a:not(.btn) { display: block; padding: 7px 0; font-size: 13.5px; color: var(--text-light); font-weight: 500; border-bottom: 1px solid var(--border); transition: color 0.15s; }
        .sidebar-box a:not(.btn):hover { color: var(--jungle-green); }
        @media(max-width:900px) { .blog-layout { grid-template-columns: 1fr; } .blog-sidebar { order: -1; } }
      `}</style>
    </>
  )
}
