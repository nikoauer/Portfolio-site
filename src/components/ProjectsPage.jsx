import { WrenchIcon } from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";
import rockfit from "../assets/rockfit.png";
import projectstitle from "../assets/projectstitle.svg";

const Projects = [
  {
    projectName: "Rockfit - Rock climbing shoe calculator",
    description:
      "A rock climbing shoe calculator that was designed to assist a rock climbing retailer in being able to provide an easy to use shoe guide for customers that want to purchase shoes online.",
    tools: "Expressjs, Nodejs, MongoDB, React, Bootstrap",
    imgSrc: rockfit,
    GithubLink: "https://github.com/nikoauer/Rock-Climbing-Shoe-Calculator",
    LiveLink: "https://shoe-calculator-frontend.onrender.com/",
    icon: WrenchIcon,
  },
  {
    projectName: "Elementum - Adventure E-commerce Store",
    description:
      "An adventure E-commerce store that allows customers to purchase goods through Paypal. Additionally if a user is an admin it allows them to add, remove and change products, users and ",
    tools: "Expressjs, MongoDB, Tailwind CSS, React, Nodejs",
    imgSrc: rockfit,
    GithubLink: "https://github.com/nikoauer/Elementum-E-Commerce-Store",
    icon: WrenchIcon,
  },
  {
    projectName: "ChatApp - Messenging site",
    description:
      "A messenging application that allows users to send messages to anyone on the application (catered towards being used as an internal work messaging application) or create group chats.",
    tools: "React, GetStream API, Tailwind CSS, ",
    imgSrc: rockfit,
    GithubLink: "https://github.com/nikoauer/ChatApplication",
    LiveLink: "https://chatapplication-frontend-cqtl.onrender.com/",
    icon: WrenchIcon,
  },
  {
    projectName: "Flight deal checker",
    description:
      "A python script that retrieves the capital cities of countries I wish to travel to from a Google sheet. Populates this google sheet with IATA codes if not already added and proceeds to check the Amadeus API for flights to these cities that are under my desired maximum price. If a flight is found within my desired criteria it will proceed to sending me a WhatsApp message to notify me that a flight has been found with my desired criteria.",
    tools: "Python, Google Sheets, Amadeus API, Twilio, Requests: HTTP for Humans",
    imgSrc: rockfit,
    GithubLink: "https://github.com/nikoauer/Flight-deal-tracker",
    icon: WrenchIcon,
  },
];

export default function Projectspage() {
  return (
    <>
      <div className="flex justify-center h-96">
        <img src={projectstitle} alt="Project title" />
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {Projects.map((item, index) => (
            <div
              key={index}
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 "
            >
              <div>
                <h1 className="text-2xl font-bold hover:text-indigo-600">
                  <a href={item.LiveLink}>{item.projectName}</a>
                  </h1>
                <a href={item.GithubLink} className="inline-flex items-center hover:text-indigo-600">
                  <div className="w-8 h-8 flex justify-center items-center rounded-full hover:text-gray-900">
                    <FaGithub className="h-6 w-6" />
                  </div>
                  <span className="ml-1">Github Repo</span>
                </a>
              </div>
              <img
                src={item.imgSrc}
                alt="Product screenshot"
                className="max-w-full h-auto rounded-xl shadow-md ring-1 ring-gray-400/10"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
