import { useEffect } from "react";
import "./TimeMove.css";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import { useState } from "react";
import EventCard from "./Card1";
function TimeMove() {
  const { width } = useWindowDimensions();
  const [time, setTime] = useState();
  const [timeInHours, setTimeinHours] = useState();
  function convertToHourFormat(date) {
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();
    return [hour, minutes, seconds];
  }
  useEffect(() => {
    const time = 240;
    let x = 0;
    const timer = setInterval(() => {
      const date = new Date();
      date.getTime();
      setTime(date);
      setTimeinHours(convertToHourFormat(date));
      const st = getComputedStyle(document.documentElement).getPropertyValue(
        "--time-move"
      );
      x++;
      console.log(st);
      const s = st.substring(0, st.length - 2);
      const num = parseInt(s) + width / (4 * time);
      document.documentElement.style.setProperty("--time-move", num + "px");
    }, 1000);
  }, []);
  const options = {
    chart: {
      height: 350,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
  };
  let data = [
    {
      x: "Code",
      y: new Date("2023-07-20").setHours(12, 50, 0),
    },
    {
      x: "Test",
      y: new Date("2019-03-02").setHours(1, 30, 0),
    },
    {
      x: "Validation",
      y: new Date("2019-03-02").setHours(2, 19, 1),
    },
    {
      x: "Deployment",
      y: new Date("2019-03-02").setHours(2, 5, 1),
    },
  ];
  const renderData = (tense) => {
    return data.map((ele) => {
      return tense === "past"
        ? ele.y <= time && <EventCard data={ele} tense={tense} />
        : ele.y > time && <EventCard data={ele} tense={tense} />;
    });
  };
  return (
    <div className="time-move" style={{ display: "flex" }}>
      <div className="past d-flex">{renderData("past")}</div>
      <div className="future">{renderData("future")}</div>
    </div>
  );
}

export default TimeMove;
