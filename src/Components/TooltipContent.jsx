// import React from "react";

// const TooltipContent = ({ value, label }) => {
//   return (
//     <div style={{ backgroundColor: "white", color: "black", padding: "10px" }}>
//       <p>Value: {value}</p>
//       <p>Label: {label}</p>
//     </div>
//   );
// };

// export default TooltipContent;

import React from "react";

const TooltipContent = ({ name, value, onClose }) => {
  const handleLike = () => {
    // Implement your logic for handling the like button click here
    console.log("Liked!", name);
  };

  return (
    <div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button className="like-button" onClick={handleLike}>
        Like
      </button>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default TooltipContent;
