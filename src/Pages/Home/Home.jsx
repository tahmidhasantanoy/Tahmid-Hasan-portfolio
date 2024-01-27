import picture from "../../../public/images/picture.jpeg";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

import Lottie from "lottie-react";
import download from "../../../public/anime/download.json";

import github from "../../../public/skills/icons8-github-64.png";
import linkedin from "../../../public/skills/icons8-linkedin-50.png";
import facebook from "../../../public/skills/icons8-facebook-50.png";
import { Link } from "react-router-dom";

const Home = () => {
  const resumeURL = "https://64a4483816c5bd03e44426e4--prismatic-choux-f8e59a.netlify.app/Tahmid_WebDev.pdf";
  const DownloadResume = (url) => {
    const fileName = resumeURL.split("/").pop();

    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("dowaload", fileName);

    aTag.click();
    aTag.remove();
  };
  return (
    <div id="home" className="home">
      <div className="hero min-h-screen py-24 md:py-32">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:text-left md:w-5/12  flex justify-end pr-12">
            <img
              className="rounded-3xl w-[250px] h-[300px] md:w-[400px] md:h-[450px]"
              src={picture}
              alt="Person image"
            />
          </div>
          <div className="md:w-7/12 flex flex-col ml-3 .pb-40 md:.pb-0">
            <h1 className="text-3xl font-bold text-white text-start inline">
              Hello! 👋I am Tahmid Hasan
              <div className="md:flex">
                i am a Junior &nbsp;
                <span className="text-pink-500 inline">
                  <Typewriter
                    options={{
                      strings: [
                        "Front-End Developer",
                        "MERN Developer",
                        "Full-Stack Developer",
                        "JavaScript Developer",
                        "Web Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      cursor: "|",
                      delay: 100,
                    }}
                  />
                </span>
              </div>
            </h1>
            <p className="pt-6 pb-3 text-white text-start">
              A passionate MERN Stack Developer with strong set of technical
              skills, a problem-solving mindset, based in Dhaka, Bangladesh.
              📍 <br />
              Feel free to explore my resume below to gain a better
              understanding of my skills and experience.
            </p>
            <button
              onClick={() => DownloadResume(resumeURL)}
              className="btn  btn-info btn-outline w-5/12 md:w-1/4 px-3"
            >
              <div className="flex items-center ">
                <p className="break-normal inline whitespace-nowrap hover:text-white pl-3">
                  Download CV
                </p>
                <Lottie
                  className="w-12 h-12 text-white"
                  animationData={download}
                  loop={true}
                ></Lottie>
              </div>
            </button>
            <div>
              <p className="text-2xl text-white font-semibold mt-8 mb-3">
                Find Me
              </p>
              <div className="flex items-center justify-start">
                <div
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  className="mr-2"
                >
                  <Link
                    to={"https://github.com/tahmidhasantanoy"}
                    className="btn btn-circle btn-md bg-info "
                  >
                    <img className="w-8 h-8" src={github} />
                  </Link>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  className="mr-2"
                >
                  <Link
                    to={
                      "https://www.linkedin.com/in/md-tahmid-hasan-bb3a2017b/"
                    }
                    className="btn btn-circle btn-md bg-info"
                  >
                    <img className="w-7 h-7" src={linkedin} alt="" />
                  </Link>
                </div>
                <div
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  className="mr-2"
                >
                  <Link
                    to={"https://www.facebook.com/tahmid.hasan.tanoy"}
                    className="btn btn-circle btn-md bg-info"
                  >
                    <img className="w-8 h-8" src={facebook} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
