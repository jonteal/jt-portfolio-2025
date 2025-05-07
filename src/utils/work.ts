import greenThumb1 from "../assets/greenThumb/greenThumb1.png";
import greenThumb2 from "../assets/greenThumb/greenThumb2.png";
import greenThumb3 from "../assets/greenThumb/greenThumb3.png";
import greenThumb4 from "../assets/greenThumb/greenThumb4.png";
import greenThumb5 from "../assets/greenThumb/greenThumb5.png";
import greenThumb6 from "../assets/greenThumb/greenThumb6.png";

import ozarkAirbnb1 from "../assets/ozarkAirbnb/ozarkAirbnb1.png";
import ozarkAirbnb2 from "../assets/ozarkAirbnb/ozarkAirbnb2.png";
import ozarkAirbnb3 from "../assets/ozarkAirbnb/ozarkAirbnb3.png";
import ozarkAirbnb4 from "../assets/ozarkAirbnb/ozarkAirbnb4.png";
import ozarkAirbnb5 from "../assets/ozarkAirbnb/ozarkAirbnb5.png";
import ozarkAirbnb6 from "../assets/ozarkAirbnb/ozarkAirbnb6.png";

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
    title: "Crown Clothing",
    description:
      "E-commerce website built with React and Redux, featuring a shopping cart and user authentication",
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
    images: [
      { src: ozarkAirbnb1, description: "Ozark AirBnb" },
      { src: ozarkAirbnb2, description: "Ozark AirBnb" },
      { src: ozarkAirbnb3, description: "Ozark AirBnb" },
      { src: ozarkAirbnb4, description: "Ozark AirBnb" },
      { src: ozarkAirbnb5, description: "Ozark AirBnb" },
      { src: ozarkAirbnb6, description: "Ozark AirBnb" },
    ],
    gifs: [],
    github: "https://github.com/jonteal/ozark-airbnb",
    liveLink: "",
  },
];
