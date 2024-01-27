import React, { useRef } from "react";
import "./Contact.css";
import Lottie from "lottie-react";
import Connect from "../../../assets/Connect.json";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const notify = () => {
    toast("Successfully! send your text.");
    console.log("asci");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("object");

    emailjs
      .sendForm(
        "service_k48pi0h",
        "template_1z5qf3i", //template_1z5qf3i
        form.current,
        "ffYzQWipdtMJjCeRm" //ffYzQWipdtMJjCeRm
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="mb-0">
        <p className="text-4xl text-center text-pink-600 font-semibold tracking-widest">
          Contact with Me
        </p>
        <hr className="border-t-2 border-cyan-500 w-10/12 md:w-[330px] mx-auto mb-[2px]" />
        <hr className="border-t-2 border-cyan-500 w-10/12  md:w-[330px] mx-auto mb-1" />
        <p className="text-white text-center text-[18px] px-5 md:px-0">
          Contact me directly through the provided form or reach out via the
          provided contact details to discuss potential collaborations.
        </p>
      </div>
      <div
        id="contact"
        className="flex flex-col md:flex-row justify-center items-center .bg-[#041C32]"
      >
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          <Lottie animationData={Connect} loop={true}></Lottie>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
          className="w-full md:w-1/2"
        >
          <form ref={form} onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className=".label">
                <span className="label-text text-[17px] text-zinc-50 font-semibold text-2xl">
                  Name
                </span>
              </label>
              <input
                name="to_name"
                type="name"
                placeholder="Enter your name"
                className="input input-bordered input-info bg-transparent text-white md:w-3/4"
              />
            </div>
            <div className="form-control">
              <label className=".label">
                <span className="label-text text-[17px] text-zinc-50 font-semibold ">
                  Email
                </span>
              </label>
              <input
                name="from_name"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-info text-white bg-transparent md:w-3/4"
              />
    
            </div>
            <div className="form-control">
              <label className=".label">
                <span className="label-text text-[17px] text-zinc-50 font-semibold text-2xl">
                  Message
                </span>
              </label>

              <textarea
                name="message"
                className="textarea textarea-info bg-transparent text-white md:w-3/4"
                placeholder="Type your valuable message"
              ></textarea>
            </div>
            <div className="w-1/4 md:w-1/4 form-control .mt-6">
              <button
                onClick={notify}
                className="btn border-none btn-info badge-outline  text-white hover:text-white hover:bg-[#116D6E]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
