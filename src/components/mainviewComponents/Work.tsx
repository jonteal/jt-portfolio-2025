import { workItems } from "@/utils/work";
import { WorkCard } from "../WorkCard";

export const Work = () => {
  return (
    <section
      id="work"
      className="h-screen w-10/12 flex flex-col items-center justify-center mx-auto mt-60"
    >
      <h2 className="text-white text-7xl font-bold self-start mb-10 mt-5 flex flex-col">
        <span className="self-start">My</span>{" "}
        <span className="self-start">Work</span>
      </h2>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 justify-between mx-auto w-full items-start">
        {workItems.map((item) => (
          <WorkCard key={item.id} card={item} />
        ))}
      </div>
    </section>
  );
};
