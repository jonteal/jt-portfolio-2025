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

import crownClothing1 from "../assets/crownClothing/crownClothing1.png";
import crownClothing2 from "../assets/crownClothing/crownClothing2.png";
import crownClothing3 from "../assets/crownClothing/crownClothing3.png";
import crownClothingVideo from "../assets/crownClothing/crownClothingVid.mp4";

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
    images: [
      {
        src: crownClothing1,
        description:
          "See a host of product categories to select items from and add them to your cart for purchase!",
      },
      {
        src: crownClothing2,
        description:
          "Explore the items in a given category with pricing and pictures!",
      },
      {
        src: crownClothing3,
        description: "Add and update your cart and see updated pricing!",
      },
    ],
    gifs: [],
    github: "https://github.com/jonteal/capstone-e-commerce",
    liveLink: "",
  },
  {
    id: "4",
    title: "Pitmaster",
    description:
      "A recipe journal for BBQ enthusiasts, allowing users to save and share their favorite recipes as well as iterate on ideas to reach the perfect results.",
    images: [],
    gifs: [],
    github: "https://github.com/jonteal/pitmaster",
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
