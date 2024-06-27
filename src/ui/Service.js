
import React from "react";
import education from "../img/software.jpg";
import entertainment from "../img/AIML.jpg";
import games from "../img/analytics.jpg";
import sports from "../img/embedded software.jpg";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img={serviceHeader} />

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                We are a
                <span style={{ color: "#155bd5" }}> LEADING INNOVATOR</span>{" "}
                delivering advanced services in Software Development, AI/ML
                Development, Embedded Hardware, and Analytics & Reporting.
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={education}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-code-slash" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> <strong>Software Development</strong> </h4>
                  <p className="description text-justify">
                    At <strong>UpstartAI</strong>, we are dedicated to
                    transforming business operations with our top-tier,
                    plug-and-play software solutions. We understand that every
                    business, from burgeoning small enterprises to established
                    legendary brands, faces unique challenges. That's why we
                    design and tailor our innovative products to meet your
                    specific needs, acting as a steadfast backbone to your
                    success.
                  </p>
                  <p className="description text-justify">
                    Our solutions are developed in collaboration with industry
                    leaders and visionary innovators, ensuring that we provide
                    futuristic and unique products that effectively address and
                    neutralize the pain points throughout your business
                    lifecycle. Whether you desire seamless integration, enhanced
                    efficiency, innovation and creativity, or cutting-edge
                    technology, our plug-and-play solutions are designed to
                    empower your business, streamline processes, and drive
                    growth.
                  </p>
                  <p className="description text-justify">
                    Partner with us and experience the future of business software
                    solutions, today. Let your workplace <strong>work</strong> for{" "}
                    <strong>you</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-robot" style={{ color: "#15a04a" }}></i>
                </div>
                <div>
                  <h4 className="title"> <strong>AI/ML Development</strong> </h4>
                  <p className="description text-justify">
                    At <strong>UpstartAI</strong>, we excel in advising,
                    developing, implementing, and strategizing solutions to
                    eliminate obstacles in your business. Our expertise spans
                    scalability, change management, digital transformation, and
                    process automation, ensuring comprehensive and intelligent
                    solutions for every challenge.
                  </p>
                  <p className="description text-justify">
                    From meticulous data reporting to leveraging advanced
                    analytics, we leave no stone unturned in delivering
                    perfection. Our innovative products bring the world closer
                    to a brighter future, created in collaboration with top-tier
                    innovation and quality partners. We empower clients by
                    predicting future trends, addressing present needs, and
                    resolving past challenges.
                  </p>
                  <p className="description text-justify">
                    By integrating our core competencies with your systems, we
                    present a visionary future for your business. We guide you
                    in making the right choices, the cornerstone of success. Our
                    solutions not only enhance efficiency but also help you
                    achieve a better work-life balance, reducing stress and
                    freeing you to focus on creative pursuits. Partner with
                    <strong> UpstartAI </strong> to transform your business and
                    experience unparalleled growth and innovation.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={entertainment} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Games">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={games} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart" style={{ color: "#f5cf13" }}></i>
                </div>
                <div>
                  <h4 className="title"> <strong>Analytics & Reporting</strong> </h4>
                  <p className="description text-justify">
                    Welcome to <strong>UpstartAI</strong>, where reality meets
                    innovation in the digital world! We're a team of wildly
                    creative minds fused with deep technological expertise.
                    Specializing in website development, redesigning, social
                    media management, email campaigns, SEO, digital marketing,
                    e-commerce, and content creation, we've honed our craft
                    through diverse client collaborations and top-tier institute
                    insights.
                  </p>
                  <p className="description text-justify">
                    We provide advanced data visualization, intuitive dashboards,
                    and comprehensive reports that highlight key performance
                    indicators and trends. By leveraging our analytics solutions,
                    businesses can gain a deeper understanding of their
                    operations, identify opportunities for improvement, and drive
                    strategic initiatives with confidence.
                  </p>
                  <p className="description text-justify">
                    At <strong>UpstartAI</strong>, we redefine creativity with a
                    practical edge. Clients love us for our unique blend of
                    imaginative solutions and tangible results. Expect not just
                    quality but a delightful surprise in the returns we deliver.
                    Let's turn your digital dreams into thriving realities.
                    Elevate your business with <strong>UpstartAI</strong> today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Sports">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-motherboard" style={{ color: "#1335f5" }}></i>
                </div>
                <div>
                  <h4 className="title"> <strong>Embedded Hardware</strong> </h4>
                  <p className="description text-justify">
                    At <strong>UpstartAI</strong>, we specialize in developing
                    premium plug-and-play hardware embedded with intelligent
                    software designed to elevate businesses. Our cutting-edge
                    products address critical issues that impede growth and pose
                    risks, delivering life-changing solutions that justify every
                    investment.
                  </p>
                  <p className="description text-justify">
                    By partnering with top-tier innovators and quality-driven
                    leaders, we create systems that can save lives on one hand
                    and provide unparalleled security on the other. Our
                    technology offers real-time control over remote spaces,
                    significantly extending the reach and presence of our clients.
                  </p>
                  <p className="description text-justify">
                    We are committed to making our advanced solutions accessible
                    to small businesses while providing immense value to large
                    corporations. At the core of our mission is a dedication to
                    honesty, client care, and the development of safe, reliable
                    products that become indispensable assets. Trust{" "}
                    <strong>UpstartAI</strong> to bring you futuristic, unique
                    solutions that redefine your business operations and drive
                    success.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={sports} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
