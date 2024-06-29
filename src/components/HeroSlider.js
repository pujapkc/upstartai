import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import postSlide1 from '../img/digital-infrastructure.jpg';
import postSlide2 from '../img/text-analysis.jpg';
import postSlide3 from '../img/agritech.jpg';
import postSlide4 from '../img/AI.jpg';

const HeroSlider = () => {
    return (
        <section id="hero-slider" className="hero-slider">
            <div className="container-md" data-aos="fade-in">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="/blog/post/1" className="d-block w-100">
                                <img src={postSlide1} className="d-block w-100 slider-img" alt="Slide 1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="text-black">The Evolution of Digital Public Infrastructure in India: A Long-Term Vision</h3>
                                    <p>India's digital public infrastructure has undergone a remarkable transformation over the past decade. With a strategic vision and robust planning, the nation has systematically developed and integrated various digital solutions to enhance governance, streamline services, and improve citizen engagement. </p>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="/blog/post/2" className="d-block w-100">
                                <img src={postSlide2} className="d-block w-100 slider-img" alt="Slide 2" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="text-black">Unveiling the Magic of Text Analysis: From Tokens to Hierarchies</h3>
                                    <p>Welcome to the enchanting world of text analysis, where strings of characters transform into portals of insight through the wizardry of computer systems. Imagine each text as a treasure trove waiting to be unlocked, brimming with secrets that reveal themselves through clever computational tricks.</p>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="/blog/post/3" className="d-block w-100">
                                <img src={postSlide3} className="d-block w-100 slider-img" alt="Slide 3" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="text-black">AgriTech Businesses Are Driving Social Impact</h3>
                                    <p>By leveraging technology, fostering sustainable practices, and empowering local communities, these enterprises are not only enhancing agricultural productivity but also improving the livelihoods of millions of farmers. Let's explore how businesses are making a meaningful difference in the agriculture sector.</p>
                                </div>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="/blog/post/4" className="d-block w-100">
                                <img src={postSlide4} className="d-block w-100 slider-img" alt="Slide 4" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3 className="text-black">Exploring the AI Revolution in International Relations and Global Order</h3>
                                    <p>Welcome to the era where artificial intelligence (AI) isn't just a buzzword—it's reshaping the landscape of international relations and global dynamics. In this blog, we'll embark on an exhilarating journey through diplomacy, geopolitics, economics, and governance, unraveling how AI is transforming our world.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
