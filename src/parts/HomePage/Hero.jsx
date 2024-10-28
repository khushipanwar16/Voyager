import React from "react";
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <section className="hero pb-16 transition-all duration-400 dark:bg-gray-900">
      <div className="hero__wrapper relative flex h-[90vh] items-center bg-pink-200">
      
       <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="src/assets/images/herovideo.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      />

        {/* hero overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30" />

        <div className="hero__container container relative">
          {/* hero data */}
          <div className="hero__data xs:mx-auto xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl">
            <h1 className="hero__title section-title text-white xs:text-[42px] sm:text-[48px] 2xl:text-[64px]">
           
            Transforming Travel<br /> Dreams into Reality.  <br />
            
            </h1>
            <p className="hero__text section-text pb-8 text-white xs:max-w-md xl:max-w-lg" style={{ textAlign: 'justify' }}>
            At Voyager, we take the stress out of trip planning so you can focus on creating memories. Discover hidden gems, enjoy personalized
             recommendations, and book everything in one place with real-time updates. Whether you're seeking adventure or relaxation,Voyager is
              your ultimate travel companion, making every journey seamless and enjoyable.
            </p>
            <Link to="/" className="hero__button button inline-flex text-black border-2 border-black ">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
