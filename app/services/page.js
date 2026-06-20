import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Services() {
  const servicePackages = await client.fetch(`*[_type == "servicePackage"]`);

  return (
    <>
      <div className="page-header">
          <h1 className="hidden">Our Services</h1>
      </div>

      <section className="section">
          <div className="container">
              <p className="services-intro hidden">We combine advanced visual science, high-end studio lighting, and creative intuition to deliver commercial-grade imagery. Utilizing professional full-frame Sony systems, premium Sigma Art optics, and cutting-edge post-production workflows, we provide tailored photography solutions designed to elevate your brand and capture your milestones.</p>
              
              <div className="services-grid">
                  {servicePackages && servicePackages.length > 0 ? (
                      servicePackages.map((pkg, index) => (
                          <div key={pkg._id} className="service-card hidden" style={{ transitionDelay: `${0.1 * (index + 1)}s` }}>
                              {pkg.coverImage && (
                                  <img 
                                      src={urlFor(pkg.coverImage).width(600).url()} 
                                      alt={pkg.title} 
                                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }}
                                  />
                              )}
                              <h3>{pkg.title}</h3>
                              {pkg.price && <div className="service-subtitle" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{pkg.price}</div>}
                              <p>{pkg.description}</p>
                              
                              {pkg.features && pkg.features.length > 0 && (
                                  <ul style={{ paddingLeft: '20px', marginTop: '15px', color: 'var(--text-muted)' }}>
                                      {pkg.features.map((feature, i) => (
                                          <li key={i} style={{ marginBottom: '5px' }}>{feature}</li>
                                      ))}
                                  </ul>
                              )}
                          </div>
                      ))
                  ) : (
                      <>
                          {/* Fallback Service 1 */}
                          <div className="service-card hidden" style={{ transitionDelay: '0.1s' }}>
                              <h3>1. Fashion & Editorial Portraiture</h3>
                              <div className="service-subtitle">Bringing concepts to life with style and cultural depth.</div>
                              <p>We specialize in high-end fashion and portrait photography that tells a story. By blending modern editorial aesthetics with traditional cultural motifs and historical patterns, we create unique, visually striking portraits. Whether it is a studio environment or an outdoor location, we masterfully control light to highlight personality, fabric textures, and cinematic moods.</p>
                              <div className="service-perfect-for">Perfect for: Fashion brands, model portfolios, conceptual shoots, and creative portraits.</div>
                          </div>

                          {/* Fallback Service 2 */}
                          <div className="service-card hidden" style={{ transitionDelay: '0.2s' }}>
                              <h3>2. Commercial & Event Coverage</h3>
                              <div className="service-subtitle">Sharp, high-energy documentation of your landmark moments.</div>
                              <p>From large-scale corporate conventions and tech community events to high-tempo cultural concerts, we deliver comprehensive digital media coverage. We thrive in fast-paced, dynamic environments, ensuring that key moments, crowd energy, and brand presence are captured with absolute clarity and precision.</p>
                              <div className="service-perfect-for">Perfect for: Corporate events, concerts, university milestones, and community gatherings.</div>
                          </div>

                          {/* Fallback Service 3 */}
                          <div className="service-card hidden" style={{ transitionDelay: '0.3s' }}>
                              <h3>3. Product & Advertising Photography</h3>
                              <div className="service-subtitle">Precision-focused imagery built to make your brand stand out.</div>
                              <p>Great product photography requires absolute control over shadows, highlights, and contrast. Using advanced studio lighting workflows and specialized techniques like light painting, we capture products with immaculate detail and strict color accuracy. We create high-impact visuals that grab attention and drive conversions.</p>
                              <div className="service-perfect-for">Perfect for: E-commerce stores, print advertising, social media marketing, and menu designs.</div>
                          </div>
                      </>
                  )}
              </div>

              {/* Digital Workflow Standard */}
              <div className="workflow-section hidden" style={{ transitionDelay: '0.5s' }}>
                  <h2>The Digital Workflow Standard</h2>
                  <div className="workflow-subtitle">Every service we provide includes a premium, modern post-production pipeline</div>
                  
                  <ul className="workflow-list">
                      <li>
                          <i className="fa-solid fa-microchip"></i>
                          <div>
                              <strong style={{ color: 'var(--text-color)', fontSize: '1.1rem' }}>AI-Assisted Photo Culling</strong>
                              <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Speeding up delivery times by instantly filtering for the absolute best expressions and sharpest focuses.</p>
                          </div>
                      </li>
                      <li>
                          <i className="fa-solid fa-sliders"></i>
                          <div>
                              <strong style={{ color: 'var(--text-color)', fontSize: '1.1rem' }}>Advanced Editing & Retouching</strong>
                              <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Meticulous color grading, masking, and digital manipulation using industry-standard Adobe software to ensure absolute color accuracy (Hue, Saturation, and Contrast).</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </section>
    </>
  );
}
