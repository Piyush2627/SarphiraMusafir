// import React from 'react'
import LandingSelectTrip from "../../components/common/LandingSelectTrip";
import LandingGallery from "../../components/common/LandingGallery";
import ReviewCard from "../../components/common/ReviewCard";
import reviwes from "../../mock_data/review.json";
import Productbanner from "../../components/common/Productbanner";
import { products } from "../../mock_data/product";

function LandingPage() {
  return (
    <>
      <div className="about-hero-section">
        <img
          src="https://i.ibb.co/9WzRWqN/IMG-9130.jpg"
          className="about-hero-section-image"
        />
        <div className="about-hero-text">
          <div className="heroheading-lineone-container">
            <div className="dashline"> </div>
            <div className="heading">Sarphira musafir</div>
          </div>
          <h1 className="heroheading-main-heading">
            Saath Jaayenge Khoob Machayenge
          </h1>
        </div>
        <div className="landing-page-scroll-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              fill="#ffffff"
              d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z"
            />
          </svg>
        </div>
      </div>
      <section className="find-the-space-section">
        <LandingSelectTrip />
      </section>
      <section className="section feel-the-experience">
        <h2 className="section-headline">Feel the experience </h2>
        <LandingGallery />
      </section>
      <section className="section">
        <h2 className="section-headline">The escape plans conquered</h2>
        <div className="selection productbanner-container">
          <Productbanner data={products} />
        </div>
      </section>
      <h2 className="section-headline">Testimonials</h2>
      <section className="reviews">
        <div className="slider">
          <div className="slide-track">
            {reviwes.map((item, index) => {
              return (
                <div className="slide">
                  <ReviewCard key={index} {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
