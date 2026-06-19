import { client } from '@/sanity/lib/client';
import { galleryQuery } from '@/sanity/lib/queries';
import GalleryFilter from '@/components/GalleryFilter';
import Image from 'next/image';

export const revalidate = 30; // revalidate at most every 30 seconds

export default async function Gallery() {
  const images = await client.fetch(galleryQuery);

  return (
    <>
      <div className="page-header">
          <h1 className="hidden">Image Gallery</h1>
      </div>

      <section className="section">
          <div className="container">
              <GalleryFilter defaultRoute="/gallery" />
              
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
                                alt={img.title || "Gallery Image"} 
                              />
                          </div>
                      ))
                  ) : (
                      <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No images found. Upload some in the Studio!</p>
                  )}
              </div>
          </div>
      </section>
    </>
  );
}
