import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import client01 from "../img/show1.jpg";
import client02 from "../img/show2.jpg";
import client03 from "../img/show3.jpg";
import client04 from "../img/show1.jpg";
import client05 from "../img/show2.jpg";
import client06 from "../img/show3.jpg";



const ClientList = () => {
  return (
    <>
      <section id="clients" className="clients">
        <div className="container" data-aos="zoom-out">
          <div className="section-header">
            <h2>Our Expertise</h2>
          </div>
          <div className="clients-slider swiper">
            <Swiper
              modules={[Autoplay]}
              //spaceBetween={15}
              //slidesPerView={6}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={client01} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client02} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client03} className="img-fluid" alt="" />
              </SwiperSlide>
             
              <SwiperSlide>
                <img src={client04} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client05} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client06} className="img-fluid" alt="" />
              </SwiperSlide>
             
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientList;
