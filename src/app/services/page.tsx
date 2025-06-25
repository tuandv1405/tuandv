import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container">
        <div className="hero">
          <div className="grid-2-cols">
            <div className="hero-text-content" data-aos="fade-right">
              <h1 className="noto-sans-700">Our Services</h1>
              <p>At T.Studio, we offer a comprehensive range of software development services to help businesses of all sizes leverage technology to achieve their goals.</p>
              <Link href="/contact" className="btn" style={{ marginTop: '1rem' }}>Get in Touch</Link>
            </div>
            <div className="hero-image-wrapper" data-aos="fade-left">
              <div className="hero-image-bg-circle"></div>
              <Image 
                src="/software-person.png" 
                alt="Man in a suit using a laptop" 
                className="hero-image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Software Development Section */}
      <section className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="image-wrapper" data-aos="fade-right">
            <Image 
              src="/hero-person.png" 
              alt="Developer holding a laptop"
              width={600}
              height={400}
            />
          </div>
          <div className="text-content" data-aos="fade-left">
            <h2>Custom Software Development</h2>
            <p>We design and develop custom software solutions tailored to your specific business needs. Our team of experienced developers works closely with you to understand your requirements and create software that streamlines your operations and drives growth.</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }} className="btn-group">
              <Link href="/contact" className="btn">Start a Project</Link>
              <Link href="/about" className="btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Web Application Development Section */}
      <section className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="text-content" data-aos="fade-right">
            <h2>Web Application Development</h2>
            <p>We create responsive, user-friendly web applications that help businesses streamline their operations and improve customer engagement. Our web applications are built using the latest technologies and are designed to be scalable, secure, and easy to maintain.</p>
            <Link href="/contact" className="btn" style={{ marginTop: '1rem' }}>Discuss Your Project</Link>
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

      {/* Mobile App Development Section */}
      <section className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="image-wrapper circle-image-wrapper" data-aos="fade-right">
            <Image 
              src="/empower-person.png" 
              alt="Woman sitting on the floor smiling"
              width={500}
              height={500}
            />
          </div>
          <div className="text-content" data-aos="fade-left">
            <h2>Mobile App Development</h2>
            <p>We develop native and cross-platform mobile applications for iOS and Android devices. Our mobile apps are designed to provide a seamless user experience and help businesses connect with their customers on the go.</p>
            <p>Our team has expertise in a wide range of mobile technologies and can help you choose the right approach for your specific needs.</p>
            <Link href="/contact" className="btn" style={{ marginTop: '1rem' }}>Get Started</Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="experience-section section-padding">
        <div className="container">
          <div className="experience-header" data-aos="fade-up">
            <h2>Our Development Process</h2>
            <p>We follow a structured approach to ensure the success of your project.</p>
          </div>
          <div className="experience-grid">
            {/* Step 1 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
              </div>
              <h3>Discovery</h3>
              <p>We work with you to understand your business needs, goals, and challenges.</p>
            </div>
            {/* Step 2 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>
              </div>
              <h3>Planning</h3>
              <p>We create a detailed project plan with timelines, milestones, and deliverables.</p>
            </div>
            {/* Step 3 */}
            <div className="experience-card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>
              </div>
              <h3>Development</h3>
              <p>Our team develops your solution using agile methodologies to ensure quality and flexibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="content-section section-padding container">
        <div className="grid-2-cols">
          <div className="text-content" data-aos="fade-right">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your project and learn how T.Studio can help you achieve your business goals through innovative software solutions.</p>
            <Link href="/contact" className="btn" style={{ marginTop: '1rem' }}>Contact Us</Link>
          </div>
          <div className="image-wrapper" data-aos="fade-left">
            <Image 
              src="/connect-person.png" 
              alt="Smiling woman ready to connect"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
}
