import React from "react";
import etivio from "../assets/logos/etivio_1.svg";
import swift from "../assets/logos/swift.svg";
import vvo from "../assets/logos/vvo.svg";
import groove from "../assets/logos/groove.svg";
import enna from "../assets/logos/enna.svg";
import vash from "../assets/logos/vash.svg";
import mild from "../assets/logos/mild.svg";

const TrustedPartners = () => {
  return (
    <div class="bg-black">
      <div class="text-white flex flex-col gap-6 items-center py-8">
        <h2 class="text-xl lg:text-4xl md:text-3xl font-semibold">
          We’re Trusted by world-class brands
        </h2>
        <p class="text-center text-[13px] md:text-[16px] lg:text-[20px]">
          We craft logos, visuals, and collateral that command a second look and
          convey your brand's rebellious spirit.
        </p>
        <div class="flex flex-col items-center justify-center gap-3 md:flex-row md:items-center md:space-x-8 lg:space-x-12">
          <div class="flex items-center gap-4 md:space-x-8 lg:space-x-12">
            <img class="lg:w-28" width="80px" src={etivio} alt="" />
            <img class="lg:w-28" width="80px" src={swift} alt="" />
            <img class="lg:w-28" width="80px" src={vvo} alt="" />
            <img class="lg:w-28" width="80px" src={groove} alt="" />
          </div>
          <div class="flex items-center gap-4 md:space-x-8 lg:space-x-12">
            <img class="lg:w-28" width="80px" src={enna} alt="" />
            <img class="lg:w-28" width="80px" src={vash} alt="" />
            <img class="lg:w-28" width="80px" src={mild} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
