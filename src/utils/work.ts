export type WorkItem = {
  id: string;
  title: string;
  description: string;
  images: string[];
  gifs?: string[];
  github: string;
  liveLink?: string;
};

export const workItems: WorkItem[] = [
  {
    id: "1",
    title: "GreenThumb",
    description:
      "A web application that serves as a CRM and order management system for microgreens farmers and their small businesses.",
    images: [],
    gifs: [],
    github: "https://github.com/jonteal/GreenThumb",
    liveLink: "",
  },
  {
    id: "2",
    title: "FlowSwift",
    description:
      "A full stack application using the MERN stack as well as Graphql to offer companies a useful tool for managing clients, projects, and more!",
    images: [],
    gifs: [],
    github: "https://github.com/jonteal/FlowSwift",
    liveLink: "",
  },
  {
    id: "3",
    title: "Ozark AirBnb",
    description:
      "A simple front end website for a small business within the Airbnb industry.",
    images: [],
    gifs: [],
    github: "https://github.com/jonteal/ozark-airbnb",
    liveLink: "",
  },
];
