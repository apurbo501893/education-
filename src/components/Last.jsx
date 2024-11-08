import React from "react";
import { IoMdContact } from "react-icons/io";
import { TbWorldSearch } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";
const Last = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-20 ">
      <div className="flex items-center justify-between bg-gradient-to-r from-[#b6ccf8] to-[#e4f5fe] h-40 rounded-lg">
        <div>
          <div>
            {/* icon */}
            <IoMdContact />
          </div>
          <div>
            <h2>253,085</h2>
            <p>Student Enrolled</p>
          </div>
        </div>
        <div>
          <div>
            {/* icon */}
            <SlBookOpen />
          </div>
          <div>
            <h2>252</h2>
            <p>Total Course</p>
          </div>
        </div>
        <div>
          <div>
            <TbWorldSearch />
          </div>
          <div>
            <h2>127</h2>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Last;
