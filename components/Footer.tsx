import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const Footer = () => {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=me@acecorrea.dev",
      "_blank"
    );
  };

  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center gap-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> outside
          digital presence to the next level?
        </h1>
        <p className="text-white-100 md:mt-10 my5 text-center">
          Reach out to me today and let us discuss how I can help you achieve
          your goals.
        </p>
        <div>
          <MagicButton
            title="Contact me :)"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={handleEmailClick}
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Ace Correa
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          <AnimatedTooltip items={socialMedia} />
          <a href="/Ace Correa's Certificate.pdf" className="hidden"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
