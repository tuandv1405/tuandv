import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container">
        <div className="hero">
          <div className="grid-2-cols">
            <div className="hero-text-content" data-aos="fade-right">
              <h1>About T.Studio</h1>
              <p>T.Studio is a leading software company that has been providing innovative solutions for businesses of all sizes since 2010. Our mission is to help businesses leverage technology to achieve their goals.</p>
              <Link href="/services" className="btn" style={{ marginTop: '1rem' }}>Our Services</Link>
            </div>
            <div className="hero-image-wrapper" data-aos="fade-left">
              <div className="hero-image-bg-circle"></div>
              <Image 
                src="/hero-person.png" 
                alt="Developer holding a laptop" 
                className="hero-image"
                width={500}
                height={500}
                style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="image-wrapper circle-image-wrapper" data-aos="fade-right">
            <Image 
              src="/potential-person.png" 
              alt="Woman working at a desk"
              width={500}
              height={500}
            />
          </div>
          <div className="text-content" data-aos="fade-left">
            <h2>Our Story</h2>
            <p>Founded in 2010, T.Studio began with a simple mission: to create software that makes a difference. Our founders recognized that many businesses were struggling to find software solutions that truly met their unique needs.</p>
            <p>Over the years, we've grown from a small team of passionate developers to a full-service software company with expertise in a wide range of technologies and industries. Despite our growth, we've maintained our commitment to personalized service and innovative solutions.</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="text-content" data-aos="fade-right">
            <h2>Our Team</h2>
            <p>At T.Studio, our team is our greatest asset. We've assembled a diverse group of talented professionals who are passionate about technology and committed to delivering exceptional results for our clients.</p>
            <p>Our team includes experienced developers, designers, project managers, and business analysts who work together to create comprehensive software solutions that address all aspects of your business needs.</p>
            <Link href="/contact" className="btn" style={{ marginTop: '1rem' }}>Meet Our Team</Link>
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

      {/* Our Values Section */}
      <section className="experience-section section-padding">
        <div className="container">
          <div className="experience-header" data-aos="fade-up">
            <h2>Our Values</h2>
            <p>These core values guide everything we do at T.Studio.</p>
          </div>
          <div className="experience-grid">
            {/* Value 1 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
              </div>
              <h3>Innovation</h3>
              <p>We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
            </div>
            {/* Value 2 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
              </div>
              <h3>Collaboration</h3>
              <p>We work closely with our clients to ensure that our solutions truly meet their needs.</p>
            </div>
            {/* Value 3 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>
              </div>
              <h3>Excellence</h3>
              <p>We are committed to delivering high-quality solutions that exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
