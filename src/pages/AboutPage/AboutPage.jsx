import React from "react";
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <>
    <div className="m-10">
    <h1 className="title-about m-10">Our mission</h1>
    <div className="flex about-container">
  
      <div className="about-page">
        <p className="about-sentence mt-5">
          We all want to change the world, but in order to make real changes we
          need to help the projects that are working on making our world a
          better place.
        </p>
        <p className="about-sentence mt-5">
          There are 40B dollars locked in DeFi and a bunch of Regenerative
          projects awaiting to be funded
        </p>
        <p className="about-sentence mt-5">
          Our mission is to make donation simpler and attractive to you, that is
          why we came up with an innovative solution that is a WIN-WIN.
        </p>
        <p className="about-sentence mt-5">
          You want to do it, the money is there, but we are lacking incentives
          to action
        </p>
        <p className="about-last mt-12">
          If you donate through us, you get the chance to win money by
          participating in a lotto!{" "}
        </p>
      </div>
    </div>
    </div>
   
    </>
  );
};
