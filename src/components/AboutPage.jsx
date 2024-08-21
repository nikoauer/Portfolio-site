import portrait from "../assets/portrait2.jpeg";
import bootstrap from "../assets/bootstrap.svg";
import express from "../assets/express.svg";
import figma from "../assets/figma.svg";
import git from "../assets/git.svg";
import css from "../assets/css.svg";
import github from "../assets/github.svg";
import heroku from "../assets/heroku.svg";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import jest from "../assets/jest.svg";
import jquery from "../assets/jquery.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mySQL.svg";
import netlify from "../assets/netlify.svg";
import react from "../assets/react.svg";
import Sass from "../assets/Sass.svg";
import Tailwind from "../assets/tailwind.svg";
import graphql from "../assets/graphql.svg";
import redux from "../assets/redux.svg";
import Resume from "../assets/Niko Auer Resume.pdf"
import linkedin from "../assets/linkedin.svg"
import logo from "../assets/logo3.svg"
import backgroundShape from "../assets/background shape.png"
import backgroundShape2 from "../assets/background shape2.png"

export default function AboutPage() {
  return (
    <div id="about" className="bg-[#fffef5]">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center mt-32">
          <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
            <div className="relative">
            <img src={backgroundShape2} alt="" className="absolute top-32 right-24 -z-[1]" />
              <img className="rounded-xl shadow-xl" src={portrait} alt="portrait" />
              <div className="relative  -z-[2]">
                <img src={backgroundShape} alt="" className="absolute bottom-44 left-14" />
              </div>
            </div>
                
          </div>

          <div>
            <blockquote className="relative">
              <svg
                className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-gray-200"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>
              

              <div className="relative z-10">
                <p className="text-md font-semibold text-indigo-500 tracking-wide uppercase mb-3 ">
                Hi, I am Niko Auer
                </p>

                <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
With 10 years of experience in television broadcast and photography, I've contributed to projects ranging from community events like Tropfest to global spectacles such as the Australian Open, Qatar FIFA World Cup 2022, and Formula 1. Now, I’m diving into full-stack web development, driven by the thrill of learning and solving real-world problems. I aim to bring my unique perspective from the visual arts to web development. When I’m not coding, you’ll find me outdoors, rock climbing or hiking.
                </p>
              </div>

              <footer className="mt-6 flex justify-center">
                <div className="flex items-center">
                  <div className="md:hidden flex-shrink-0">
                    <img
                      className="h-32 w-32 rounded-full"
                      src={portrait}
                      alt="Image Description"
                    />
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <main id="content" role="main">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <button type="button" className="shadow-xl py-3 px-4 my-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
  <a href={Resume} download={Resume}>Download Resume</a>
</button>
        </div>

        {/* grid of skills */}
        <div className="text-center py-1 px-1 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="block text-2xl font-bold text-black sm:text-4xl">
            Skills
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[80rem] px-1 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6 md:gap-10">
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={bootstrap} alt="bootstrap" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Bootstrap
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={express} alt="express" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Expressjs
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={figma} alt="figma" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Figma
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={git} alt="Git" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Git
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={css} alt="css" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      CSS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={github} alt="Github" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Github
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={heroku} alt="heroku" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Heroku
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={html} alt="HTML" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      HTML
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={javascript} className="h-12" alt="javascript" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Javascript
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={jest} alt="Jest" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Jest
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={jquery} alt="jquery" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Jquery
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={mongodb} alt="MongoDB" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      MongoDB
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={mysql} alt="mySQL" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      mySQL
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={netlify} alt="netlify" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Netlify
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={react} alt="React" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      React
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={Sass} alt="Sass" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Sass
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={Tailwind} alt="Tailwind" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Tailwind
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={Sass} alt="Sass" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Sass
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={graphql} alt="graphQL" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      GraphQL
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-48 h-20 bg-white shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
                    <img src={redux} alt="Redux" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 ">
                      Redux
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
  <div className="text-center">
    <div>
    </div>
    <div className="mt-3">
      <p className="text-gray-500">Website made by Niko</p>
      <div className="h-20 flex justify-center">
      <img src={logo} alt="logo" />
      </div>
    </div>

    <div className="mt-3 space-x-3">
    <a className="inline-flex justify-center items-center w-12 h-12 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition" href="https://www.linkedin.com/in/niko-auer/" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="Linkedin Logo" className="h-10"/>
</a>

      <a className="inline-flex justify-center items-center w-12 h-12 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition" href="https://github.com/nikoauer" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="Github Logo" className="h-10"/>
      </a>
    </div>
  </div>
</footer>
      </main>
    </div>
  );
}
