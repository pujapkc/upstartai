import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we do? </h2>
            <p>
              "Empowering businesses with innovative software solutions and cutting-edge technology to drive growth and efficiency."
            </p>
          </div>
          <div className="row gy-5">
            <div className="col-lg-6 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="single-service card gradient-1 d-flex flex-column h-100">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-code-slash" style={{ color: "#f57813" }}></i>
                </div>
                <div className="flex-grow-1">
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Software Development
                    </Link>
                  </h4>
                  <p className="description">
                    <ul>
                      <li> Website Designing and Development </li>
                      <li> Debugging and Testing</li>
                      <li> UI/UX enhancement </li>
                      <li> Search Engine Optimization </li>
                      <li> Digital marketing</li>
                      <li> Content Marketing </li>
                      <li> Email and Newsletters</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <Link to="/services" className="btn-get-started mt-auto">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="single-service card gradient-2 d-flex flex-column h-100">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-graph-up" style={{ color: "#15a04a" }}></i>
                </div>
                <div className="flex-grow-1">
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Analytics and Reporting
                    </Link>
                  </h4>
                  <p className="description">
                    <ul>
                      <li> Inventory Management </li>
                      <li> Anomaly Detection </li>
                      <li> Marketing Analysis </li>
                      <li> Revenue / Cost Management </li>
                      <li> Intelligent Dashboards</li>
                      <li> Fintech and Financial Services</li>
                      <li> Performance Management</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <Link to="/services" className="btn-get-started mt-auto">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="single-service card gradient-3 d-flex flex-column h-100">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-robot" style={{ color: "#15a04a" }}></i>
                </div>
                <div className="flex-grow-1">
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      AI/ML Solution
                    </Link>
                  </h4>
                  <p className="description">
                    <ul>
                      <li> AI/ML Models </li>
                      <li> Gen AI Support & LLM Applications</li>
                      <li> Computer Vision/ NLP </li>
                      <li> Video Analytics </li>
                      <li> AR/VR </li>
                      <li> Proof of concepts </li>
                      <li> Geospatial Intelligence</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <Link to="/services" className="btn-get-started mt-auto">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <div className="single-service card gradient-4 d-flex flex-column h-100">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-cpu" style={{ color: "#1335f5" }}></i>
                </div>
                <div className="flex-grow-1">
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Embedded Hardware
                    </Link>
                  </h4>
                  <p className="description">
                    <ul>
                      <li> IT Asset/Data Management </li>
                      <li> Technology Upgrade</li>
                      <li> Networking </li>
                      <li> Security Cameras and Biometric </li>
                      <li> Data driven IOT Solutions </li>
                      <li> Migration to Cloud </li>
                      <li> Drones</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <Link to="/services" className="btn-get-started mt-auto">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
