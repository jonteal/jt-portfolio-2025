import { HomeProjectsCarousel } from "../HomeProjectCarousel";

export const Work = () => (
  <section
    id="work"
    className="h-screen w-10/12 flex sm:flex-row flex-col items-center justify-between mx-auto p-40"
  >
    <h2 className="text-white text-7xl font-bold self-start mb-10 mt-5 flex flex-col w-1/2">
      <span className="self-start">My</span>{" "}
      <span className="self-start">Work</span>
    </h2>

    <div className="w-1/2 mt-60">
      <HomeProjectsCarousel />
    </div>
  </section>
);
