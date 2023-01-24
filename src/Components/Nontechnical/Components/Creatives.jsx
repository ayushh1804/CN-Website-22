import React from "react";
import style from "./Domainspage.module.css";
import leftlogo from "./logo.svg";
import linelogo from "./logo2.png";

const Creatives = () => {
  return (
    <div
      className={`${style.domainHeadingbg} mt-20 h-auto lg:h-full absolute bottom-0`}
    >
      {/* Our Domain section */}
      <section className=" text-[#EE4623] tracking-widest mt-40">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl md:text-4xl font-medium ">NON-TECHNICAL</p>
          <p className="text-5xl md:text-7xl font-bold">CREATIVES</p>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row mt-20 items-center justify-center pb-10 lg:pb-0">
        <div>
          <img
            className=" lg:w-[380px] h-auto w-60 md:w-80 mb-10 lg:mb-0 lg:ml-20 lg:mr-20 md "
            src={leftlogo}
            alt=""
          />
        </div>
        <div className=" flex text-center justify-center items-center lg:w-1/2 mx-2 md:mx-10">
          <img className=" mx-2" src={linelogo} alt="" />
          <p className=" text-white mx-10 text-base md:text-2xl lg:leading-9 lg:text-sm">
            So, here we are with the most exciting and fascinating domain of the
            club that will help you to imagine and create the masterpieces of
            all time. This is a perfect combination of fun, learning and
            creating something that has never been created before.
          </p>
          <img className=" mx-2" src={linelogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Creatives;
