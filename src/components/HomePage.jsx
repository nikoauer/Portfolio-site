
import ArrowDown from "./ArrowDown.jsx";
import video from "../assets/homepageVideo.mp4"
import SlidingText from "./SlidingText.jsx";

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen w-full">
      <video autoPlay muted loop className="absolute inset-0 -z-10 h-full w-full object-cover">
        <source src={video} />
      </video>
      <div className="mx-auto max-w-2xl pt-[20rem]">
        <SlidingText />
          <div className="flex mt-[28rem] items-center justify-center">
            <a
              href="#about"
              className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium mt-3 px-4 py-2 rounded-lg tracking-wide"
            >
              <ArrowDown />
            </a>
          </div>
        </div>
      </div>
  );
}
