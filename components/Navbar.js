"use client";

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header>
        <div className="nav-container">
            <Link href="/" className="logo">
                <Image 
                    src="/images/Logo.png" 
                    alt="Dhananjaya Prasad Photography" 
                    width={250} 
                    height={40} 
                    style={{ objectFit: 'contain' }}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/250x40/000000/FFFFFF?text=DHANANJAYA+PRASAD";
                    }}
                />
            </Link>
            <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li className="nav-dropdown">
                    <Link href="/gallery">Gallery <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.7em', marginLeft: '3px' }}></i></Link>
                    <ul className="dropdown-content">
                        <li><Link href="/gallery">All Works</Link></li>
                        <li><Link href="/featured-works">Feature</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </div>
    </header>
  );
}
