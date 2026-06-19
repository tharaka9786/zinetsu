export default function Contact() {
  return (
    <>
      <div className="page-header">
          <h1 className="hidden">Contact Us</h1>
      </div>

      <section className="section">
          <div className="container">
              <h2 className="section-title hidden">Get In Touch</h2>
              <p className="hidden" style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-muted)' }}>Let's create something beautiful together. Fill out the form below.</p>
              
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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
      </section>
    </>
  );
}
