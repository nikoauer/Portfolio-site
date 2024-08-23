import portrait from "../assets/portrait2.jpeg";
import Resume from "../assets/Niko Auer Resume.pdf"

import backgroundShape from "../assets/backgroundshape.svg"
import backgroundShape2 from "../assets/backgroundshape2.svg"
import Skills from "./Skills";

export default function AboutPage() {
  return (
    <div id="about" className="" >
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto isolate min-h-screen w-full">
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center mt-32">
          <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
            <div className="relative">
            <img src={backgroundShape} alt="" className="absolute top-56 right-56 -z-[1]" />
              <img className="rounded-xl shadow-xl" src={portrait} alt="portrait" />
              <div className="relative -z-[2]">
                <img src={backgroundShape2} alt="" className="absolute bottom-44 left-36" />
              </div>
            </div>
          </div>

          <div>
            <blockquote className="relative">
              <svg
                className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-indigo-200"
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
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <button type="button" className=" shadow-lg bg-gradient-to-r text-white px-4 py-2 text-xl rounded-full font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
          <a href={Resume} download={Resume}>Download Resume</a>
        </button>
        </div>
      </div>


        {/* grid of skills */}
        <div className="text-center py-1 px-1 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        </div>
        <Skills />
    </div>
  );
}
