import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { IoLocationSharp, IoArrowRedoCircle } from "react-icons/io5";

const experienceItems = [
  {
    id: 1,
    title: "Software Engineer",
    date: "2022 - Present",
    location: "Remote",
    link: "aetna.com",
    description:
      "Developed and maintained a suite of web applications for the Aetna Digital team, utilizing React, Redux, React Query, Graphql, CMS integrations and Node.js, with a focus on performance, scalability, and enhanced user experience. With millions of daily users, the applications were designed to provide a seamless user experience across multiple platforms and devices.",
    tags: [
      "TYPESCRIPT",
      "REACT",
      "JS",
      "HTML",
      "CSS",
      "NODE",
      "GRAPHQL",
      "REDUX",
      "CMS",
    ],
  },
  {
    id: 2,
    title: "Coding Student Tutor @ Trilogy / 2U",
    date: "Feb 2022 - Jun 2022",
    location: "Remote",
    link: "2u.com",
    description:
      "Provided tutoring and mentoring to students in a coding bootcamp, focusing on JavaScript, React, Node.js, and full-stack development. Assisted students with debugging, project development, and understanding complex programming concepts.",
    tags: ["REACT", "JS", "HTML", "CSS", "NODE", "SQL", "NOSQL", "EXPRESS"],
  },
];

export const ExperienceAccordion = () => {
  return (
    <>
      <Accordion type="single" collapsible className="sm:w-1/2 mx-2">
        {experienceItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={`item-${item.id}`}
            className="rounded-lg mb-5"
          >
            <AccordionTrigger className="bg bg-primary text-black flex flex-row justify-between rounded-lg border px-5">
              <h3 className="text-lg w-full">{item.title}</h3>
              <p className="text-lg w-2/6 text-right">{item.date}</p>
            </AccordionTrigger>
            <AccordionContent className="text-black mt-2 rounded-lg p-3 bg-blue-500">
              <div className="flex flex-row justify-start p-2">
                <div className="flex flex-row justify-start p-2">
                  <IoLocationSharp className="text-2xl" />
                  <p className="text-lg ml-2">{item.location}</p>
                </div>
                <div className="flex flex-row items-center ml-10">
                  <IoArrowRedoCircle className="text-2xl" />
                  <p className="text-lg ml-2">{item.link}</p>
                </div>
              </div>
              <p>{item.description}</p>
              <div className="flex flex-row flex-wrap mt-3">
                {item.tags.map((tag, index) => (
                  <div
                    key={tag + index}
                    className="rounded-3xl mx-2 my-1 flex flex-row items-center justify-center bg-sky-900 text-white w-fit px-4 py-2"
                  >
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
