import logo from "../assets/portrait.jpg";
import backdrop from "../assets/backdrop.svg";
import ArrowDown from "./ArrowDown.jsx";
import video from "../assets/homepageVideo.mp4"

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen w-full">
      {/* <img
        alt="Backdrop"
        src={backdrop}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      /> */}
      <video autoPlay muted loop className="absolute inset-0 -z-10 h-full w-full object-cover">
        <source src={video} />
      </video>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            
          </h1>
          <div className="mt-[34rem] flex items-center justify-center gap-x-6">
            <a
              href="#about"
              className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium mt-3 px-4 py-2 rounded-lg tracking-wide"
            >
              <ArrowDown />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
