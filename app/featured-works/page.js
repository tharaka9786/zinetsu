import { client } from '@/sanity/lib/client';
import { featuredGalleryQuery } from '@/sanity/lib/queries';
import GalleryFilter from '@/components/GalleryFilter';
import Image from 'next/image';

export const revalidate = 30; // revalidate at most every 30 seconds

export default async function FeaturedWorks() {
  const images = await client.fetch(featuredGalleryQuery);

  return (
    <>
      <div className="page-header">
          <h1 className="hidden">Featured Works</h1>
      </div>

      <section className="section">
          <div className="container">
              <GalleryFilter defaultRoute="/featured-works" />
              
              <div className="gallery-grid">
                  {images && images.length > 0 ? (
                      images.map((img, index) => (
                          <div 
                              className="gallery-item hidden" 
                              key={img._id} 
                              style={{ transitionDelay: `${(index % 6) * 0.1}s` }}
                          >
                              <img 
                                src={img.imageUrl} 
                                alt={img.title || "Featured Image"} 
                              />
                          </div>
                      ))
                  ) : (
                      <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No featured images found. Add some in the Studio and select "Feature" as the category!</p>
                  )}
              </div>
          </div>
      </section>
    </>
  );
}
