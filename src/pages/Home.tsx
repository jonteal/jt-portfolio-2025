import { Expertise } from "@/components/mainviewComponents/Expertise";
import { Hero } from "../components/mainviewComponents/Hero";
import { useRef } from "react";
import { Work } from "@/components/mainviewComponents/Work";
import { Experience } from "@/components/mainviewComponents/Experience";
import { Contact } from "@/components/mainviewComponents/Contact";
import { References } from "@/components/mainviewComponents/References";

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

      <Work />

      <Experience />

      <References />

      <Contact />
    </div>
  );
};
