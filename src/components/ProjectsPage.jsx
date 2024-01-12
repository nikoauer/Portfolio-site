import {
  Cog6ToothIcon,
  FaceSmileIcon,
  WrenchIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import rockfit from "../assets/rockfit.png";
import weather  from "../assets/weather.png"
import book from "../assets/books.png"

const features = [
  {
    name: "How does it work?",
    description:
      "A customer simply inputs their right and left foot measurement in centermeters and it will return recommended shoes and their size.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Why?",
    description: `One of the issues with buying rock climbing shoes is that there isn't always a store to try them on, so to allow customers to have a guide to understand what shoe would foot their foot this was built. Furthermore it always small business to be locally supported and to better engage and fullfil customers needs.`,
    icon: FaceSmileIcon,
  },
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
      name: "Why?",
      description: "It provides a practical solution to a real world issue, which is checking the weather in your city and seeing how best to prepare for the day or week.",
      icon: FaceSmileIcon,
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
        "A user can input a genre into the search bar and then a short list of the books that fall under that genre will be displayed along with the author, title and cover",
      icon: Cog6ToothIcon,
    },
    {
      name: "Why?",
      description: "Customers may not know what book they want but this provides a collection of books if the customer has a specific topic or genre interest",
      icon: FaceSmileIcon,
    },
    {
      name: "Tools used:",
      description: "Gutenedex API, HTML, CSS, Javascript",
      icon: WrenchIcon,
    },
  ];

  const bloginfo = [
    {
      name: "How does it work?",
      description:
        "A user simply types in the name of a major city and clicks on search and the weather will be displayed.",
      icon: Cog6ToothIcon,
    },
    {
      name: "Why?",
      description: "It provides a practical solution to a real world issue, which is checking the weather in your city and seeing how best to prepare for the day or week.",
      icon: FaceSmileIcon,
    },
    {
      name: "Tools used:",
      description: "Openweather API, HTML, CSS, Javascript",
      icon: WrenchIcon,
    },
  ];

export default function Projectspage() {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">
                  Shoe Calculator
                </h2>
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


{/* reverse */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <img
        src={weather}
        alt="weather dashboard screenshot"
        className="max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
      />
      <div className="lg:pl-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl hover:text-blue-600">
            <a
              href="https://nikoauer.github.io/Weather-Forecast-Dashboard/" target="_blank" rel="noopener noreferrer"
            >
              Weather Dashboard
            </a>
          </p>
          <button
            type="button"
            className="py-3 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            <a
              href="https://github.com/nikoauer/Weather-Forecast-Dashboard?tab=readme-ov-file"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ArrowTopRightOnSquareIcon className="h-6"></ArrowTopRightOnSquareIcon>
              Github Repo
            </a>
          </button>

          <p className="mt- text-lg leading-8 text-gray-600">
          This application allows users to search for the weather of major cities around the work adn to save the past searches. Providing the temperature, Wind speed, Humidity and rain for forecast for today and the following 4 days. 
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {weatherinfo.map((feature) => (
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
    </div>
  </div>
</div>










      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl hover:text-blue-600">
                  <a
                    href="https://raymond-xishengchen.github.io/Books-Review/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    BOOKS4U
                  </a>
                </p>
                <button
                  type="button"
                  className="py-3 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <a
                    href="https://github.com/nikoauer/Books-subject-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ArrowTopRightOnSquareIcon className="h-6"></ArrowTopRightOnSquareIcon>
                    Github Repo
                  </a>
                </button>

                <p className="mt- text-lg leading-8 text-gray-600">
                  In this group project we built a application that search the gutenedex API by whatever genre the user may be interested in. 
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {bookinfo.map((feature) => (
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
              src={book}
              alt="Product screenshot"
              className="max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>


{/* reverse */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <img
        src={weather}
        alt="weather dashboard screenshot"
        className="max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
      />
      <div className="lg:pl-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl hover:text-blue-600">
              Techademy
          </p>
          <button
            type="button"
            className="py-3 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
          >
            <a
              href="https://github.com/nikoauer/Tech-Blog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ArrowTopRightOnSquareIcon className="h-6"></ArrowTopRightOnSquareIcon>
              Github Repo
            </a>
          </button>

          <p className="mt- text-lg leading-8 text-gray-600">
          This application allows users to search for the weather of major cities around the work adn to save the past searches. Providing the temperature, Wind speed, Humidity and rain for forecast for today and the following 4 days. 
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {bloginfo.map((feature) => (
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
    </div>
  </div>
</div>

    </>
  );
}
