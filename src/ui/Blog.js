import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Posts from '../components/Posts';
import InnerHeader from '../components/InnerHeader';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import Footer from '../components/Footer';
import blogHeader from '../img/blog-header.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = () => {
    return (
        <>
            <InnerHeader />
            <InnerHeaderBanner name={"Our Blog"} img={blogHeader} />
            <main id="main">
                <div className="container">
                    <HeroSlider />
                    <Posts />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Blog;
