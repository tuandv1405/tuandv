import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="about" className="container">
        <div className="hero">
          <div className="grid-2-cols">
            <div className="hero-text-content" data-aos="fade-right">
              <h1>About T.Studio</h1>
              <p>T.Studio is a leading software company that has been providing innovative solutions for businesses of all sizes since 2010.</p>
              <Link href="/services" className="btn" style={{ marginTop: '1rem' }}>Explore Our Work</Link>
            </div>
            <div className="hero-image-wrapper" data-aos="fade-left">
              <div className="hero-image-bg-circle"></div>
              <Image 
                src="/hero-person.png" 
                alt="Developer holding a laptop" 
                className="hero-image"
                width={500}
                height={500}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
          <div className="hero-tabs" data-aos="fade-up" data-aos-delay="200">
            <div className="hero-tabs-links">
              <span>Meet The Team</span>
              <span>Our Expertise</span>
              <span>Our Approach</span>
            </div>
            <Link href="/contact" className="btn">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Innovative Software Section */}
      <section id="services" className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="image-wrapper" data-aos="fade-right">
            <Image 
              src="/software-person.png" 
              alt="Man in a suit using a laptop"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content" data-aos="fade-left">
            <h2>Innovative Software Solutions for Your Business</h2>
            <p>At T.Studio, we understand that every business is unique. Our team of experts works closely with you to understand your pain points and develop customized software that streamlines your operations, boosts productivity, and drives growth.</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }} className="btn-group">
              <Link href="/contact" className="btn">Get a Demo</Link>
              <Link href="/services" className="btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section section-padding">
        <div className="container">
          <div className="experience-header" data-aos="fade-up">
            <h2>Experience the Power of T.Studio Software</h2>
          </div>
          <div className="experience-grid">
            {/* Card 1 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
              </div>
              <h3>Customization</h3>
              <p>Tailored solutions designed specifically for your unique business needs and challenges.</p>
            </div>
            {/* Card 2 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Performance</h3>
              <p>High-performance software solutions that help your business operate more efficiently.</p>
            </div>
            {/* Card 3 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>
              </div>
              <h3>Security</h3>
              <p>Robust security measures to protect your data and ensure compliance with industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="contact" className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="image-wrapper" data-aos="fade-right">
            <Image 
              src="/connect-person.png" 
              alt="Smiling woman ready to connect"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content" data-aos="fade-left">
            <h2>Connect with T.Studio</h2>
            <p>Ready to start a project or just want to say hi? We'd love to hear from you.</p>
            <div className="connect-grid">
              <Link href="/contact" className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                <span>Call Us</span>
              </Link>
              <Link href="/contact" className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 11.5c0 2.39.998 4.594 2.625 6.108M12 20.25v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v3.375M12 20.25a1.5 1.5 0 01-1.5-1.5v-2.25a1.5 1.5 0 011.5-1.5h2.25a1.5 1.5 0 011.5 1.5v2.25a1.5 1.5 0 01-1.5 1.5M12 20.25h.008v.008H12v-.008z" /></svg>
                <span>Follow Us</span>
              </Link>
              <Link href="/contact" className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <span>Email Us</span>
              </Link>
              <Link href="/contact" className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.5-12.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75z" /></svg>
                <span>Visit Us</span>
              </Link>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }} className="btn-group">
              <Link href="/contact" className="btn">Contact Us</Link>
              <Link href="/contact" className="btn-secondary">Stay Connected</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
