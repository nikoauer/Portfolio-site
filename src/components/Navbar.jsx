import { Link } from "react-router-dom";
import React from "react";


export default function Navbar() {


  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Home</Link>
        <div className="space-x-4">
          <Link to="/about" className="text-white">About</Link>
          <Link to="/projects" className="text-white">Projects</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
