"use client";
import { useState } from "react";
import { Button, Card, CustomFlowbiteTheme } from "flowbite-react";
import { FiMessageCircle } from "react-icons/fi";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp, IoPersonCircleSharp } from "react-icons/io5";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    base: "flex w-[30vh] rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
  },
};

export default function Contact() {
  const [isVisible, setisVisible] = useState(true);

  const handleClick = () => {
    setisVisible(false);
  };

  const handleHiddenClick = () => {
    setisVisible(true);
  };

  const handleAlertClick = () => {
    alert("Do you want to Download C.V.");
  };
  return (
    <>
      {isVisible && (
        <div className="h-screen bg-[#0E7490] flex items-center justify-center w-full ">
          <Card
            theme={customTheme}
            color="primary"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="bottom"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              GET IN TOUCH
            </h5>
            <div>
              <div className="flex items-center">
                <IoMailSharp fill="#0E7490" />
                <p className="text-black font-semibold p-1">Email:</p>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                rajansaru789@gmail.com
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <FaPhoneAlt fill="#0E7490" />
                <p className="text-black font-semibold p-1"> Contact: </p>
              </div>
              <p className=" text-gray-700 dark:text-gray-400">
                +977 9817527972
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <FaLocationDot fill="#0E7490" />
                <p className="font-semibold text-black"> Address:</p>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Devdaha-5,Khaireni
              </p>
            </div>
            <Button onClick={handleClick}>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
      )}
      {!isVisible && (
        <div
          className="h-screen w-full flex flex-col justify-center items-center gap-16"
          style={{
            backgroundImage: "url('bgimg.jpg')",
            backgroundSize: "auto ",
          }}
        >
          <div className="flex flex-col justify-center w-full  gap-6  items-center   ">
            <p className="text-4xl font-semibold   ">Contact</p>
            <p className=" fontstyle text-xl font-semibold flex flex-col  text-justify items-center">
              <span>
                Rajan Saru Magar, 1st year Student Fill up the Form
              </span>
              <span>if you guys are interested to do Projects</span>
            </p>
          </div>

          {/* Form Code */}
          <div className="flex w-full h-[60vh] justify-center   bg-transparent  ">
            <form className="flex flex-col gap-5 h-full">
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="text" className="  font-bold">
                  <IoPersonCircleSharp
                    className="absolute left-2 top-11 h-5 w-5"
                    fill="#0E7490"
                  />
                  Name
                </label>
                <input
                  className="bg-gray-200 px-8  text-black  rounded-xl"
                  id="text"
                  type="text"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="email" className="font-bold">
                  <MdEmail
                    className="absolute left-2 top-11 h-5 w-5"
                    fill="#0E7490"
                  />
                  Email
                </label>
                <input
                  className="bg-gray-200 px-8 text-black  rounded-xl"
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col relative gap-2">
                <label htmlFor="number" className="  font-bold">
                  <MdOutlinePhone
                    className="absolute left-2 top-11 h-5 w-5"
                    fill="#0E7490"
                  />
                  Phone
                </label>
                <input
                  className="bg-gray-200 text-black rounded-xl px-8"
                  id="number"
                  type="text"
                  required
                  placeholder="Enter your phone number"
                />

                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="Message" className=" font-bold">
                    <FiMessageCircle
                      className="absolute left-2 top-10 h-7 w-5"
                      fill="#0E7490"
                    />
                    Message
                  </label>
                  <textarea
                    className="bg-gray-200 px-8 text-black rounded"
                    id="message"
                    required
                    placeholder="Write Something"
                  />
                </div>
              </div>
              <button
                className="bg-navColor hover:bg-blue-700 duration-300 font-semibold text-white shadow p-2 rounded-xl"
                type="submit"
              >
                Submit Now
              </button>
              <button
                className="bg-navColor rounded-xl font-semibold p-1"
                onClick={handleHiddenClick}
              >
                Back
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
