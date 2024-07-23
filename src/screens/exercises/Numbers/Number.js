import React from "react";

export const Number = ({ number, bkColor, width = "6vw" }) => {
  const styles = {
    backgroundColor: bkColor,
    color: "white",
    width: width,
    height: "12vh",
    fontSize: "40px",
    border: "2px solid white",
    alignContent: "center",
  };
  return <div style={styles}>{number}</div>;
};
