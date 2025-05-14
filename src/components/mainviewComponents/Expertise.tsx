import { MdBusinessCenter, MdComputer } from "react-icons/md";
import { FaReact } from "react-icons/fa";

type ExpertiseProps = {
  nextSectionRef: React.RefObject<HTMLDivElement | null>;
  handleScrolltoNextSection: () => void;
};

export const Expertise = ({ nextSectionRef }: ExpertiseProps) => (
  <section
    className="min-h-screen flex flex-col items-center justify-center w-full max-w-screen-xl"
    ref={nextSectionRef}
    id="expertise"
  >
    <h2 className="text-white text-6xl font-bold mb-10">My Expertise</h2>
    <div className="border flex sm:flex-row flex-col w-10/12">
      <div className="border p-10">
        <div className="flex flex-row justify-center items-start w-full">
          <MdComputer className="text-5xl mr-5" />
          <h3 className="text-white text-3xl font-bold mb-5">
            Software Development
          </h3>
        </div>
        <div className="w-24 h-2 bg-purple-400"></div>
        <p className="mt-3">
          Experienced in full stack development, with a focus on frontend
          technologies, specializing in Javascript, Typescript.
        </p>
      </div>
      <div className="border p-10">
        <div className="flex flex-row justify-center items-start w-full">
          <FaReact className="text-5xl mr-5" />
          <h3 className="text-white text-3xl font-bold mb-5">
            Frontend Developer, React
          </h3>
        </div>
        <div className="w-24 h-2 bg-green-400"></div>
        <p className="mt-3">
          Passionate about UI/UX. Over 3 years of development experience in
          HTML, CSS, JS, React, and NextJS frameworks.
        </p>
      </div>
      <div className="border p-10">
        <div className="flex flex-row justify-center items-start w-full">
          <MdBusinessCenter className="text-5xl mr-5" />
          <h3 className="text-white text-3xl font-bold mb-5">
            Small Business Owner
          </h3>
        </div>
        <div className="w-24 h-2 bg-blue-400"></div>
        <p className="mt-3">
          Founded and operated a small business for 1 year. Experienced in
          business operations, marketing, and customer service.
        </p>
      </div>
    </div>
  </section>
);
