import Image from "next/image";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container">
        <div className="hero">
          <div className="grid-2-cols">
            <div className="hero-text-content" data-aos="fade-right">
              <h1>Our Experience</h1>
              <p>With over a decade of experience in software development, T.Studio has helped businesses across various industries transform their operations and achieve their goals.</p>
              <Link href="/contact" className="btn" style={{ marginTop: '1rem' }}>Work With Us</Link>
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

      {/* Our Expertise Section */}
      <section className="experience-section section-padding">
        <div className="container">
          <div className="experience-header" data-aos="fade-up">
            <h2>Our Areas of Expertise</h2>
            <p>We specialize in a wide range of technologies and industries.</p>
          </div>
          <div className="experience-grid">
            {/* Expertise 1 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
              </div>
              <h3>Web Development</h3>
              <p>Modern, responsive websites and web applications built with the latest technologies.</p>
            </div>
            {/* Expertise 2 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
              </div>
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile applications for iOS and Android devices.</p>
            </div>
            {/* Expertise 3 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
              </div>
              <h3>Database Design</h3>
              <p>Efficient and scalable database solutions for storing and managing your data.</p>
            </div>
            {/* Expertise 4 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="400">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Cloud Solutions</h3>
              <p>Scalable and reliable cloud infrastructure for your applications and services.</p>
            </div>
            {/* Expertise 5 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="500">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>
              </div>
              <h3>Security</h3>
              <p>Robust security measures to protect your data and ensure compliance with industry standards.</p>
            </div>
            {/* Expertise 6 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="600">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
              </div>
              <h3>Data Analytics</h3>
              <p>Advanced analytics solutions to help you make data-driven decisions for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
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
            <h2>Industries We Serve</h2>
            <p>At T.Studio, we have experience working with businesses across a wide range of industries, including:</p>
            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-subtle)' }}>
              <li>Healthcare</li>
              <li>Finance</li>
              <li>E-commerce</li>
              <li>Education</li>
              <li>Manufacturing</li>
              <li>Logistics</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>Our diverse experience allows us to understand the unique challenges and opportunities in each industry and develop solutions that address specific needs.</p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="text-content" data-aos="fade-right">
            <h2>Success Stories</h2>
            <p>Over the years, we've helped numerous businesses achieve their goals through innovative software solutions. Here are a few examples of our work:</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }} className="btn-group">
              <Link href="/contact" className="btn">View Case Studies</Link>
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>
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
      </section>

      {/* Client Testimonials Section */}
      <section className="experience-section section-padding">
        <div className="container">
          <div className="experience-header" data-aos="fade-up">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it. Here's what our clients have to say about working with T.Studio.</p>
          </div>
          <div className="experience-grid">
            {/* Testimonial 1 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </div>
              <h3>John Smith</h3>
              <p>"T.Studio helped us transform our business with a custom software solution that streamlined our operations and improved our customer experience."</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>CEO, ABC Company</p>
            </div>
            {/* Testimonial 2 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </div>
              <h3>Jane Doe</h3>
              <p>"Working with T.Studio was a pleasure. They took the time to understand our needs and delivered a solution that exceeded our expectations."</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>CTO, XYZ Corporation</p>
            </div>
            {/* Testimonial 3 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </div>
              <h3>Michael Johnson</h3>
              <p>"T.Studio's team was professional, responsive, and delivered our project on time and within budget. We couldn't be happier with the results."</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>COO, 123 Industries</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
