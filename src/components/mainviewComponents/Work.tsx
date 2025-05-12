import { workItems } from "@/utils/work";
import { WorkCard } from "../WorkCard";
import { Home } from "lucide-react";
import { HomeProjectsCarousel } from "../HomeProjectCarousel";

export const Work = () => {
  return (
    <section
      id="work"
      className="h-screen w-10/12 flex flex-row items-center justify-between mx-auto mt-60"
    >
      <h2 className="text-white text-7xl font-bold self-start mb-10 mt-5 flex flex-col w-1/3">
        <span className="self-start">My</span>{" "}
        <span className="self-start">Work</span>
      </h2>

      <div className="border-amber-200 w-1/2">
        <HomeProjectsCarousel />
      </div>
    </section>
  );
};
