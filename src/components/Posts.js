import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import post1 from '../img/digital-infrastructure.jpg';
import post2 from '../img/text-analysis.jpg';
import post3 from '../img/agritech.jpg';
import post4 from '../img/AI.jpg';
import post5 from '../img/machine learning.jpg';
import post6 from '../img/digital.jpg';

const Posts = () => {
    return (
        <section className="posts">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            <div className="card-img-container">
                                <img src={post1} className="card-img-top card-img-fixed" alt="Post 1" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">The Evolution of Digital Public Infrastructure in India: A Long-Term Vision</h5>
                                <p className="card-text">India's digital public infrastructure has undergone a remarkable transformation over the past decade. With a strategic vision and robust planning, the nation has systematically developed and integrated various digital solutions to enhance governance, streamline services, and improve citizen engagement.</p>
                                <a href="/blog/post/1" className="btn btn-black">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            <div className="card-img-container">
                                <img src={post2} className="card-img-top card-img-fixed" alt="Post 2" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Unveiling the Magic of Text Analysis: From Tokens to Hierarchies</h5>
                                <p className="card-text">Welcome to the enchanting world of text analysis, where strings of characters transform into portals of insight through the wizardry of computer systems. Imagine each text as a treasure trove waiting to be unlocked, brimming with secrets that reveal themselves through clever computational techniques of natural language processing.
                                
                                </p>
                                <a href="/blog/post/2" className="btn btn-black">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            <div className="card-img-container">
                                <img src={post3} className="card-img-top card-img-fixed" alt="Post 3" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">AgriTech Businesses Are Driving Social Impact</h5>
                                <p className="card-text">By leveraging technology, fostering sustainable practices, and empowering local communities, these enterprises are not only enhancing agricultural productivity but also improving the livelihoods of millions of farmers. Let's explore how businesses are making a meaningful difference in the agriculture sector.</p>
                                <a href="/blog/post/3" className="btn btn-black">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            <div className="card-img-container">
                                <img src={post4} className="card-img-top card-img-fixed" alt="Post 4" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Exploring the AI Revolution in International Relations and Global Order</h5>
                                <p className="card-text">Welcome to the era where artificial intelligence (AI) isn't just a buzzword—it's reshaping the landscape of international relations and global dynamics. In this blog, we'll embark on an exhilarating journey through how AI is transforming our world.</p>
                                <a href="/blog/post/4" className="btn btn-black">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            <div className="card-img-container">
                                <img src={post5} className="card-img-top card-img-fixed" alt="Post 5" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Machine Learning Uses and Effects</h5>
                                <p className="card-text">Machine learning (ML) is revolutionizing various industries by enabling systems to learn from data and improve over time without explicit programming. In finance, they enhance fraud detection and algorithmic trading, providing more secure and efficient financial services and inside the blog we discuss it in detail.</p>
                                <a href="single-post.html" className="btn btn-black">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            <div className="card-img-container">
                                <img src={post6} className="card-img-top card-img-fixed" alt="Post 6" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Digital Marketing Uses and Effects</h5>
                                <p className="card-text">Digital marketing leverages online platforms and technologies to connect with customers and promote products or services. It encompasses a range of strategies, including social media marketing, search engine optimization (SEO), email marketing, and content creation and many more interesting areas.</p>
                                <a href="single-post.html" className="btn btn-black">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Posts;
