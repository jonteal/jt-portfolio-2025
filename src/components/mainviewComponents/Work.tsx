import { HomeProjectsCarousel } from "../HomeProjectCarousel";

export const Work = () => (
  <section
    id="work"
    className="min-h-screen w-full max-w-7xl flex flex-col sm:flex-row items-center sm:items-start justify-between mx-auto px-4 sm:px-10 py-20 gap-10"
  >
    <h2 className="text-white text-5xl sm:text-7xl font-bold w-full sm:w-1/2">
      <span className="self-start">My</span>{" "}
      <span className="self-start">Work</span>
    </h2>

    <div className="w-full sm:w-1/2">
      <HomeProjectsCarousel />
    </div>
  </section>
);
