import "../Styles/EventTime.css";
import React, { useState, useEffect, useRef } from "react";
import { EventCard } from "./EventCard";
import { Box } from "@mui/material";
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

let data = [
  {
    title: "NASDAQ is ATH",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-07-24T10:38:00.000Z"),
  },
  {
    title: "IT Market is booming again",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-07-24T10:38:00.000Z"),
  },
  {
    title: "DB is leading FOrex Market",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-07-24T10:38:00.000Z"),
  },
  {
    title: "GS annaounced major deal MS",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-07-24T10:38:00.000Z"),
  },
  {
    title: "DB is leading FOrex Market",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-07-21T9:38:00.000Z"),
  },
  {
    title: "DB is leading Forex Market",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-07-25T12:38:00.000Z"),
  },
  {
    title: "GS annaounced major deal MS",
    status: "ANNOUNCED",
    action: "Summary",
    time: new Date("2023-07-23T11:38:00.000Z"),
  },
];

const EventTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const timeMoveRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const firstEventTime = data.length > 0 ? data[0].time.getTime() : null;
    const currentTimeMs = currentTime.getTime();
    const timeMoveElement = timeMoveRef.current;

    if (firstEventTime && timeMoveElement) {
      const pastDuration = currentTimeMs - firstEventTime;
      const futureDuration = 24 * 60 * 60 * 1000 - pastDuration; // 24 hours in milliseconds

      const pastPercentage = Math.min(
        (pastDuration / (24 * 60 * 60 * 1000)) * 100,
        100
      );
      const futurePercentage = Math.min(
        (futureDuration / (24 * 60 * 60 * 1000)) * 100,
        100
      );

      // console.info(
      //   "====SHASHI=====",
      //   pastDuration,
      //   futureDuration,
      //   pastPercentage,
      //   futurePercentage
      // );

      timeMoveElement.style.backgroundSize = `${
        pastPercentage + futurePercentage
      }% auto`;
    }
  }, [currentTime]);

  const isPast = (time) => {
    return time < currentTime;
  };

  const isFuture = (time) => {
    return time > currentTime;
  };

  const renderData = (eventTime) => {
    return data.map((ele, index) => {
      return eventTime === "past"
        ? isPast(ele.time) && (
            <EventCard event={ele} key={index} showTimeAndDate />
          )
        : isFuture(ele.time) && (
            <EventCard event={ele} key={index} showTimeAndDate />
          );
    });
  };

  return (
    <Box>
      <Box
        ref={timeMoveRef}
        className="time-move"
        style={{ display: "flex", backgroundSize: "100% auto" }} // Adjust the background size as needed
      >
        <Box
          className="time-slot past"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
            padding: "1rem",
          }}
        >
          {renderData("past")}
        </Box>
        <Box
          className="time-slot future"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
            padding: "1rem",
          }}
        >
          {renderData("future")}
        </Box>
      </Box>
    </Box>
  );
};

export default EventTime;
