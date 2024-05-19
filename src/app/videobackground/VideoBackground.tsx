// components/VideoBackground.tsx
import React, { VideoHTMLAttributes } from "react";

const VideoBackground = (): JSX.Element => {
  return (
    <div className=" absolute top-0 w-full h-screen overflow-hidden z-[-10]">
      <div
        className="absolute text-6xl text-white font-semibold pl-40 pt-[25%]  "
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        Welcome to my website
      </div>
      <video autoPlay muted loop className="   w-full h-full object-cover z-0">
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
