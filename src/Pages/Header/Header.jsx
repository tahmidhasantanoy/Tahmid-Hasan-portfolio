import React from "react";
import "./Header.css";

import Lottie from "lottie-react";
import navbar from "../../../public/anime/navbar.json";

import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navMenu = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-pink-600" : isPending ? "pending" : ""
          }
        >
          <Link
            className="text-white font-semibold hover:text-cyan-400 text-[16px]"
            activeClass="active"
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-pink-600" : isPending ? "pending" : ""
          }
        >
          <Link
            className="text-white font-semibold hover:text-cyan-400 text-[16px]"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "" : isPending ? "pending" : ""
          }
        >
          <Link
            className="text-white font-semibold hover:text-cyan-400  text-[16px]"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "text-pink-600" : isPending ? "pending" : ""
          }
        >
          <Link
            className="text-white font-semibold hover:text-cyan-400 text-[16px]  text-[16px].bg-transparent"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar .bg-[#00cbe6] bg-[#06163b6c] shadow-2xl  fixed z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="text-white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link
          className="text-white font-bold btn btn-ghost"
          // activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Lottie
            className="w-12 h-12"
            animationData={navbar}
            loop={true}
          ></Lottie>
          <p className="text-white">Tahmid Hasan</p>
        </Link>
      </div>
      <div className="navbar-end mr-32">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      </div>
    </div>
  );
};

export default Header;
