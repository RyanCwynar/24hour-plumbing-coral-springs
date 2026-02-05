"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      <div className="demo-banner">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io">Learn More</a>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">24 Hour Plumbing</a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:9542105008" className="nav-cta">
            <span className="cta-full">📞 (954) 210-5008</span>
            <span className="cta-short">📞 Call</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>24/7 Emergency Plumbing in Coral Springs</h1>
          <p>Professional plumbers ready to fix any plumbing emergency, day or night. Fast response times and reliable service for your home or business.</p>
          <div className="hero-buttons">
            <a href="tel:9542105008" className="btn-primary">
              Call Now: (954) 210-5008
            </a>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-item">
            <span className="trust-icon">⏰</span>
            <span>24/7 Availability</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span>Fast Response</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🏆</span>
            <span>Local Experts</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-container">
          <h2>Our Plumbing Services</h2>
          <p className="section-subtitle">Complete residential and commercial plumbing solutions</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚨</div>
              <h3>Emergency Repairs</h3>
              <p>Burst pipes, major leaks, and urgent plumbing emergencies handled 24/7. We arrive fast when you need us most.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚿</div>
              <h3>Drain Cleaning</h3>
              <p>Clogged drains, slow drains, and sewer line cleaning. We clear blockages and restore proper flow.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Pipe Repair</h3>
              <p>Leak detection, pipe repair, and repiping services. We fix problems at the source.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚽</div>
              <h3>Toilet Repair</h3>
              <p>Running toilets, clogs, and replacements. Quick fixes for common toilet problems.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌡️</div>
              <h3>Water Heaters</h3>
              <p>Installation, repair, and maintenance for tank and tankless water heaters.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Residential Services</h3>
              <p>Complete home plumbing services including faucets, fixtures, and whole-house solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Why Choose 24 Hour Plumbing?</h2>
            <p>When you need a plumber to fix an emergency problem in the middle of the night, we&apos;re the company you want to call. We&apos;re available 24 hours a day, ready to fix any plumbing-related issues facing your home or business.</p>
            <p>Our plumbers are professional, experienced, and can be at your location in a jiffy! Don&apos;t waste your time calling plumbing company after plumbing company—call the pros that can get the job done right and done quickly.</p>
            <ul className="about-list">
              <li>✓ Fast response times, day or night</li>
              <li>✓ Professional, experienced technicians</li>
              <li>✓ Residential & commercial service</li>
              <li>✓ Upfront, honest pricing</li>
              <li>✓ Serving Coral Springs & surrounding areas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Plumbing Emergency? We&apos;re Here to Help!</h2>
          <p>Available 24/7 for all your plumbing needs in Coral Springs, FL</p>
          <a href="tel:9542105008" className="btn-cta">
            Call Now: (954) 210-5008
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:9542105008">(954) 210-5008</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Service Area</strong>
                  <p>Coral Springs, FL & Surrounding Areas</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <div>
                  <strong>Hours</strong>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <h3>Request Service</h3>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Describe your plumbing issue..." rows={4}></textarea>
                <button type="submit" className="btn-submit">Request Callback</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>24 Hour Plumbing</h3>
              <p>Professional plumbing services available 24/7 in Coral Springs, FL and surrounding areas.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>📞 (954) 210-5008</p>
              <p>📍 Coral Springs, FL</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 24 Hour Plumbing. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          line-height: 1.6;
          color: #1a1a2e;
        }

        /* Demo Banner */
        .demo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #f59e0b;
          color: white;
          text-align: center;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1001;
        }
        .demo-banner a { color: white; text-decoration: underline; }

        /* Navigation */
        nav {
          position: fixed;
          top: 36px;
          left: 0;
          right: 0;
          background: white;
          padding: 1rem 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0ea5e9;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #0ea5e9;
        }

        .nav-cta {
          background: #0ea5e9;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s;
        }

        .nav-cta:hover {
          background: #0284c7;
        }

        .cta-short {
          display: none;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          padding: 10rem 2rem 6rem;
          text-align: center;
          color: white;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: white;
          color: #0ea5e9;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          border: 2px solid white;
          transition: background 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
        }

        /* Trust Section */
        .trust-section {
          background: white;
          padding: 2rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .trust-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: #374151;
        }

        .trust-icon {
          font-size: 1.5rem;
        }

        /* Services Section */
        .services-section {
          padding: 5rem 2rem;
          background: #f9fafb;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-section h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1a1a2e;
        }

        .section-subtitle {
          text-align: center;
          color: #6b7280;
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #1a1a2e;
        }

        .service-card p {
          color: #6b7280;
          line-height: 1.7;
        }

        /* About Section */
        .about-section {
          padding: 5rem 2rem;
          background: white;
        }

        .about-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .about-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1a1a2e;
        }

        .about-content p {
          color: #4b5563;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .about-list {
          list-style: none;
          display: grid;
          gap: 0.75rem;
        }

        .about-list li {
          color: #374151;
          font-weight: 500;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          padding: 4rem 2rem;
          text-align: center;
          color: white;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-section h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .btn-cta {
          display: inline-block;
          background: white;
          color: #0ea5e9;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.2rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        /* Contact Section */
        .contact-section {
          padding: 5rem 2rem;
          background: #f9fafb;
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-section h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #1a1a2e;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .contact-info h3,
        .contact-form-wrapper h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #1a1a2e;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 1.5rem;
        }

        .contact-item strong {
          display: block;
          color: #374151;
          margin-bottom: 0.25rem;
        }

        .contact-item a,
        .contact-item p {
          color: #6b7280;
          text-decoration: none;
        }

        .contact-item a:hover {
          color: #0ea5e9;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }

        .btn-submit {
          background: #0ea5e9;
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .btn-submit:hover {
          background: #0284c7;
        }

        /* Footer */
        footer {
          background: #1a1a2e;
          color: white;
          padding: 3rem 2rem 1rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-brand h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-brand p {
          color: #9ca3af;
          line-height: 1.7;
        }

        .footer-links h4,
        .footer-contact h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .footer-links a {
          display: block;
          color: #9ca3af;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #0ea5e9;
        }

        .footer-contact p {
          color: #9ca3af;
          margin-bottom: 0.5rem;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1.5rem;
          text-align: center;
          color: #6b7280;
          font-size: 0.9rem;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .demo-banner {
            font-size: 0.7rem;
            padding: 0.4rem 0.75rem;
          }

          nav {
            top: 28px;
            padding: 0.5rem 1rem;
          }

          .logo {
            font-size: 1rem;
          }

          .nav-links {
            display: none;
          }

          .nav-cta {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            white-space: nowrap;
          }

          .cta-full {
            display: none;
          }

          .cta-short {
            display: inline;
          }

          .hero {
            padding: 8rem 1rem 4rem;
          }

          .hero h1 {
            font-size: 1.75rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }

          .trust-container {
            gap: 1.5rem;
          }

          .trust-item {
            font-size: 0.9rem;
          }

          .services-section,
          .about-section,
          .contact-section {
            padding: 3rem 1rem;
          }

          .services-section h2,
          .about-content h2,
          .contact-section h2 {
            font-size: 1.75rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .cta-section h2 {
            font-size: 1.5rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
