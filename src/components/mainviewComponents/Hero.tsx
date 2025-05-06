import { Button } from "../ui/button";

import hero from "../../assets/hero.jpg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

type HeroProps = {
  handleScrolltoNextSection: () => void;
};

export const Hero = ({ handleScrolltoNextSection }: HeroProps) => (
  <section
    id="home"
    className="h-screen flex flex-col justify-start items-center"
  >
    <img
      className="h-full text-white text-center grid bg-cover w-full"
      src={hero}
      alt=""
    />
    <div className="absolute inset-0 flex flex-col items-center justify-between">
      <div></div>
      <div>
        <h2 className="text-white text-9xl font-bold">Jon Jackson</h2>
        <h3 className="text-white text-3xl font-bold mt-10">
          SOFTWARE ENGINEER, FRONT END DEVELOPER
        </h3>
      </div>
      <Button
        onClick={handleScrolltoNextSection}
        className="btn btn-primary w-1/12 text-lg"
      >
        <MdOutlineKeyboardDoubleArrowDown className="text-lg" />
      </Button>
    </div>
  </section>
);
