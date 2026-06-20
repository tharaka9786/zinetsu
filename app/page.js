import Link from 'next/link';
import ElfsightWidget from '@/components/ElfsightWidget';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

export const revalidate = 60; // Revalidate the page every 60 seconds

export default async function Home() {
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);
  const aboutSection = await client.fetch(`*[_type == "aboutSection"][0]`);
  const categories = await client.fetch(`*[_type == "category"]`);

  const heroImages = siteSettings?.heroImages || [];
  const siteTitle = siteSettings?.title || "Dananjaya Prasad Photography";
  const siteSubtitle = siteSettings?.subtitle || "Bringing stories to life through the lens. Experience moments frozen in time, blending modern aesthetics with profound emotion.";

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
          <div className="hero-slider">
              {heroImages.length > 0 ? (
                  heroImages.map((img, index) => (
                      <div key={index} className="slide" style={{ backgroundImage: `url('${urlFor(img).url()}')` }}></div>
                  ))
              ) : (
                  <>
                      <div className="slide" style={{ backgroundImage: "url('/images/bg1.JPG')" }}></div>
                      <div className="slide" style={{ backgroundImage: "url('/images/bg2.JPG')" }}></div>
                      <div className="slide" style={{ backgroundImage: "url('/images/bg3.JPG')" }}></div>
                      <div className="slide" style={{ backgroundImage: "url('/images/bg4.jpeg')" }}></div>
                  </>
              )}
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content hidden">
              <h1>{siteTitle}</h1>
              <p>{siteSubtitle}</p>
          </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
          <div className="container">
              <div className="about-content">
                  <div className="about-image hidden">
                      <img 
                          src={aboutSection?.profileImage ? urlFor(aboutSection.profileImage).url() : "/images/profile.jpg"} 
                          alt={aboutSection?.name || "Dhananjaya Prasad - Photographer"} 
                      />
                  </div>
                  <div className="about-text hidden" style={{ transitionDelay: '0.2s' }}>
                      <h2 style={{ fontSize: '2.5rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px' }}>
                          {aboutSection?.heading || "About"}
                      </h2>
                      <h3 style={{ fontSize: '2rem', marginBottom: '5px' }}>
                          {aboutSection?.name || "Dananjaya Prasad"}
                      </h3>
                      <h4 style={{ color: 'var(--text-muted)', fontWeight: 400, marginBottom: '25px', letterSpacing: '1px' }}>
                          {aboutSection?.jobTitle || "Founder & Lead Photographer, Zinetzu"}
                      </h4>
                      
                      {aboutSection?.biography ? (
                          <div style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
                              <PortableText value={aboutSection.biography} />
                          </div>
                      ) : (
                          <>
                              <p>Welcome! I am a professional photographer based in Sri Lanka, dedicated to turning fleeting moments into timeless visual art. Whether capturing the raw energy of commercial events, the elegance of fashion, or the precision of product design, my goal is to tell compelling stories through a lens.</p>
                              <p>I believe exceptional photography lives at the intersection of creative intuition and rigorous science. To back my vision, I am currently pursuing a BA (Hons) in Image Art at the University of Kelaniya, Sri Lanka (Final Year), specializing in lighting physics and color science. Complementing my academic background, I have completed intensive Industrial Training under senior industry veterans, mastering advanced studio workflows, commercial lighting, and professional post-production (Adobe Photoshop, Lightroom, and Premiere Pro).</p>
                              <p>By blending this strong academic foundation with real-world studio expertise, I bring technical precision, adaptability, and creative innovation to every shoot.</p>
                          </>
                      )}
                  </div>
              </div>
          </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="section selected-work">
          <div className="container">
              <h2 className="section-title hidden">Categories</h2>
              
              <div className="portfolio-grid">
                  {categories && categories.length > 0 ? (
                      categories.map((category, index) => (
                          <div key={category._id} className="portfolio-item hidden" style={{ transitionDelay: `${0.2 * index}s` }}>
                              <Link href={`/gallery?category=${category.title}`} style={{ display: 'block', height: '100%' }}>
                                  <img 
                                      src={category.coverImage ? urlFor(category.coverImage).width(800).url() : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                                      alt={category.title} 
                                  />
                                  <div className="portfolio-overlay">
                                      <h3>{category.title}</h3>
                                      <span>View Gallery</span>
                                  </div>
                              </Link>
                          </div>
                      ))
                  ) : (
                      <>
                          <div className="portfolio-item hidden">
                              <Link href="/gallery" style={{ display: 'block', height: '100%' }}>
                                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fashion & Portraiture" />
                                  <div className="portfolio-overlay">
                                      <h3>Fashion & Portraiture</h3>
                                      <span>View Gallery</span>
                                  </div>
                              </Link>
                          </div>
                          <div className="portfolio-item hidden" style={{ transitionDelay: '0.2s' }}>
                              <Link href="/gallery" style={{ display: 'block', height: '100%' }}>
                                  <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Commercial & Event Coverage" />
                                  <div className="portfolio-overlay">
                                      <h3>Commercial & Event Coverage</h3>
                                      <span>View Gallery</span>
                                  </div>
                              </Link>
                          </div>
                      </>
                  )}
              </div>
          </div>
      </section>

      {/* Featured Works Section */}
      <section id="featured" className="section">
          <div className="container">
              <h2 className="section-title hidden">Featured Works</h2>
              <div className="gallery-grid">
                  <div className="gallery-item hidden"><img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured 1" /></div>
                  <div className="gallery-item hidden" style={{ transitionDelay: '0.1s' }}><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured 2" /></div>
                  <div className="gallery-item hidden" style={{ transitionDelay: '0.2s' }}><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured 3" /></div>
                  <div className="gallery-item hidden" style={{ transitionDelay: '0.3s' }}><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured 4" /></div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '40px' }} className="hidden">
                  <Link href="/gallery" className="btn">View All Works</Link>
              </div>
          </div>
      </section>

      {/* Testimonials / Google Reviews Section */}
      <section id="reviews" className="section">
          <div className="container">
              <h2 className="section-title hidden">Client Reviews</h2>
              <p className="hidden" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '40px' }}>See what our clients have to say about their experience.</p>
              
              <div className="reviews-widget-container hidden" style={{ width: '100%', minHeight: '200px' }}>
                  <ElfsightWidget />
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
          <div className="container">
              <h2 className="section-title hidden">Get In Touch</h2>
              <p className="hidden" style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-muted)' }}>Let's create something beautiful together. Fill out the form below.</p>
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
      </section>
    </>
  );
}
