"use client";

import { Carousel, CustomFlowbiteTheme } from "flowbite-react";

export default function Component() {

  // const customTheme: CustomFlowbiteTheme["carousel"] = {
  //   color: {
  //     primary: "bg-red-500 hover:bg-red-600",
  //   },
  // };

  return (
    <>
      <div className="h-screen">
        <Carousel>
          <div>
            <img src="banner1.jpg" alt="..." className="w-full h-96" />
            <p className=" text-black flex justify-center items-center h-[500px]" >this is berief description about the above poster</p>
          </div>

          <div>
            <img src="banner2.jpg" alt="..." className="w-full h-96" />
            <p className=" text-black flex justify-center items-center h-[500px]">this is berief description about the above poster</p>
          </div>
          <div>
            <img src="banner3.jpg" alt="..." className="w-full h-96" />
            <p className=" text-black flex justify-center items-center h-[500px]">this is berief description about the above poster</p>
          </div>
          <div>

          <img src="banner4.jpg" alt="..."  className="w-full h-96"/>
          <p className=" text-black flex justify-center items-center h-[500px]"> this is berief description about the above poster</p>
          </div>

          <div>

          <img src="banner5.jpg" alt="..."  className="w-full h-96"/>
          <p className=" text-black flex justify-center items-center h-[500px]">this is berief description about the above poster</p>
          </div>
          <div>

          <img src="banner6.jpg" alt="..." className="w-full h-96" />
          <p className=" text-black flex justify-center items-center h-[500px]">this is berief description about the above poster</p>
          </div>
        </Carousel>
      </div>
    
    </>
  );
}
