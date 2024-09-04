import { WrenchIcon } from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";
import rockfit from "../assets/rockfit.png";
import projectstitle from "../assets/projectstitle.svg";
import elementum from "../assets/elementum.png"
import chatapp from "../assets/chatapp.png"
import flightdeals from "../assets/flightdeals.png"

const Projects = [
  {
    projectName: "Rockfit - Rock climbing shoe calculator",
    description:
      "A rock climbing shoe calculator that was designed to assist a rock climbing retailer in being able to provide an easy to use shoe guide for customers that want to purchase shoes online.",
    tools: "Expressjs, Nodejs, MongoDB, React, Bootstrap",
    imgSrc: rockfit,
    GithubLink: "https://github.com/nikoauer/Rock-Climbing-Shoe-Calculator",
    LiveLink: "https://shoe-calculator-frontend.onrender.com/",
  },
  {
    projectName: "Elementum - Adventure E-commerce Store",
    description:
      "An adventure E-commerce store that allows customers to purchase goods through Paypal. Additionally if a user is an admin it allows them to add, remove and change products, users and ",
    tools: "Expressjs, MongoDB, Tailwind CSS, React, Nodejs",
    imgSrc: elementum,
    GithubLink: "https://github.com/nikoauer/Elementum-E-Commerce-Store",
  },
  {
    projectName: "ChatApp - Messenging site",
    description:
      "A messenging application that allows users to send messages to anyone on the application (catered towards being used as an internal work messaging application) or create group chats.",
    tools: "React, GetStream API, Tailwind CSS, ",
    imgSrc: chatapp,
    GithubLink: "https://github.com/nikoauer/ChatApplication",
    LiveLink: "https://chatapplication-frontend-cqtl.onrender.com/",
  },
  {
    projectName: "Flight deal checker",
    description:
      "A python script that retrieves the capital cities of countries I wish to travel to from a Google sheet. Populates this google sheet with IATA codes if not already added and proceeds to check the Amadeus API for flights to these cities that are under my desired maximum price. If a flight is found within my desired criteria it will proceed to sending me a WhatsApp message to notify me that a flight has been found with my desired criteria.",
    tools: "Python, Google Sheets, Amadeus API, Twilio, Requests: HTTP for Humans",
    imgSrc: flightdeals,
    GithubLink: "https://github.com/nikoauer/Flight-deal-tracker",
  },
];

export default function Projectspage() {
  return (
    <>
      <div className="flex justify-center text-5xl">
        <img src={projectstitle} className="-mb-32"></img>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {Projects.map((item, index) => (
            <div
              key={index}
              className="my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 "
            >
              <div id="content" className="flex flex-col justify-center">
                <h1 className="text-2xl m-1 font-bold hover:text-indigo-600">
                  <a href={item.LiveLink} target="_blank" rel="noopener">{item.projectName}</a>
                  </h1>
                  <a href={item.GithubLink} target="_blank" rel="noopener" className="m-1 inline-flex items-center hover:text-indigo-600">
                  <div className="w-8 h-8 flex justify-center items-center rounded-full">
                    <FaGithub className="h-6 w-6" />
                  </div>
                  <span className="ml-1">Github Repo</span>
                </a>
                <p className="m-1">
                  {item.description}
                </p>
                <p className="inline-flex m-1">
                  <WrenchIcon className="h-6 w-6 text-indigo-500 mr-1.5" />
                  {item.tools}
                </p>
              </div>
              <img
                src={item.imgSrc}
                alt="Project screenshot"
                className="max-w-full h-auto rounded-xl shadow-md ring-1 ring-gray-400/10"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
