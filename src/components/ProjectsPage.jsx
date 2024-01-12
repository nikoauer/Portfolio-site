import {
  Cog6ToothIcon,
  FaceSmileIcon,
  WrenchIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import rockfit from "../assets/rockfit.png";
import weather  from "../assets/weather.png"

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
      {/* 
    section 2 */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl hover:text-blue-600">
                <a href="https://nikoauer.github.io/Weather-Forecast-Dashboard/" target="_blank" rel="noopener noreferrer">
                Weather Dashboard
                </a>
              </h2>
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
              <nav
                className="grid gap-4 mt-5 md:mt-1"
                aria-label="Tabs"
                role="tablist"
              >
                <span className="flex">
                    <span className="block mt-1 text-gray-600 text-lg">
                      This application allows users to search for the weather of major cities around the work adn to save the past searches. Providing the temperature, Wind speed, Humidity and rain for forecast for today and the following 4 days. 
                    </span>
                  </span>

                <span className="flex">
                  <FaceSmileIcon className="absolute h-5 w-5 text-blue-600 my-1"></FaceSmileIcon>
                  <span className="grow ms-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 mx-3">
                      Why?
                    </span>
                    <span className="block mt-1 text-gray-600 mx-3">
                      It provides a practical solution to a real world issue, which is checking the whether in your city and seeing how best to prepare for the day or week. 
                    </span>
                  </span>
                </span>

                <span className="flex">
                <WrenchIcon className="absolute h-5 w-5 text-blue-600 my-1"></WrenchIcon>
                  <span className="grow ms-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 mx-3">
                      Tools used
                    </span>
                    <span className="block mt-1 text-gray-600 mx-3">
                      Openweather API, HTML, CSS, Javascript
                    </span>
                  </span>
                </span>
              </nav>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src={weather}
                      alt="Image Description"
                    />
                  </div>
                </div>

                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-blue-400"
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
