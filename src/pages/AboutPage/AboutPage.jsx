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
              We believe that the regenerative sector holds enormous potential
              for creating a sustainable and equitable future, but that it often
              struggles to secure the necessary funding.
            </p>
            <p className="about-sentence mt-5">
              So, in order to generate a real impact, we need to help the
              projects that are working on making our world a better place.
            </p>
            <p className="about-sentence mt-5">
              Our mission is to make donation simpler and attractive to you,
              that is why we came up with an innovative solution that is a
              WIN-WIN.
            </p>
            <p className="about-sentence mt-5">
              There’s over $40B locked in DeFi and a bunch of Earth regeneration
              projects waiting to be funded.
            </p>
            <p className="about-sentence mt-5">
              Our mission is to make donations simple and fun for you, that’s
              why we came up with an innovative solution that is a WIN-WIN:
            </p>
            <p className="about-last mt-12">
              Donate through us and get awesome IRL & crypto rewards!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
