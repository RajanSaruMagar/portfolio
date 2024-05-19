import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="flex justify-between h-screen bg-[#0E7490] p-40 gap-28 ">
        <div>
          <Image alt="error" src={"/photo.jpg"} height={600} width={600} />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <p className="  text-4xl font-bold ">Rajan Saru Magar</p>
          <p className="  font-semibold text-xl ">
            As an skilled FRONTEND DEV,
          </p>
          <p>
            I blend creativity with functionality to craft captivating digital
            experiences. With expertise in HTML, CSS,JavaScript,React and Nextjs
            I specialize in building responsive and interactive Web interfaces.
            Let&apos;s collaborate to bring your vision to life on the web.
          </p>
          <div className="flex flex-row gap-x-8">

          <div className="flex items-center  bg-navColor border-2 p-2  ">
           
            <a href="/cv.jpg" download>
               Resume
            </a>
            <FaArrowUpRightFromSquare />
          </div>
          <div className="flex items-center">
         <Link href={"https://www.facebook.com/razan.sarumagar?mibextid=ZbWKwL"} target="_blank"> <FaFacebookSquare size={50}/> </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
