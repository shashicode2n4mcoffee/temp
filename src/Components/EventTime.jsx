import "../Styles/EventTime.css";
import React, { useState, useEffect } from "react";
import { EventCard } from "./EventCard";

const events = [
  {
    title: "India is growing",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-12-10T05:30:00.000Z"),
  },
  {
    title: "India is growing",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-12-11T05:30:00.000Z"),
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

          const eventsForHour = events.filter((event) => {
            return event.time.getHours() === hour;
          });

          return (
            <div key={hour} className={className}>
              <div className="hour">{hour}:00</div>
              {eventsForHour.map((eventDetails, index) => {
                return (
                  <EventCard event={eventDetails} key={index} showTimeAndDate />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventTime;
