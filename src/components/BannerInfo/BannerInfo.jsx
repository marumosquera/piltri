import React from "react";
import { BiDonateHeart } from "react-icons/bi";

import { GiWorld } from "react-icons/gi";

import { AiOutlineDollar } from "react-icons/ai";

import './BannerInfo.css'
export const BannerInfo = () => {
  return (
    <>
      <div className="w-full flex mt-12 mb-10">
      <div className="w-1/3 icons-container">
        <BiDonateHeart className="icons"/>
        <p>DONATE</p>
      </div>
      <div className="w-1/3 icons-container">
        <GiWorld className="icons" />
        <p>SAVE THE PLANET</p>
      </div>
      <div className="w-1/3 icons-container">
        <AiOutlineDollar className="icons" />
        <p>EARN REWARDS</p>
      </div>
    </div>

    </>
  
  );
};
