
import React, { useEffect } from 'react';
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import aboutHeader from '../img/about-header.jpg';
import softwareImage from '../img/about-image.jpg';
//import teamMember1 from '../img/team/Padmakumar.png';
//import teamMember2 from '../img/team/Sundaramoorthy.png';
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
                            <h2>Empowering Innovations;</h2><h2> Intelligent Solutions</h2>
                        </div>
                        <div className="row gy-4 align-items-center" data-aos="fade-up">
                            <div className="col-lg-6">
                                <img src={softwareImage} className="img-fluid" alt="UpstartAI: Empowering Innovations" title="UpstartAI: Empowering Innovations" />
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

                <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4 aos-init">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card-body">
                                                <h4 className="card-title">Vision</h4>
                                                <p>At UpstartAI, we aim to drive innovation and excellence by leveraging our expertise in scalability, change management, digital transformation, and process automation. Collaborating with top-tier partners, we are committed to delivering intelligent solutions that shape a brighter future for our clients and the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 aos-init">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card-body">
                                                <h4 className="card-title">Mission</h4>
                                                <p>We strive to democratize scalable advanced analytics, making it accessible and actionable for all businesses that may have previously been underserved in this transformative digital era.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card-body">
                                                <h4 className="card-title">Our Values</h4>
                                                <p>Going the extra mile, humankind serving humankind, delivering lasting value with uncompromising integrity and dedication.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
                    <div className="container">
                        <div className="section-header">
                            <h2>Meet Our Team</h2>
                            <p>At UpstartAI, our leadership team brings together diverse expertise and a shared commitment to innovation, excellence, and client success.</p>
                        </div>
                        <div className="row member d-flex align-items-center ">
                         {/*   <div className="col-md-2">
                                <div className="pic"><img className="img-fluid" alt="TanuShree" /></div>
                            </div> */}
                            <div className="col-md-10">
                                <div className="member-info">
                                    <h4>Tanu Shree</h4>
                                    <span>Co-Founder</span>
                                   <p>Tanu Shree, our accomplished co-founder, is a Data Scientist with a proven track record of leveraging data-driven insights to drive business growth and innovation. With extensive experience in data analysis, machine learning, and statistical modeling, Tanu Shree has mastered the art of extracting valuable insights from complex datasets and solving even the most challenging problems.</p> 
                                    <div className="social">
                                        <Link to="/"><i className="bi bi-twitter"></i></Link>
                                        <Link to="/"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row member d-flex align-items-center mt-4">
                             {/*<div className="col-md-2">
                               <div className="pic"><img src={teamMember2} className="img-fluid" alt="V.Sundaramoorthy" /></div> 
                            </div>*/}
                            <div className="col-md-10">
                                <div className="member-info">
                                    <h4>Zikra Azhar</h4>
                                    <span>Co-Founder</span>
                                    <p>Zikra, our diligent co-founder, is driven by a passion for innovation and problem-solving. With a keen eye for detail and a robust technical foundation, she excels at tackling complex challenges and bringing fresh ideas to product development.</p>
                                   
                                    <div className="social">
                                        <Link to="/"><i className="bi bi-twitter"></i></Link>
                                        <a href="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                      </div>
                           
                        

                      <div className="row member d-flex align-items-center mt-4">
                             {/*<div className="col-md-2">
                               <div className="pic"><img src={teamMember2} className="img-fluid" alt="V.Sundaramoorthy" /></div> 
                            </div>*/}
                            <div className="col-md-10">
                                <div className="member-info">
                                    <h4>Ajay Kumar</h4>
                                    <span>Co-Founder</span>
                                    <p>Ajay is a motivated data engineer with a knack for transforming raw data into actionable insights. His analytical mindset and attention to detail enable him to effectively clean, organize, and analyze data to drive decision-making processes.</p>
                                    
                                    <div className="social">
                                        <Link to="/"><i className="bi bi-twitter"></i></Link>
                                        <a href="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                       </div>
                       

                      

         </div>
   </section>

            </main>
            <Footer />
        </>
    )
}

export default About;
