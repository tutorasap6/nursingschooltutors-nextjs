import type { Metadata } from 'next'
import Link from 'next/link'
import { getPaginatedPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Nursing Blog — Study Tips, Exam Guides & Academic Help',
  description: 'Expert nursing study tips, ATI TEAS prep guides, Chamberlain NR course help, PICOT writing guides, and more. Free nursing academic resources.',
}

export default function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Math.max(1, parseInt(searchParams.page || '1', 10))
  const { posts, totalPages } = getPaginatedPosts(page)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><a href="/">Home</a> › Blog</nav>
          <h1>Nursing Academic Help Blog</h1>
          <p>Expert guides, exam prep tips, course walkthroughs, and study resources — all written by certified nursing tutors.</p>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="blog-cta-strip">
        <div className="container blog-cta-inner">
          <span>🎯 Need help with your nursing exam or class?</span>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-sm">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-sm">Get Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0', background:'var(--off-white)'}}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{textAlign:'center',padding:'80px 0',color:'var(--text-light)'}}>
              <p style={{fontSize:'18px'}}>Blog posts coming soon! Check back shortly.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map(post => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-body">
                    {post.tags.length > 0 && (
                      <div className="blog-card-tags">
                        {post.tags.slice(0, 3).map(tag => <span key={tag} className="blog-tag">{tag}</span>)}
                      </div>
                    )}
                    <h2 className="blog-card-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <Link href={`/blog/${post.slug}`} className="blog-card-read-more">Read More →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="pagination" aria-label="Blog pagination">
              <Link href={`/blog?page=${page - 1}`} className={`pag-btn${page <= 1 ? ' disabled' : ''}`} aria-disabled={page <= 1}>← Prev</Link>
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                const p = page <= 4 ? i + 1 : page - 3 + i
                if (p < 1 || p > totalPages) return null
                return <Link key={p} href={`/blog?page=${p}`} className={`pag-btn${p === page ? ' active' : ''}`}>{p}</Link>
              })}
              {totalPages > 7 && page < totalPages - 3 && <span className="pag-btn disabled">…</span>}
              {page < totalPages - 3 && <Link href={`/blog?page=${totalPages}`} className="pag-btn">{totalPages}</Link>}
              <Link href={`/blog?page=${page + 1}`} className={`pag-btn${page >= totalPages ? ' disabled' : ''}`} aria-disabled={page >= totalPages}>Next →</Link>
            </nav>
          )}

          {/* Bottom CTA */}
          <div style={{background:'var(--jungle-dark)',borderRadius:'var(--radius-lg)',padding:'40px',marginTop:'64px',textAlign:'center'}}>
            <h3 style={{fontFamily:'var(--font-heading)',color:'var(--white)',fontSize:'24px',marginBottom:'10px'}}>Ready to Get Expert Help?</h3>
            <p style={{color:'rgba(255,255,255,0.72)',marginBottom:'24px'}}>Stop struggling. Our certified nursing tutors are available 24/7.</p>
            <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Us</a>
              <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
              <Link href="/services/online-proctored-exam-help" className="btn btn-outline btn-lg">📋 Proctored Exams</Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .blog-cta-strip { background: var(--jungle-green); padding: 14px 0; }
        .blog-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; color: white; font-weight: 600; font-size: 15px; }
      `}</style>
    </>
  )
}
