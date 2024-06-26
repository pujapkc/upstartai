import React, { useEffect } from 'react';
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import aboutHeader from '../img/about-header.jpg';
import softwareVideo from '../img/aboutus.mp4'; // Import your video file
import InnerHeader from '../components/InnerHeader';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <InnerHeader />
            <InnerHeaderBanner name={"About Us"} img={aboutHeader} />

            <main id="main">
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Empowering Innovations</h2><h2> Intelligent Solutions</h2>
                        </div>
                        <div className="row gy-4 align-items-center" data-aos="fade-up">
                            <div className="col-lg-6">
                                {/* Replace img tag with video tag */}
                                <video src={softwareVideo} className="img-fluid" autoPlay loop muted controls>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="col-lg-6">
                                <p>Welcome to UpstartAI, where our passion lies in our clients' success. We believe their growth fuels our own, fostering enduring partnerships rooted in harmony and collaboration. At UpstartAI, we're dedicated to pioneering software and hardware solutions that redefine business operations in the digital age.
                                </p>
                                <p>Our expertise isn't just theoretical; it's practical, honed over decades of hands-on experience and close collaboration with leading institutes and influential bodies in managing public digital infrastructure. These partnerships ensure our solutions are not only cutting-edge but also grounded in real-world applicability and security.
                               </p>
                                <p>From advanced software solutions that streamline operations and boost efficiency to innovative hardware products that set new industry standards, our offerings are crafted in collaboration with top innovators and quality-driven leaders. This ensures they meet rigorous security and performance standards while delivering tangible value and peace of mind to our clients.
                               </p>
                                <p>At UpstartAI, we value long-term partnerships that go beyond mere service delivery. We're committed to nurturing relationships built on trust, transparency, and a shared vision of success. Our approach blends creativity with practicality, ensuring each solution we deliver not only excels technically but also aligns seamlessly with our clients' strategic goals.
                                </p>
                                <p>Join us at UpstartAI to build a world where innovation thrives, partnerships flourish, and digital transformation fuels sustainable growth. Experience the difference of working with a team dedicated to your success and driven by the promise of creating a brighter future through technology and collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Remaining sections and cards omitted for brevity */}

            </main>
            <Footer />
        </>
    )
}

export default About;
