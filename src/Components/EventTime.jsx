import "../Styles/EventTime.css";
import React, { useState, useEffect } from "react";
import { EventCard } from "./EventCard";
const events = [
  {
    title: "India is growing",
    status: "ANNOUNCED",
    action: "Summary",
    time: "Fri Dec 10 2023 05:30 GMT+0530",
  },
  {
    title: "India is growing",
    status: "ANNOUNCED",
    action: "Summary",
    time: "Fri Dec 11 2023 05:30 GMT+0530",
  },
];

const EventTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const isPast = (time) => {
    return time < currentTime;
  };

  const isFuture = (time) => {
    return time > currentTime;
  };

  return (
    <div>
      <div className="time-container">
        {[...Array(24).keys()].map((hour) => {
          const time = new Date();
          time.setHours(hour, 0, 0, 0);

          let className = "time-slot";
          if (isPast(time)) {
            className += " past";
          } else if (isFuture(time)) {
            className += " future";
          } else {
            className += " present";
          }

          return (
            <div key={hour} className={className}>
              {/* {events.map((eventDetails, index) => {
                return <EventCard event={eventDetails} key={index} />;
              })} */}
              {hour}:00
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventTime;
