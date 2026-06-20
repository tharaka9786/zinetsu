"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // Don't render the Footer if we are in the Sanity Admin Studio
  if (pathname && pathname.startsWith('/studio')) {
    return null;
  }

  return (
    <footer>
        <div className="container footer-content hidden">
            <div className="social-links">
                <a href="https://www.facebook.com/share/1EX8YmSb11/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://wa.me/qr/WRTX7GHQJML2M1" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/dananjaya6275?igsh=amhoMWcydHkwbnli" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/dananjaya-prasad-6039ba387?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:dananjayaprasad96@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dhananjaya prasad. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
