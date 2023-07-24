// import React from "react";
// import { Box } from "@mui/material";

// const TimeComponent = ({ time }) => {
//   const isPastTime = new Date(time) < new Date(); // Compare time with current time

//   const backgroundColor = isPastTime ? "black" : "white";
//   const color = isPastTime ? "white" : "black";

//   return (
//     <Box
//       sx={{
//         backgroundColor,
//         color,
//         padding: "10px",
//         borderRadius: "4px",
//       }}
//     >
//       {time}
//     </Box>
//   );
// };

// export default TimeComponent;

// import React, { useState, useEffect } from "react";
// import { Typography, Box } from "@mui/material";

// const TimeComponent = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const formatTime = (date) => {
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   };

//   const isPast = (time) => {
//     return time < currentTime;
//   };

//   const isFuture = (time) => {
//     return time > currentTime;
//   };

//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//       style={{
//         background: isPast(currentTime)
//           ? "#ff9999"
//           : isFuture(currentTime)
//           ? "#99ff99"
//           : "transparent",
//         transition: "background 0.5s ease",
//       }}
//     >
//       <Typography variant="h2">{formatTime(currentTime)}</Typography>
//     </Box>
//   );
// };

// export default TimeComponent;

import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const isPast = (time) => {
    return time < currentTime;
  };

  const isFuture = (time) => {
    return time > currentTime;
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      style={{
        background: isPast(currentTime)
          ? "#ff9999"
          : isFuture(currentTime)
          ? "#99ff99"
          : "transparent",
        transition: "background 0.5s ease",
      }}
    >
      <Typography variant="h2">{formatTime(currentTime)}</Typography>
    </Box>
  );
};

export default TimeComponent;
