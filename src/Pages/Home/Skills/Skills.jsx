import React from "react";
import html from "../../../../public/skills/html.png";
import css from "../../../../public/skills/css.png";
import js from "../../../../public/skills/js.png";
import react from "../../../../public/skills/react.png";
import Boostrap from "../../../../public/skills/bootstrap.png";
import tailwind from "../../../../public/skills/tailwind.png";
import nodejs from "../../../../public/skills/nodejs.png";
import express from "../../../../public/skills/icons8-express-js-50.png";
import mongodb from "../../../../public/skills/mongodb.png";
import c from "../../../../public/skills/c.png";
import firebase from "../../../../public/skills/firebase.png";
import git from "../../../../public/skills/git.png";
import github from "../../../../public/skills/github.png";
import vercel from "../../../../public/skills/vercel.png";
import netlify from "../../../../public/skills/netlify.png";

const Skills = () => {
  return (
    <div  id="skills" className="my-32">
      <div className="mb-10 md:mb-16">
      <p className="text-4xl text-center text-pink-600 font-semibold tracking-widest">Skills</p>
      <hr className="border-t-2 border-cyan-500 w-4/12 md:w-1/12 mx-auto mb-[2px]"/>
      <hr className="border-t-2 border-cyan-500 w-4/12  md:w-1/12 mx-auto mb-1"/>
      </div>
      <div className="flex justify-center">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-2 md:grid-cols-5 "
      >
        <span className="flex items-center bg-[#49494d0e] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={html} alt="" />
          <p className="text-white">HTML5</p>
        </span>
        <span className="flex items-center bg-[#49494d12] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={css} alt="" />
          <p className="text-white">CSS3</p>
        </span>
        <span className="flex items-center bg-[#49494d08] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={Boostrap} alt="" />
          <p className="text-white">Boostrap</p>
        </span>
        <span className="flex items-center bg-[#49494d0d] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={tailwind} alt="" />
          <p className="text-white">Tailwind CSS</p>
        </span>
        <span className="flex items-center bg-[#49494d0c] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={js} alt="" />
          <p className="text-white">JavaScript</p>
        </span>
        <span className="flex items-center bg-[#49494d0d] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={react} alt="" />
          <p className="text-white">React</p>
        </span>
        <span className="flex items-center bg-[#49494d14] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={firebase} alt="" />
          <p className="text-white">firebase</p>
        </span>
        <span className="flex items-center bg-[#49494d12] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={nodejs} alt="" />
          <p className="text-white">NodeJs</p>
        </span>
        <span className="flex items-center bg-[#49494d13] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={express} alt="" />
          <p className="text-white">ExpressJs</p>
        </span>
        <span className="flex items-center bg-[#49494d11] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={mongodb} alt="" />
          <p className="text-white">MongoDB</p>
        </span>
        <span className="flex items-center bg-[#49494d09] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={git} alt="" />
          <p className="text-white">Git</p>
        </span>
        <span className="flex items-center bg-[#49494d11] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={github} alt="" />
          <p className="text-white">Github</p>
        </span>
        <span className="flex items-center bg-[#49494d11] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={netlify} alt="" />
          <p className="text-white">Netlify</p>
        </span>
        <span className="flex items-center bg-[#49494d11] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={vercel} alt="" />
          <p className="text-white">Vercel</p>
        </span>
        <span className="flex items-center bg-[#49494d11] hover:bg-teal-800 duration-700 p-2 px-3 rounded-lg mx-5 my-3">
          <img className="h-12 w-12 mr-4" src={c} alt="" />
          <p className="text-white">C</p>
        </span>
      </div>
    </div>
    </div>
  );
};

export default Skills;
