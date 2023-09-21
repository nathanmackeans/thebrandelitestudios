import React from "react";
import SectionLayout from "./SectionLayout";
import logo from "../assets/logos/chidera.svg";
import Base from "./Base";

const Footer = () => {
  return (
    <SectionLayout>
      <footer className="bg-color-secondary text-black">
        <div className="container pt-20 pb-10 font-medium lg:grid lg:items-center lg:gap-10 lg:grid-cols-2">
          <div className="space-y-12 flex flex-col justify-between lg:gap-14">
            <div className="">
              <img width="60px" src={logo} className="lg:w-[80px]" alt="The Brand Elite Studio" />
            </div>
            <div className="lg:hidden">
              <p>
                We are not just a design agency – we are a movement dedicated to
                crafting brands that shatter norms and challenge conventions. In
                a world saturated with the mundane and the expected, we thrive
                on creating visual identities and brand experiences that leave a
                lasting impact. Our team of visionaries, rebels, and
                boundary-pushers collaborates with you to build brands that defy
                the status quo and captivate audiences.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 ">
              <span className="text-3xl lg:text-[40px] font-bold">Get in touch with</span>
              <span className="text-3xl lg:text-[40px] font-bold">Our Expert team</span>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="sm:hidden hidden lg:block">
              <p>
                We are not just a design agency – we are a movement dedicated to
                crafting brands that shatter norms and challenge conventions. In
                a world saturated with the mundane and the expected, we thrive
                on creating visual identities and brand experiences that leave a
                lasting impact. Our team of visionaries, rebels, and
                boundary-pushers collaborates with you to build brands that defy
                the status quo and captivate audiences.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span>
                <a href="mailto:hello@thebrandelitestudios.com">
                  hello@thebrandelitestudios.com
                </a>
              </span>
              <span>
                <a href="tel:+2349063288657">+2349063288657</a>
              </span>
              <span>
                Mosheshe Mansion, 1 Airport Road, 332213, Warri, Delta.
              </span>
            </div>
            <span>
              (C) The Brand Elite Studios,
              <script>document.write(new Date().getFullYear());</script>
            </span>
          </div>
        </div>
        <Base />
      </footer>
    </SectionLayout>
  );
};

export default Footer;
