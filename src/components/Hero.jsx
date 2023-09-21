import React from "react";
import SectionLayout from "./SectionLayout";
import heroImage from "../assets/hero-image.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <SectionLayout>
      <section id="hero" className="lg:pb-20 lg:pt-10">
        <div className="container px-4 py-4 md:py-10">
          <div className="md:grid md:gap-3 md:grid-cols-[1fr_320px] lg::grid-cols-[1fr_400px] md:items-center">
            <div className="md:w-[380px] lg:w-[500px]">
              <div className="flex flex-col text-5xl lg:text-[76px] font-bold py-4">
                <span className="number-1">Redefining</span>
                <span className="number-2">Brands Beyond</span>
                <span className="number-3">Comformity.</span>
              </div>
              <img
                className="h-[246px] pt-4 md:hidden"
                src={heroImage}
                alt=""
              />
              <p className="text-[16px] lg:text-[20px] py-6 md:w-[400px] lg:w-[480px] leading-relaxed text-gray-800">
                We believe that creativity knows no bounds. Our team dares to
                dream big and think outside the box, embracing the
                unconventional to deliver design solutions that are truly
                one-of-a-kind.
              </p>
              <button className="flex items-center space-x-1 bg-black text-white px-6 py-4 hover:opacity-80 ease-in duration-200">
                <a href="https://wa.me/message/PHODOTZ5RGMWC1">
                  Start a Project
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-[16px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 2 }}
              className="hidden md:inline-block md:h-full md:w-[320px] lg:w-[340px]"
            >
              <img className="object-cover h-full" src={heroImage} alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </SectionLayout>
  );
};

export default Hero;
