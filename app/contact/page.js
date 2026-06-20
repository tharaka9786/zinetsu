import { client } from '@/sanity/lib/client';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Contact() {
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);

  return (
    <>
      <div className="page-header">
          <h1 className="hidden">Contact Us</h1>
      </div>

      <section className="section">
          <div className="container">
              <h2 className="section-title hidden">Get In Touch</h2>
              <p className="hidden" style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-muted)' }}>Let's create something beautiful together. Fill out the form below.</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
                  
                  {/* Contact Info from Sanity */}
                  <div className="contact-info hidden" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                      <h3 style={{ marginBottom: '20px' }}>Contact Information</h3>
                      {siteSettings?.email && (
                          <div style={{ marginBottom: '15px' }}>
                              <strong style={{ display: 'block', color: 'var(--text-color)' }}>Email:</strong>
                              <a href={`mailto:${siteSettings.email}`} style={{ color: 'var(--text-muted)' }}>{siteSettings.email}</a>
                          </div>
                      )}
                      {siteSettings?.phone && (
                          <div style={{ marginBottom: '15px' }}>
                              <strong style={{ display: 'block', color: 'var(--text-color)' }}>Phone:</strong>
                              <a href={`tel:${siteSettings.phone}`} style={{ color: 'var(--text-muted)' }}>{siteSettings.phone}</a>
                          </div>
                      )}
                      {(siteSettings?.instagramUrl || siteSettings?.facebookUrl) && (
                          <div style={{ marginBottom: '15px' }}>
                              <strong style={{ display: 'block', color: 'var(--text-color)' }}>Socials:</strong>
                              <div style={{ display: 'flex', gap: '15px', marginTop: '5px' }}>
                                  {siteSettings.instagramUrl && (
                                      <a href={siteSettings.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                                          <i className="fa-brands fa-instagram"></i>
                                      </a>
                                  )}
                                  {siteSettings.facebookUrl && (
                                      <a href={siteSettings.facebookUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                                          <i className="fa-brands fa-facebook"></i>
                                      </a>
                                  )}
                              </div>
                          </div>
                      )}
                  </div>

                  {/* Contact Form */}
                  <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form hidden">
                          <input type="hidden" name="access_key" value="108c5cb9-fb62-4b30-b9bb-9c719b841125" />
                          <input type="hidden" name="subject" value="New Contact Form Submission" />
                          <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input type="text" name="name" id="name" placeholder="Your Name" required />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email" id="email" placeholder="Your Email" required />
                          </div>
                          <div className="form-group">
                              <label htmlFor="message">Message</label>
                              <textarea name="message" id="message" rows="5" placeholder="How can I help you?" required></textarea>
                          </div>
                          <button type="submit" className="btn" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>Send Message</button>
                      </form>
                  </div>

              </div>
          </div>
      </section>
    </>
  );
}
