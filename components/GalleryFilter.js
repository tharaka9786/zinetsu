"use client";

import { useRouter } from 'next/navigation';

export default function GalleryFilter({ defaultRoute }) {
  const router = useRouter();

  return (
    <div className="gallery-filters" style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', display: 'inline-block', left: '50%', transform: 'translateX(-50%)' }}>
        <select 
            id="gallery-category" 
            onChange={(e) => { if(e.target.value) router.push(e.target.value); }} 
            style={{ padding: '12px 24px', fontFamily: "'Inter', sans-serif", fontSize: '1rem', background: 'transparent', color: 'var(--text-color)', border: '1px solid var(--border-color)', borderRadius: '4px', cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none', textAlign: 'center', paddingRight: '40px' }}
            defaultValue={defaultRoute}
        >
            <option value="/gallery" style={{ background: 'var(--bg-color)', color: 'var(--text-color)' }}>All Works</option>
            <option value="/featured-works" style={{ background: 'var(--bg-color)', color: 'var(--text-color)' }}>Feature</option>
        </select>
        <div style={{ pointerEvents: 'none', position: 'absolute', right: '15px', top: '0', bottom: '0', display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.8rem' }}></i>
        </div>
    </div>
  );
}
