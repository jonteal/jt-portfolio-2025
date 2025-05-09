import { Expertise } from "@/components/mainviewComponents/Expertise";
import { Hero } from "../components/mainviewComponents/Hero";
import { useEffect, useRef } from "react";
import { Work } from "@/components/mainviewComponents/Work";
import { Experience } from "@/components/mainviewComponents/Experience";
import { Contact } from "@/components/mainviewComponents/Contact";
import { References } from "@/components/mainviewComponents/References";
import { useLocation } from "react-router";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, [location]);
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
      <div id="home">
        <Hero handleScrolltoNextSection={handleScrollToNextSection} />
      </div>

      <div id="expertise">
        <Expertise
          handleScrolltoNextSection={handleScrollToNextSection}
          nextSectionRef={nextSectionRef}
        />
      </div>
      <div id="work">
        <Work />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="references">
        <References />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};
