import { Hero } from "../components/mainviewComponents/Hero";
import { useRef } from "react";

export const Home = () => {
  const nextSectionRef = useRef<null | HTMLDivElement>(null);
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
    </div>
  );
};
