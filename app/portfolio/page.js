export default function Portfolio() {
  return (
    <>
      <div className="page-header">
          <h1 className="hidden">Portfolio</h1>
      </div>

      <section className="section">
          <div className="container">
              <div className="portfolio-profile">
                  <div className="profile-image-container hidden">
                      <img src="/images/profile.jpg" alt="Dananjaya Prasad - Portfolio" />
                  </div>
                  <div className="profile-text-container hidden" style={{ transitionDelay: '0.2s' }}>
                      <h2 style={{ fontSize: '2.5rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Dananjaya Prasad</h2>
                      <h4 style={{ color: 'var(--text-muted)', fontWeight: 400, marginBottom: '30px', letterSpacing: '1px', fontSize: '1.1rem' }}>Founder & Lead Photographer, Zinetzu</h4>
                      <p style={{ marginBottom: '20px' }}>I am a professional photographer based in Sri Lanka, dedicated to bridging the gap between imagination and reality through high-end visual storytelling. My work lives at the intersection of creative intuition and technical precision, specializing in commercial events, editorial fashion, and advertising product photography.</p>
                      <p style={{ marginBottom: '20px' }}>Driven by a passion for visual science, I am currently completing a BA (Hons) in Image Art at the University of Kelaniya. This rigorous academic background in lighting physics and color theory, paired with intensive, real-world industrial training under senior industry veterans, allows me to deliver commercial-grade impact with an uncompromising standard of professionalism.</p>
                      <p style={{ marginBottom: '40px' }}>From advanced studio lighting to precise post-production workflows, my mission is simple: to capture raw, authentic energy and craft visually stunning imagery that elevates personal milestones and empowers brands to stand out.</p>
                  </div>
              </div>

              {/* Core Expertise */}
              <div style={{ marginTop: '60px' }}>
                  <h2 className="section-title hidden" style={{ textAlign: 'left', marginBottom: '20px' }}>Core Expertise</h2>
                  <div className="expertise-grid">
                      <div className="expertise-card hidden" style={{ transitionDelay: '0.1s' }}>
                          <h4>Fashion & Portraiture</h4>
                          <p>Blending modern aesthetics with traditional cultural motifs.</p>
                      </div>
                      <div className="expertise-card hidden" style={{ transitionDelay: '0.2s' }}>
                          <h4>Commercial & Events</h4>
                          <p>Comprehensive, high-energy coverage for large-scale conventions and concerts.</p>
                      </div>
                      <div className="expertise-card hidden" style={{ transitionDelay: '0.3s' }}>
                          <h4>Product & Advertising</h4>
                          <p>Precision studio setups and creative light painting designed to elevate brand identities.</p>
                      </div>
                  </div>
              </div>

              {/* Get In Touch */}
              <div style={{ marginTop: '60px', marginBottom: '40px' }} className="hidden">
                  <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>Get In Touch</h2>
                  <div className="contact-info-grid">
                      <div className="contact-item">
                          <i className="fa-solid fa-briefcase"></i>
                          <div>
                              <strong>Digital Media Platform</strong><br />
                              <span style={{ color: 'var(--text-muted)' }}>Zinetzu</span>
                          </div>
                      </div>
                      <div className="contact-item">
                          <i className="fa-solid fa-camera"></i>
                          <div>
                              <strong>Portfolio</strong><br />
                              <span style={{ color: 'var(--text-muted)' }}>Dananjaya Prasad Photography</span>
                          </div>
                      </div>
                      <div className="contact-item">
                          <i className="fa-solid fa-envelope"></i>
                          <div>
                              <strong>Email</strong><br />
                              <span style={{ color: 'var(--text-muted)' }}>dananjayaprasad96@gmail.com</span>
                          </div>
                      </div>
                      <div className="contact-item">
                          <i className="fa-solid fa-phone"></i>
                          <div>
                              <strong>Phone</strong><br />
                              <span style={{ color: 'var(--text-muted)' }}>076 74 55 540</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
