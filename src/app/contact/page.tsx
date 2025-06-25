import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container">
        <div className="hero">
          <div className="grid-2-cols">
            <div className="hero-text-content" data-aos="fade-right">
              <h1 className="noto-sans-700">Contact Us</h1>
              <p>Ready to start a project or have questions about our services? We'd love to hear from you. Get in touch with our team today.</p>
              <Link href="#contact-form" className="btn" style={{ marginTop: '1rem' }}>Get in Touch</Link>
            </div>
            <div className="hero-image-wrapper" data-aos="fade-left">
              <div className="hero-image-bg-circle"></div>
              <Image 
                src="/connect-person.png" 
                alt="Smiling woman ready to connect" 
                className="hero-image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="content-section section-padding container">
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
            <h2>Get in Touch</h2>
            <p>We're here to help you with all your software development needs. Reach out to us using any of the following methods:</p>

            <div className="connect-grid" style={{ marginTop: '2rem' }}>
              <div className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</h3>
                  <p style={{ margin: 0 }}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h3>
                  <p style={{ margin: 0 }}>info@tstudio.com</p>
                </div>
              </div>
              <div className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Address</h3>
                  <p style={{ margin: 0 }}>123 Tech Street, Suite 456<br />San Francisco, CA 94107</p>
                </div>
              </div>
              <div className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Hours</h3>
                  <p style={{ margin: 0 }}>Monday - Friday: 9am - 5pm<br />Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="experience-section section-padding">
        <div className="container">
          <div className="experience-header" data-aos="fade-up">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          <div className="grid-2-cols" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="text-content" data-aos="fade-right">
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }} 
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your email" 
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }} 
                  />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }} 
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message" 
                    rows={5}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: '1px solid #ddd',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }} 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="image-wrapper circle-image-wrapper" data-aos="fade-left">
              <Image 
                src="/potential-person.png" 
                alt="Woman working at a desk"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="text-content" data-aos="fade-right">
            <h2>Follow Us</h2>
            <p>Stay connected with us on social media for the latest news, updates, and insights.</p>
            <div className="connect-grid">
              <Link href="https://facebook.com/kuntun1405" target="_blank" className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span>Facebook</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                <span>Twitter</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span>LinkedIn</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="connect-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>Instagram</span>
              </Link>
            </div>
          </div>
          <div className="image-wrapper" data-aos="fade-left">
            <Image 
              src="/empower-person.png" 
              alt="Woman sitting on the floor smiling"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding container">
        <div data-aos="fade-up">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Visit Our Office</h2>
          <div style={{ 
            width: '100%', 
            height: '400px', 
            backgroundColor: 'var(--bg-accent-light)', 
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p>Map would be embedded here</p>
          </div>
        </div>
      </section>
    </>
  );
}
