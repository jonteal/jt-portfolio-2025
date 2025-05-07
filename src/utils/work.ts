import greenThumb1 from "../assets/greenThumb/greenThumb1.png";
import greenThumb2 from "../assets/greenThumb/greenThumb2.png";
import greenThumb3 from "../assets/greenThumb/greenThumb3.png";
import greenThumb4 from "../assets/greenThumb/greenThumb4.png";
import greenThumb5 from "../assets/greenThumb/greenThumb5.png";
import greenThumb6 from "../assets/greenThumb/greenThumb6.png";

export type WorkItem = {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    description: string;
  }[];
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
    images: [
      {
        src: greenThumb1,
        description: "Add and track all your customers easily!",
      },
      {
        src: greenThumb2,
        description:
          "Add different products to your inventory and track amounts, availability, and more!",
      },
      {
        src: greenThumb3,
        description:
          "Track and update all current products from easy-to-use dashboard!",
      },
      {
        src: greenThumb4,
        description:
          "Easily track all crops, their associated tasks, and relevant details and information!",
      },
      {
        src: greenThumb5,
        description: "Manage your team and job assignments with ease!",
      },
      {
        src: greenThumb6,
        description: "Create and manage all your orders in one place!",
      },
    ],
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
