import { ExperienceAccordion } from "./ExperienceAccordion";

export const Experience = () => (
  <section
    id="experience"
    className="min-h-screen flex flex-col items-center justify-center"
  >
    <h2 className="text-white text-6xl font-bold mb-10 mx-2 text-start">
      Professional Experience
    </h2>
    <ExperienceAccordion />
  </section>
);
