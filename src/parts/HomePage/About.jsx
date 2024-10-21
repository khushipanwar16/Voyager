import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import images
import AboutImg from "../../assets/images/about-img.png";

export default function About() {
  return (
    <section className="about section transition-all duration-400 dark:bg-gray-900">
      <div className="about__container container grid gap-12 xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl xl:grid-cols-2 xl:items-center 2xl:max-w-5xl">
        <div className="about__data">
          <p className="about__subtitle section-subtitle">About Us</p>
          <h1 className="about__title section-title" style={{ whiteSpace: 'nowrap' }}>- Uncover Hidden<br /> Travel Gems -</h1>
          <p className="about__text section-text pb-8 2xl:max-w-md" style={{ textAlign: 'justify' }}>
          At Voyager, we are passionate about transforming travel dreams into reality. Our mission is to simplify your
           journey with personalized planning, real-time updates, and curated experiences, ensuring every adventure is 
           memorable and effortless.
          </p>
          <Link to="/" className="about__button button inline-flex">
            Get Started
            <RiArrowRightLine className="text-[1.3rem]" />
          </Link>
        </div>

        <img src={AboutImg} alt="about img" className="about__img" />
      </div>
    </section>
  );
}
