import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../swiper/swiper-bundle.min.css';

import Swiper from 'swiper/bundle';

import postSlide1 from '../img/post-slide-1.jpg';
import postSlide2 from '../img/post-slide-2.jpg';
import postSlide3 from '../img/post-slide-3.jpg';
import postSlide4 from '../img/post-slide-4.jpg';

const HeroSlider = () => {
    useEffect(() => {
        new Swiper('.sliderFeaturedPosts', {
            loop: true,
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    return (
        <section id="hero-slider" className="hero-slider">
            <div className="container-md" data-aos="fade-in">
                <div className="row">
                    <div className="col-12">
                        <div className="swiper sliderFeaturedPosts">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a href="single-post.html" className="img-bg d-flex align-items-end" style={{ backgroundImage: `url(${postSlide1})` }}>
                                        <div className="img-bg-inner">
                                            <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="single-post.html" className="img-bg d-flex align-items-end" style={{ backgroundImage: `url(${postSlide2})` }}>
                                        <div className="img-bg-inner">
                                            <h2>17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="single-post.html" className="img-bg d-flex align-items-end" style={{ backgroundImage: `url(${postSlide3})` }}>
                                        <div className="img-bg-inner">
                                            <h2>13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="swiper-slide">
                                    <a href="single-post.html" className="img-bg d-flex align-items-end" style={{ backgroundImage: `url(${postSlide4})` }}>
                                        <div className="img-bg-inner">
                                            <h2>9 Half-up/half-down Hairstyles for Long and Medium Hair</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="custom-swiper-button-next">
                                <span className="bi-chevron-right"></span>
                            </div>
                            <div className="custom-swiper-button-prev">
                                <span className="bi-chevron-left"></span>
                            </div>

                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
