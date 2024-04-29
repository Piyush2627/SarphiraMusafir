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
