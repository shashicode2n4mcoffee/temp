import "../Styles/EventTime.css";
import React, { useState, useEffect } from "react";

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
              {hour}:00
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventTime;
