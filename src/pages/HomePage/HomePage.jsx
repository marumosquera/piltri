import React from "react";
import "./HomePage.css";
import { ContactButton } from "../../components/ContactButton/ContactButton";
import { Countdown } from "../../components/CountdownTimer/Countdown";
import { HomeBanner } from "../../components/HomeBanner/HomeBanner";

export const HomePage = () => {
  const announcementDate = 1677672000000;
  return (
    <div className="home-page">
      <HomeBanner />
      <div className="announcement">
        <p>NEXT ANNOUNCEMENT</p>
        <Countdown targetDate={announcementDate} />
      </div>
      <div className="m-5">
        <ContactButton cta={"Keep me updated"} />
      </div>
    </div>
  );
};
