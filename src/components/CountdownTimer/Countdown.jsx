import React, { useContext } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay/DateTimeDisplay";
import "./Countdown.css";

const ShowCounter = ({ days, hours, minutes, seconds }) => {

  return (
    <div className="show-counter">

          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />

      </div>
  );
};

export const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <>
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </>
  );
};
