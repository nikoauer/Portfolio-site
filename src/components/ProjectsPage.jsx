import {
  Cog6ToothIcon,
  WrenchIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import rockfit from "../assets/rockfit.png";
import weather from "../assets/weather.png"
import book from "../assets/books.png"
import projectstitle from "../assets/projectstitle.svg"

const features = [
  {
    name: "Tools used:",
    description: "Expressjs, Nodejs, MongoDB, React, Bootstrap.",
    icon: WrenchIcon,
  },
];

const weatherinfo = [
    {
      name: "How does it work?",
      description:
        "A user simply types in the name of a major city and clicks on search and the weather will be displayed.",
      icon: Cog6ToothIcon,
    },

    {
      name: "Tools used:",
      description: "Openweather API, HTML, CSS, Javascript",
      icon: WrenchIcon,
    },
  ];

  const bookinfo = [
    {
      name: "How does it work?",
      description:
        "A user can input a genre into the search bar and then a short list of the books that fall under that genre will be displayed along with the author, title and cover.",
      icon: Cog6ToothIcon,
    },
    {
      name: "Tools used:",
      description: "Gutenedex API, HTML, CSS, Javascript.",
      icon: WrenchIcon,
    },
  ];

  const bloginfo = [
    {
      name: "How does it work?",
      description:
        "A user can sign up or login and create a post and if another user is logged in then they have the ability to post a comment however if they are not signed up they cannot.",
      icon: Cog6ToothIcon,
    },
    {
      name: "Tools used:",
      description: "Openweather API, HTML, CSS, Javascript, mySQL, Sequelize, bcrypt",
      icon: WrenchIcon,
    },
  ];

export default function Projectspage() {
  return (
    <>
    <div className="flex justify-center h-96">
    <img src={projectstitle} alt="" />
    </div>
      <div className="overflow-hidden bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl hover:text-blue-600">
                  <a
                    href="https://shoe-calculator-frontend.onrender.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    RockFit
                  </a>
                </p>
                <button
                  type="button"
                  className="py-3 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <a
                    href="https://github.com/nikoauer/Rock-Climbing-Shoe-Calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ArrowTopRightOnSquareIcon className="h-6"></ArrowTopRightOnSquareIcon>
                    Github Repo
                  </a>
                </button>

                <p className="mt- text-lg leading-8 text-gray-600">
                  A rock climbing shoe calculator that was designed to assist a
                  rock climbing retailer in being able to provide an easy to use
                  shoe guide for customers that want to purchase shoes online.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src={rockfit}
              alt="Product screenshot"
              className="max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
