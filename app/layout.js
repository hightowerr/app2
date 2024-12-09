import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import { useEffect } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pokémon Explorer",
  description: "Explore the world of Pokémon",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically load Bootstrap's JavaScript
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet"
        />
        {/* Bootstrap Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link href="/" className="navbar-brand d-flex align-items-center">
              <img 
                src="/pokeball.png" 
                alt="Pokémon" 
                width="30" 
                height="30" 
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
              className="navbar-collapse collapse" 
              id="navbarNav" 
              data-testid="navbar-collapse"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className="nav-link" id="homeNavLink">
                    <i className="bi bi-house-door me-1"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/pokemon-history" className="nav-link" id="historyNavLink">
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
