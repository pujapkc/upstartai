import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <section id="hero" className="hero d-flex">
        <video className="video-bg" autoPlay loop muted>
          <source src={require('../img/upstartai-video.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div
            className="row align-items-center content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-7 col-md-12 col-12">
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p className="blockquote-text">
                  UpstartAI: One-Stop Solution <br />for All Your Digital Needs.
                </p>
                <div className="d-flex align-items-center">
                  <Link to="/about" className="btn-get-started blockquote-link">
                    Know More
                  </Link>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
