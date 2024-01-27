import React from "react";
import "./AboutMe.css";
import Lottie from "lottie-react";
import aboutMe from "../../../assets/99591-web-developmet.json";
import Aos from "aos";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="my-24">
      <p className="text-white  md:mx-24 "></p>
      <div className="flex flex-col-reverse md:flex-row lg:flex-row   items-center mx-5 md:mx-24">
        <div className="text-white pb-7 w-11/12 md:pt-40 md:w-6/12">
          <p
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="text-justify"
          >
            {" "}
            <strong className="text-pink-500 text-4xl tracking-widest">
              About me{" "}
            </strong>{" "}
            <br /> <br />
            Hello, I am Md. Tahmid Hasan. I am passonite web developer with
            strong focus on full Stack development.I am dedicated to learning and
            mastering new technologies, and coding has become my true passion. I
            stay up-to-date with the latest industry trends by exploring
            cutting-edge technologies. By continuously expanding my skill set, I
            ensure I can deliver innovative solutions.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          <Lottie animationData={aboutMe} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
