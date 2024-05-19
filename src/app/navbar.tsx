"use client";

import Link from "next/link";
import { GiCrenelCrown } from "react-icons/gi";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <div
      className={clsx(
        "w-full fixed bg-navColor pt-2 text-bgWhite text-2xl font-semibold flex z-10",
        path === "/"
          ? "w-full bg-transparent pt-2 text-bgWhite text-2xl font-semibold flex gap-5"
          : ""
      )}
    >
      <div className=" text-2xl pl-20 w-full flex gap-1 ">
        <img src="animate.gif" width={40} />
        <p className="pt-1 hover:underline hover:text-bgGold hover:duration-1000 ">
          <Link href="/about"> RAJAN </Link>
        </p>
      </div>
      <div className="  w-full flex gap-5 justify-evenly ">
        <div className=" hover:underline hover:text-bgGold hover:duration-1000 ">
          <Link href="/">Home</Link>
        </div>
        <div className=" hover:underline hover:text-bgGold hover:duration-1000 ">
          <Link href="/gallery">Gallery</Link>
        </div>
        <div className="cursor-pointer hover:underline hover:text-bgGold hover:duration-1000">
          <Link href="/contact"> Contact Me </Link>
        </div>
        <div className="hover:underline hover:text-bgGold hover:duration-1000">
          <Link href="/about">About Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
