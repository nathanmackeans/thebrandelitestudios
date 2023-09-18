import React, { useState } from "react";
import SectionLayout from "./SectionLayout";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const showMenuFunc = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <SectionLayout>
      <header class="sticky top-0 z-50">
        <nav class="container p-4 py-6 text-black flex items-center justify-between">
          <div class="font-semibold text-2xl lg:text-3xl">
            <a href="#home">
              <span>The Brand Elite Studio</span>
            </a>
          </div>
          <div>
            <ul class="hidden lg:flex lg:text-[20px] items-center space-x-6">
              <li>
                <a class="effect" href="#home">
                  Work
                </a>
              </li>
              <li>
                <a href="#about">Services</a>
              </li>
              <li>
                <a href="#service">About Us</a>
              </li>
              <li>
                <a href="#service">Contact</a>
              </li>
              <li class="font-medium">
                <a href="#portfolio">3SWYB</a>
              </li>
              <li>
                <button class="flex items-center space-x-1 bg-black text-white px-6 py-4 hover:opacity-80 ease-in duration-200">
                  <a href="https://wa.me/message/PHODOTZ5RGMWC1">
                    Start a Project
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-[16px] lg:text-[20px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          {/* <!-- MOBILE SCREEN --> */}
          <button onClick={showMenuFunc} class="lg:hidden cursor-pointer text-2xl z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          {showMobileMenu && (
            <div
            class="bg-white h-[100vh] absolute inset-0"
          >
            <ul class="h-full grid place-items-center py-10">
              <li>
                <a id="hLink" href="#home">
                  Work
                </a>
              </li>
              <li>
                <a id="hLink" href="#about">
                  Services
                </a>
              </li>
              <li>
                <a id="hLink" href="#service">
                  About Us
                </a>
              </li>
              <li>
                <a id="hLink" href="#service">
                  Contact
                </a>
              </li>
              <li class="font-medium">
                <a id="hLink" href="#portfolio">
                  3SWYB
                </a>
              </li>
              <li>
                <button class="flex items-center space-x-1 bg-black text-white px-6 py-4 hover:opacity-80 ease-in duration-200">
                  <a href="https://wa.me/message/PHODOTZ5RGMWC1">
                    Start a Project
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-[16px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          )}
        </nav>
      </header>
    </SectionLayout>
  );
};

export default Header;
