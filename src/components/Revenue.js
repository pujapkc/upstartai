import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/digital.jpg'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>About Us</h4>
                <p> At UpstartAI, we are dedicated to empowering businesses with cutting-edge AI-driven    analytics solutions. Our mission is to drive growth and create a competitive advantage for our clients by unlocking the full potential of their data.

               </p>
                <p> We strive to democratize advanced analytics, making it accessible and actionable for businesses that may have previously been underserved in this transformative digital era.</p>
                <p> At UpstartAI, we redefine creativity with a practical edge. Clients love us for our unique blend of imaginative solutions and tangible results. Expect not just quality but a delightful surprise in the returns we deliver. Let's turn your digital dreams into thriving realities. Elevate your business with UpstartAI today! </p>
                <Link to="/about" className="btn-get-started">Know More</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue