import React from "react";
import { Link } from "react-router-dom";

// import icons
import {
  RiInstagramFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiFacebookFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer bg-zinc-900 pt-24 pb-8">
      <div className="footer__container container grid gap-24 2xl:mx-auto 2xl:max-w-5xl">
        <div className="footer__group grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] items-start gap-12 lg:flex lg:justify-between lg:justify-items-center">
          <div className="footer__content">
            <Link
              to="/"
              className="footer__content-logo font-serif text-[20px] font-semibold text-white"
            >
              Voyager.
            </Link>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-white">
              Learn More
            </h3>

            <ul className="footer__content-list flex flex-col gap-2">
              {[
                ["About", "/about"],
                ["Press release", "/press-release"],
                ["Environment", "/environment"],
                ["Privacy policy", "/privacy-policy"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link text-[15px] text-white hover:text-pink-300 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-white">
              Ticket & Booking
            </h3>

            <ul className="footer__content-list flex flex-col gap-2">
              {[
                ["Lift tickets", "/lift-tickets"],
                ["Season passes", "/season-passes"],
                ["Vacations package", "/vacations-package"],
                ["Best trips", "/best-trips"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link text-[15px] text-white hover:text-pink-300 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 font-serif text-[18px] font-semibold text-white">
              Socials
            </h3>

            <ul className="footer__content-socials flex w-max items-center gap-4">
              <li>
                <Link
                  to="/"
                  className="footer__content-icon inline-flex text-[1.3rem] text-white hover:text-pink-300"
                >
                  <RiInstagramFill />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="footer__content-icon inline-flex text-[1.3rem] text-white hover:text-pink-300"
                >
                  <RiYoutubeFill />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="footer__content-icon inline-flex text-[1.3rem] text-white hover:text-pink-300"
                >
                  <RiTwitterFill />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="footer__content-icon inline-flex text-[1.3rem] text-white hover:text-pink-300"
                >
                  <RiFacebookFill />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copy border-t-2 border-white/10 pt-8 text-center text-[15px] text-white">
          Copyrights 2024, Voyager. all rights reserved | Develop by Khushi  Kashika  Harshit
        </p>
      </div>
    </footer>
  );
}
