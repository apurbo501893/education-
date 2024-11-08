import React from "react";
import SliderImg from "../assets/slider.png";
import { GiBlackBook } from "react-icons/gi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";

const What = () => {
  return (
    <section className="max-w-screen-xl mx-auto  py-12">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        <div>
          {/* what's New  */}
          <div className="flex flex-col gap-4">
            {" "}
            <p className="text-rose-400 font-bold text-xl">What's New</p>
            <h2 className="text-4xl font-bold">
              Master the skills to drive your career
            </h2>
            <p className="text-gray-600 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 ">
            <div className="bg-white shadow-lg shadow-gray-400 rounded-lg text-sm tracking-wider font-semibold h-28 flex items-center justify-center gap-2 translate-y-0 hover:-translate-y-2 duration-300 ">
              <div className="flex items-center gap-10 md:justify-center ml-6 md:gap-4">
                {/* icons */}
                <GiBlackBook className="text-5xl font-bold text-rose-400" />
                {/* text */}
                <p>ContentStay motivated with engaging instructors</p>
              </div>
            </div>
            <div className="bg-white shadow-lg shadow-gray-400 rounded-lg text-xs h-28 flex items-center justify-center gap-2 translate-y-0 hover:-translate-y-2 duration-300 ">
              <div className="flex items-center gap-10 md:justify-center ml-6 md:gap-4">
                {/* icon */}
                <IoPersonOutline className="text-4xl font-bold text-rose-400 " />
                {/* text */}
                <p className="font-semibold text-sm tracking-wider">
                  Keep up with the latest in cloud
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg shadow-gray-400 rounded-lg text-xs h-28 flex items-center justify-center gap-2 translate-y-0 hover:-translate-y-2 duration-300  ">
              <div className="flex items-center gap-10 md:justify-center ml-6 md:gap-4">
                {/* icon */}
                <PiArrowsDownUpThin className="text-4xl font-bold fill-rose-400" />
                {/* text */}
                <p className="font-semibold text-sm tracking-wider">
                  Get certified with 100 + certification courses
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg shadow-gray-400 rounded-lg text-xs h-28 flex items-center justify-center gap-2 translate-y-0 hover:-translate-y-2 duration-300 ">
              <div className="flex items-center gap-10  md:justify-center ml-6 md:gap-4">
                {/* icon */}
                <BsBookmarkStarFill className="text-4xl font-bold fill-rose-400" />
                {/* text */}
                <p className="font-semibold text-sm tracking-wider">
                  Build skills your way, from labs to courses
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* slider Img */}
          <img
            src={SliderImg}
            alt="sliderImg"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default What;
