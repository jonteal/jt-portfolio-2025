import { Button } from "../ui/button";

import hero from "../../assets/hero.jpg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

type HeroProps = {
  handleScrolltoNextSection: () => void;
};

export const Hero = ({ handleScrolltoNextSection }: HeroProps) => (
  <section
    id="home"
    className="relative min-h-screen w-full flex items-center justify-center pt-16"
  >
    {/* Background Image */}
    <img
      src={hero}
      alt=""
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center sm:justify-between justify-start sm:py-16 py-6">
      <div></div>
      <div className="text-center px-4 pt-60">
        <h2 className="text-white sm:text-9xl text-6xl font-bold">
          Jon Jackson
        </h2>
        <h3 className="text-white text-3xl font-semibold mt-6 z-0">
          SOFTWARE ENGINEER, FRONT END DEVELOPER
        </h3>
      </div>
      <Button onClick={handleScrolltoNextSection} className="mt-10 text-white">
        <MdOutlineKeyboardDoubleArrowDown className="text-3xl" />
      </Button>
    </div>
  </section>
);
