import React from "react";

export const SectionInfo = ({ value, value2, img }) => {
  return (
    <div className="container">
      <h2>{value}</h2>
      <p>{value2}</p>
      <img src={img}/>
    </div>
  );
};
