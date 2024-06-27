import React from "react";
import shapeImg from "../img/img-wave2.png";
import { Link } from "react-router-dom";


const Carousel = () => {
  return (
    <>
      <section id="hero" className="hero d-flex">
        <video className="video-bg" autoPlay loop muted>
          <source src={require('../img/upstartai-video.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img className="shape" src={shapeImg} alt="#" />
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-7 col-md-12 col-12">
             {/* <h2 data-aos="fade-up">
                Harness Data To Empower Your Business
              </h2>*/}
              <br></br>
              <br></br>
              
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>
                  UpstartAI: One-Stop Solution <br></br>for All Your Digital Needs.
                </p>
              </blockquote>
              <div className="d-flex align-items-center">
                <Link to="/about" className="btn-get-started">
                  Know More
                </Link>
              </div>
            </div>
            {/* Hide or remove this part to hide carousel images 
            <div className="col-lg-5 col-md-12 col-12">
              <div className="header-image d-none">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="#"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="#"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="#"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="#"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
             End of hidden carousel part */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
