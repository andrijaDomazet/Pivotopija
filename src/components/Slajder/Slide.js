import React from "react";

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 50%",
    height: "100%"
  };
  return <div className="slide" style={styles} />;
};
export default Slide;
