import React from "react";
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
import react from "../assets/react.svg";
import Sass from "../assets/Sass.svg";
import Tailwind from "../assets/tailwind.svg";
import graphql from "../assets/graphql.svg";
import redux from "../assets/redux.svg";
import python from "../assets/python.svg"
import skillsBackground from "../assets/skillsBackground.mp4"



const skillsData = [
  { name: "Bootstrap", imgSrc: bootstrap },
  { name: "Express.js", imgSrc: express },
  { name: "Figma", imgSrc: figma },
  { name: "Git", imgSrc: git },
  { name: "CSS", imgSrc: css },
  { name: "GitHub", imgSrc: github },
  { name: "Heroku", imgSrc: heroku },
  { name: "HTML", imgSrc: html },
  { name: "JavaScript", imgSrc: javascript },
  { name: "Jest", imgSrc: jest },
  { name: "jQuery", imgSrc: jquery },
  { name: "MongoDB", imgSrc: mongodb },
  { name: "MySQL", imgSrc: mysql },
  { name: "Python", imgSrc: python },
  { name: "React", imgSrc: react },
  { name: "Sass", imgSrc: Sass },
  { name: "Tailwind", imgSrc: Tailwind },
  { name: "GraphQL", imgSrc: graphql },
  { name: "Redux", imgSrc: redux },
];

export default function Skills () {
  return (
    <div className="relative isolate min-h-screen w-full">
    <video autoPlay muted loop className="absolute -z-10 h-full inset-0 w-full object-cover">
        <source src={skillsBackground} />
      </video>
    <div className="text-center py-1 px-1 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h1 className="block text-2xl font-bold text-black sm:text-4xl ">
        Skills
      </h1>
      <div className="flex ">
        <div className="max-w-[80rem] px-1 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6 md:gap-10">
            {skillsData.map((skill, index) => (
              <div key={index} className="w-48 h-20 bg-indigo-100 shadow-xl rounded-lg p-3">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-indigo-200 bg-slate-100">
                    <img src={skill.imgSrc} alt={skill.name} />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

