import React from "react";
import { Link } from "react-router-dom";

// import images
import ReviewImg from "../assets/images/review.jpg";

export default function Review() {
  return (
    <section className="review section transition-all duration-400 dark:bg-gray-900">
      <div className="review__container container grid gap-12 xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl xl:grid-cols-2 xl:items-center 2xl:max-w-5xl">
        <div className="review__data">
          <p className="review__subtitle section-subtitle text-[#FFB6C1]">What they say ?</p>
          <h1 className="review__title section-title">Customer reviews</h1>
          <p className="review__text section-text pb-8" style={{ textAlign: 'justify' }}>
          At Voyager, we pride ourselves on delivering exceptional travel experiences. But don't just take our word for it—hear from
           our satisfied travelers! From hidden gems discovered to seamless bookings made, our customers share their adventures and 
           the unforgettable memories they've created with us. Join our community of explorers and see why Voyager is your ultimate 
           travel companion!
          </p>
          <Link to="/allreview" className="review__button button inline-flex">
            All reviews
          </Link>
        </div>

        <img src={ReviewImg} alt="review img" className="review__img" />
      </div>
    </section>
  );
}
