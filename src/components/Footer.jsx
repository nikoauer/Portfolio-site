import React from "react"
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg"
import logo from "../assets/logo3.svg"

export default function Footer () {
    return(
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
    )
}