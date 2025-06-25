import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-logo-col">
          <Link href="/" className="logo">T.Studio</Link>
          <p>&copy; {new Date().getFullYear()} T.Studio, Inc. <br /> All rights reserved.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect with Us</h4>
          <ul>
            <li><Link href="https://facebook.com" target="_blank">Facebook</Link></li>
            <li><Link href="https://twitter.com" target="_blank">Twitter</Link></li>
            <li><Link href="https://linkedin.com" target="_blank">LinkedIn</Link></li>
            <li><Link href="https://instagram.com" target="_blank">Instagram</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}