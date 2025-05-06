import { Expertise } from "@/components/mainviewComponents/Expertise";
import { Hero } from "../components/mainviewComponents/Hero";
import { useRef } from "react";

export const Home = () => {
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const handleScrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Hero handleScrolltoNextSection={handleScrollToNextSection} />

      <Expertise
        handleScrolltoNextSection={handleScrollToNextSection}
        nextSectionRef={nextSectionRef}
      />
    </div>
  );
};
