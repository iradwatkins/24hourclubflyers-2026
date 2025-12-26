export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2d1b4e 0%, #1a0a2e 50%, #0d0519 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
          <span style={{ color: '#ff6b35' }}>24 Hour</span> Club Flyers
        </h1>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Products</a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Pricing</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '5rem 2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'inline-block',
          background: '#ff6b35',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '1.5rem'
        }}>
          RUSH PRINTING AVAILABLE
        </div>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.1 }}>
          Club Flyers Printed<br />
          <span style={{ color: '#ff6b35' }}>In 24 Hours</span>
        </h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Premium quality flyers for nightclubs, events, and promotions.
          Same-day printing with overnight shipping nationwide.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#products" style={{
            background: '#ff6b35',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}>
            Order Now
          </a>
          <a href="tel:1-800-555-0199" style={{
            background: 'transparent',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            border: '2px solid rgba(255,255,255,0.3)'
          }}>
            Call: 1-800-555-0199
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Popular Products</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Club Flyers', sizes: '4x6, 4.25x5.5, 5.5x8.5', price: 'From $29', turnaround: '24hr available' },
            { name: 'Postcards', sizes: '4x6, 5x7, 6x9', price: 'From $39', turnaround: '24hr available' },
            { name: 'Business Cards', sizes: '3.5x2, 2x3.5', price: 'From $19', turnaround: '48hr' },
            { name: 'Posters', sizes: '11x17, 18x24, 24x36', price: 'From $49', turnaround: '48hr' },
            { name: 'Door Hangers', sizes: '4.25x11, 3.5x8.5', price: 'From $59', turnaround: '48hr' },
            { name: 'Rack Cards', sizes: '4x9', price: 'From $45', turnaround: '48hr' },
          ].map((product, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ff6b35' }}>{product.name}</h4>
              <p style={{ opacity: 0.6, margin: '0.5rem 0', fontSize: '0.9rem' }}>{product.sizes}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>{product.price}</span>
                <span style={{
                  background: product.turnaround === '24hr available' ? '#ff6b35' : 'rgba(255,255,255,0.1)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem'
                }}>{product.turnaround}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { icon: '⚡', title: 'Rush Service', desc: 'Same day printing available' },
            { icon: '✈️', title: 'Fast Shipping', desc: 'Overnight delivery nationwide' },
            { icon: '🎨', title: 'Premium Stock', desc: '14pt, 16pt, UV coating options' },
            { icon: '💰', title: 'Best Prices', desc: 'Wholesale pricing for clubs' },
          ].map((feature, i) => (
            <div key={i} style={{ maxWidth: '200px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h4 style={{ marginBottom: '0.5rem' }}>{feature.title}</h4>
              <p style={{ opacity: 0.6, margin: 0, fontSize: '0.9rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Order?</h3>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Call us for rush orders or email for custom quotes
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:1-800-555-0199" style={{ color: '#ff6b35', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 600 }}>
            📞 1-800-555-0199
          </a>
          <a href="mailto:orders@24hourclubflyers.com" style={{ color: 'white', textDecoration: 'none' }}>
            ✉️ orders@24hourclubflyers.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        opacity: 0.6
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 24 Hour Club Flyers. All rights reserved.</p>
      </footer>
    </main>
  )
}
