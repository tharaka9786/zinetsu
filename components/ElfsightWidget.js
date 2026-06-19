"use client";

import { useEffect } from 'react';

export default function ElfsightWidget() {
  useEffect(() => {
    // Load the Elfsight script only after the component has mounted (client-side)
    // This prevents Next.js hydration errors.
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    
    // Check if the script is already added to avoid duplicates
    const existingScript = document.querySelector(`script[src="${script.src}"]`);
    if (!existingScript) {
      document.body.appendChild(script);
    }

    return () => {
      // Optional: Cleanup if needed when component unmounts
    };
  }, []);

  return (
    <div className="elfsight-app-1e24fc4f-19f8-4807-9325-bdfefee17186" data-elfsight-app-lazy></div>
  );
}
