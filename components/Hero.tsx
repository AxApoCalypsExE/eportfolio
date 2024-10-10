import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-screen pb-20">
      <div className="flex justify-center relative mb-20 h-screen">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[64vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-3xl z-20">
            Dynamic Web Development with Next.js and more
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="The Ace up your sleeve for your next Web Project"
            duration={0.5}
          />
          <p className="text-center md:tracking-wider mb-4 text-lg md:text-xl lg:text-3xl z-20">
            Hi, I&apos;m <span className="text-purple">Ace Correa</span>, a Frontend Software Developer based in
            <br />
          </p>
          <p className="text-lg md:text-xl lg:text-3xl">London, England</p>
          <a href="#about" className="z-20">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
