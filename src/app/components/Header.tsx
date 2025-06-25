import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="logo">T.Studio</Link>
          <div className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <Link href="/contact" className="btn">Learn More</Link>
        </nav>
      </div>
    </header>
  );
}