"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { AiFillAudio } from "react-icons/ai";
import { IoMdVideocam } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { PiScreencastLight } from "react-icons/pi";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className="w-[95%] mx-auto flex justify-between items-center h-navbar-height-brijesh sticky top-0 left-0 border border-red-400">
        <div className="flex gap-2 p-2 items-center">
          <RxHamburgerMenu className="block" size={30} />
          <div className="flex gap-1 items-center">
            <IoLogoYoutube color="red" size={30} />
            <h1 className="text-2xl hidden xs:block">YouTube</h1>
          </div>
        </div>
        <div className="flex p-2">
          <input
            type="text"
            placeholder="Search"
            className={`w-[150%] p-2 border md:block hidden rounded-lg bg-[#0F0F0F] ${
              isFocused ? "border-[#184989]" : "border-[#184989]"
            }`}
          />
          <div className="bg-[#222222] md:block hidden">
            <CiSearch size={30} className="cursor-pointer" />
          </div>
          <div>
            <div className="bg-[#222222] ml-2 h-[45px] cursor-pointer md:block hidden rounded-lg w-[55px] flex justify-center items-center">
              <AiFillAudio size={30} />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="sm:block hidden cursor-pointer">
            <IoMdVideocam size={30} />
          </div>
          <div className="sm:hidden block cursor-pointer">
            <PiScreencastLight size={30} />
          </div>
          <div className="">
            <FaRegBell size={30} className="cursor-pointer" />
          </div>
          <div className="sm:block hidden">
            <FaRegUser size={30} className="cursor-pointer" />
          </div>
          <div className="sm:hidden block">
            <CiSearch size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
