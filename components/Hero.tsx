import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-screen pb-20">
      <div className="flex justify-center relative mb-20 h-screen">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-3xl z-20">
            Dynamic Web Development with Next.js and more
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="The Ace up your sleeve for your next Web Project"
            duration={3}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl z-20">
            Hi, I&apos;m Ace Correa, a Frontend Software Developer based in
            <br />
            <span className="line-through text-gray-400">England</span>{" "}
            <span className="line-through text-gray-400">Germany</span>{" "}
            Philippines.
          </p>
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
