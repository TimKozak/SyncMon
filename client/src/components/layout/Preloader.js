import React from "react";

const Preloader = () => {
  return (
    <div className="progress blue lighten-4" style={{ height: "5px" }}>
      <div className="indeterminate blue lighten-1"></div>
    </div>
  );
};

export default Preloader;
