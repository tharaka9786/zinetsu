"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
        <div className="nav-container">
            <Link href="/" className="logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }}>
                <Image 
                    src="/images/Logo.png" 
                    alt="Dhananjaya Prasad Photography" 
                    width={200} 
                    height={40} 
                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
            </Link>
            
            <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                <li><Link href="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
                <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
                <li className="nav-dropdown">
                    <Link href="/gallery">Gallery <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.7em', marginLeft: '3px' }}></i></Link>
                    <ul className="dropdown-content">
                        <li><Link href="/gallery" onClick={closeMenu}>All Works</Link></li>
                        <li><Link href="/featured-works" onClick={closeMenu}>Feature</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </div>
    </header>
  );
}
