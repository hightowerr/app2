"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ['monospace', 'courier'],
});

// Metadata moved to separate configuration

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet preload"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
          as="style"
        />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
          rel="stylesheet preload"
          as="style"
        />
      </head>
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyK/z0sRAQdc8WQ8mYEp3"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        priority
        onError={(e) => {
          console.error('Bootstrap script failed to load', e);
        }}
      />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link href="/" className="navbar-brand d-flex align-items-center">
              <img 
                src="/pokeball.png" 
                alt="Pokémon" 
                width="40" 
                height="40" 
                className="me-2"
              />
              <span>Pokémon Explorer</span>
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div 
              className="navbar-collapse show" 
              id="navbarNav" 
              data-testid="navbar-collapse"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link 
                    href="/" 
                    className={`nav-link ${pathname === '/' ? 'active' : ''}`} 
                    id="homeNavLink"
                  >
                    <i className="bi bi-house-door me-1"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    href="/pokemon-history" 
                    className={`nav-link ${pathname === '/pokemon-history' ? 'active' : ''}`} 
                    id="historyNavLink"
                  >
                    <i className="bi bi-clock-history me-1"></i>
                    Pokémon History
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
