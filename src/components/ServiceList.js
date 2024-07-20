import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const ServiceList = () => {
  const [isVisible, setIsVisible] = useState({});
  const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          ) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          } else {
            setIsVisible(prev => ({ ...prev, [index]: false }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we do?</h2>
            <p>
              "Empowering businesses with innovative software solutions and cutting-edge technology to drive growth and efficiency."
            </p>
          </div>
          <div className="row gy-5">
            {[0, 1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-6 service-item d-flex"
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div
                  className={`single-service card gradient-${index + 1} d-flex flex-column h-100 ${isVisible[index] ? 'animate' : ''}`}
                  ref={el => (serviceRefs.current[index] = el)}
                >
                  <div className="icon flex-shrink-0">
                    <i
                      className={`bi bi-${index === 0 ? 'code-slash' : index === 1 ? 'graph-up' : index === 2 ? 'robot' : 'cpu'}`}
                      style={{ color: index === 0 ? '#f57813' : index === 1 ? '#15a04a' : index === 2 ? '#15a04a' : '#1335f5' }}
                    ></i>
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="title">
                      <Link to="/services" className="stretched-link">
                        {index === 0 ? 'Software Development' : index === 1 ? 'Analytics and Reporting' : index === 2 ? 'AI/ML Solution' : 'Embedded Hardware'}
                      </Link>
                    </h4>
                    <p className="description">
                      <ul>
                        {index === 0 && <>
                          <li> Website Designing and Development </li>
                          <li> Debugging and Testing</li>
                          <li> UI/UX enhancement </li>
                          <li> Search Engine Optimization </li>
                          <li> Digital marketing</li>
                          <li> Content Marketing </li>
                          <li> Email and Newsletters</li>
                        </>}
                        {index === 1 && <>
                          <li> Inventory Management </li>
                          <li> Anomaly Detection </li>
                          <li> Marketing Analysis </li>
                          <li> Revenue / Cost Management </li>
                          <li> Intelligent Dashboards</li>
                          <li> Fintech and Financial Services</li>
                          <li> Performance Management</li>
                        </>}
                        {index === 2 && <>
                          <li> AI/ML Models </li>
                          <li> Gen AI Support & LLM Applications</li>
                          <li> Computer Vision/ NLP </li>
                          <li> Video Analytics </li>
                          <li> AR/VR </li>
                          <li> Proof of concepts </li>
                          <li> Geospatial Intelligence</li>
                        </>}
                        {index === 3 && <>
                          <li> IT Asset/Data Management </li>
                          <li> Technology Upgrade</li>
                          <li> Networking </li>
                          <li> Security Cameras and Biometric </li>
                          <li> Data driven IOT Solutions </li>
                          <li> Migration to Cloud </li>
                          <li> Drones</li>
                        </>}
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
