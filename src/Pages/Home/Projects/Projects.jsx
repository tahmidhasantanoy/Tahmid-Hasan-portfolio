import React from "react";
import "./Projects.css";

import { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { FaLink } from "react-icons/fa";
// Goal Rush 
import a1a from "../../../../public/Screenshoot/A1/selected classes.png";
import a1b from "../../../../public/Screenshoot/A1/all-class.png";
import a1c from "../../../../public/Screenshoot/A1/enroll.png";
import a1d from "../../../../public/Screenshoot/A1/ins-das.png";
import a1e from "../../../../public/Screenshoot/A1/all-ins.png";

// Toys land 
import Tmytoy from "../../../../public/Screenshoot/A2/mytoy.png";
import Taddtoy from "../../../../public/Screenshoot/A2/addtoy.png";
import Talltoy from "../../../../public/Screenshoot/A2/alltoy.png";
import Tlogin from "../../../../public/Screenshoot/A2/login.png";
import Tsignup from "../../../../public/Screenshoot/A2/signup.png";

// chef corner 
import Clogin from "../../../../public/Screenshoot/A3/login.png";
import Csignup from "../../../../public/Screenshoot/A3/signup.png";
import Cview from "../../../../public/Screenshoot/A3/view.png";
import Ctips from "../../../../public/Screenshoot/A3/tips.png";

const Projects = () => {
  return (
    <div id="projects" className="my-32">
      <div className="mb-12 md:mb-20">
        <p className="text-4xl text-center text-pink-600 font-semibold tracking-widest">
          Projects
        </p>
        <hr className="border-t-2 border-cyan-500 w-5/12 md:w-[180px] mx-auto mb-[2px]" />
        <hr className="border-t-2 border-cyan-500 w-5/12  md:w-[180px] mx-auto mb-1" />
        <p className="text-white text-center text-[18px]">
          Here is my recent projects.
        </p>
      </div>
      <div className="flex items-center mx-auto w-full justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
          <div
            data-aos="flip-left"
            data-aos-duration="3000"
            className="card w-80 md:w-[400px] bg-base-100 shadow-2xl rounded-md mx-10 mb-12 "
          >
            <figure className="bg-image1 duration-1000 "></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold ">Goal Rush!</h2>
              <div
                className="grrid grid-cols-1 md:grid-cols-2
                     items-center"
              >
                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block ">
                    <a href="https://goalrush-9bf94.web.app/">Live link</a>
                  </p>
                  <FaLink className="ml-2" />
                </span>
                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block">
                    <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-tahmidhasantanoy">
                      Client side
                    </a>
                  </p>
                  <FaLink className="ml-2" />
                </span>
                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm  text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block">
                    <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-tahmidhasantanoy">
                      Server side
                    </a>
                  </p>
                  <FaLink className="ml-2" />
                </span>
              </div>
              <p className="text-justify">
                This is a Football academy based website.Where user can purchase
                any course by payment.Instruct can add & update their classes,
                Admin can accept or deny class.
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-info"
                  onClick={() => window.my_modal_1.showModal()}
                >
                  View Details
                </button>
              </div>
              {/* modal  */}
              <dialog id="my_modal_1" className="modal ">
                <form
                  method="dialog"
                  className="modal-box w-11/12 max-w-5xl bg-[#043050] "
                >
                  <button className="btn btn-sm btn-circle btn-info absolute right-2 top-2">
                    ✕
                  </button>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-5/12 mx-8">
                      <Carousel>
                        <div>
                          <img className="w-[340px] " src={a1a} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={a1b} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={a1c} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={a1d} />
                        </div>
                        <div>
                      <img className="w-[340px] " src={a1e} />
                    </div>
                      </Carousel>
                      <div
                        className="grrid grid-cols-2 md:grid-cols-3
                     items-center"
                      >
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://goalrush-9bf94.web.app/">
                              Live link
                            </a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-tahmidhasantanoy">
                              Client side
                            </a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-tahmidhasantanoy">
                              Server side
                            </a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                      </div>
                    </div>

                    <div className="w-7/12 mx-8">
                      <p className="text-2xl  font-semibold text-pink-500 pt-8 md:pt-12 pb-3">
                        Used technology
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 pb-8 md:pb-12">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                            React hook form
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center ">
                            Firebase
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                            Tanstack query
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                            Axios secure
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                            React spring
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">immgBB</p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">Jwt</p>
                        </span>
                       
                      </div>
                      <ul className="list-disc text-white">
                        <p className="text-pink-500 text-2xl  font-semibold pb-3">
                          Key features{" "}
                        </p>
                        <li>
                          User can create their own account with
                          authentication.After create account they can enjoy all
                          the features.They can add their favorite list which
                          classes they like most.Also have enroll option ussing
                          payment sytem.Users also show their add & enroll list
                          in their dashboard.
                        </li>
                        <li>
                          Instructors can add or update his/her classes.After
                          add classes it will show in admin panel.Instructor can
                          show in his/her dashboard which he/she added before.
                        </li>
                        <li>
                          Admin have the ability to accept or deny any
                          classes.If admin deny a class, them he can give a
                          feedback for improvement.Admin also have power to make
                          user as insructor or admin.
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
          {/* Toys Land!  */}
          <div
            data-aos="flip-left"
            data-aos-duration="3000"
            className="card w-80 md:w-[400px] bg-base-100 shadow-2xl rounded-md mx-10 mb-12"
          >
            <figure className="bg-image2 duration-1000 "></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">Toys Land!</h2>
              <div
                className="grrid grid-cols-1 md:grid-cols-2
                     items-center"
              >
                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block">
                    <a href="https://toys-land.web.app/"> Live link</a>
                  </p>
                  <FaLink className="ml-2" />
                </span>
                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block">
                    <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-tahmidhasantanoy">
                      Client side
                    </a>
                  </p>
                  <FaLink className="ml-2" />
                </span>
                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm  text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block">
                    <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-tahmidhasantanoy">
                      Server side
                    </a>
                  </p>
                  <FaLink className="ml-2" />
                </span>
              </div>
              <p className="text-justify">
                Toys Land E-commerce based website.In this site seller can add
                their product for sell.Alongside,user can purchase if they have
                account.
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn  btn-info"
                  onClick={() => window.my_modal_2.showModal()}
                >
                  View Details
                </button>
              </div>
              {/* modal  */}
              <dialog id="my_modal_2" className="modal ">
                <form
                  method="dialog"
                  className="modal-box w-11/12 max-w-5xl bg-[#043050] "
                >
                  <button className="btn btn-sm btn-circle btn-info absolute right-2 top-2">
                    ✕
                  </button>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-5/12 mx-8">
                      <Carousel>
                        <div>
                          <img className="w-[340px] " src={Tmytoy} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={Taddtoy} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={Talltoy} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={Tlogin} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={Tsignup} />
                        </div>
                        {/* <div>
                      <img className="w-[340px] " src={a1e} />
                    </div> */}
                      </Carousel>
                      <div
                        className="grrid grid-cols-2 md:grid-cols-3
                     items-center"
                      >
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://toys-land.web.app/">Live link</a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-tahmidhasantanoy">
                              Client side
                            </a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-tahmidhasantanoy">
                              Server side
                            </a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                      </div>
                    </div>

                    <div className="w-7/12 mx-8">
                      <p className="text-2xl  font-semibold text-pink-500 pt-8 md:pt-12 pb-3">
                        Used technology
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 pb-8 md:pb-12">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                            React tabs
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                            React toastify
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                            React Helmet
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center ">
                            Firebase
                          </p>
                        </span>

                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">Jwt</p>
                        </span>
                      </div>
                      <ul className="list-disc text-white">
                        <p className="text-pink-500 text-2xl  font-semibold pb-3">
                          Key features{" "}
                        </p>
                        <li>
                          This web site use Firebase Authentication for
                          authenticate users.If user logged in they can show all
                          features & also can see toys details.It's a responsive
                          website.
                        </li>
                        <li>
                          Here seller can add their toys on add toys section.
                        </li>
                        <li>
                          Sellers are also able to delete or update their
                          product on my toys section if they want.
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="3000"
            className="card w-80 md:w-[400px] bg-base-100 shadow-2xl rounded-md mx-10 mb-12"
          >
            <figure className="bg-image3 duration-1000 "></figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">Chef corner!</h2>
              <div
                className="grrid grid-cols-1 md:grid-cols-2
                     items-center"
              >
                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block">
                    <a href="https://chef-corner.web.app/">Live link</a>
                  </p>
                  <FaLink className="ml-2" />
                </span>
                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block">
                    <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-tahmidhasantanoy">
                      Client side
                    </a>
                  </p>
                  <FaLink className="ml-2" />
                </span>

                <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-sm  text-sm font-semibold text-gray-700 mr-2 mb-2 py-1 px-2">
                  <p className=" font-bold text-center inline-block">
                    <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-tahmidhasantanoy">
                      Server side
                    </a>
                  </p>
                  <FaLink className="ml-2" />
                </span>
              </div>
              <p className="text-justify">
                Chef corner is a website where lot of chef share their receipe
                with their special ingredient.Here,user also able to add to
                favorite which they love.
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-info"
                  onClick={() => window.my_modal_3.showModal()}
                >
                  View Details
                </button>
              </div>
              {/* modal  */}
              <dialog id="my_modal_3" className="modal ">
                <form
                  method="dialog"
                  className="modal-box w-11/12 max-w-5xl bg-[#043050] "
                >
                  <button className="btn btn-sm btn-circle btn-info absolute right-2 top-2">
                    ✕
                  </button>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-5/12 mx-8">
                      <Carousel className="">
                        <div>
                          <img className="w-[340px] " src={Clogin} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={Csignup} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={Cview} />
                        </div>
                        <div>
                          <img className="w-[340px] " src={Ctips} />
                        </div>
                        {/* <div>
                      <img className="w-[340px] " src={a1e} />
                    </div> */}
                      </Carousel>
                      <div
                        className="grrid grid-cols-2 md:grid-cols-3
                     items-center"
                      >
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://chef-corner.web.app/">Live link</a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-tahmidhasantanoy">
                              Client side
                            </a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                        <span className="inline-flex items-center  bg-gray-200 hover:bg-info hover:duration-500 hover:text-white rounded-3xl .px-3 text-sm font-semibold text-gray-700 mr-2 mb-2 py-2 px-2">
                          <p className=" font-bold text-center inline-block">
                            <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-tahmidhasantanoy">
                              Server side
                            </a>
                          </p>
                          <FaLink className="ml-2" />
                        </span>
                      </div>
                    </div>

                    <div className="w-7/12 mx-8">
                      <p className="text-2xl  font-semibold text-pink-500 pt-8 md:pt-12 pb-3">
                        Used technology
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 pb-8 md:pb-12">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                            React toastify
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center">
                          React-to-pdf
                          </p>
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          <p className="my-1 font-bold text-center ">
                            Firebase
                          </p>
                        </span>
                      </div>
                      <ul className="list-disc text-white">
                        <p className="text-pink-500 text-2xl  font-semibold pb-3">
                          Key features{" "}
                        </p>
                        <li>
                          Chef corner is Responsive Website.I try to use
                          firebase authentication system for authenticate users,
                          Third party login is available here.If user logged in
                          they can enjoy all features of Chef corner.
                        </li>
                        <li>
                          This website have many chef profile with their menu
                          items.User can show(If logged in) a chef details by
                          clicking view receipes.
                        </li>
                        <li>
                          view receipes will show all details about the chef &
                          show raw ingredients behind their manus.
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
