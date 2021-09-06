import React from "react";

const SelectedItem = ({ sync }) => {
  return (
    <div className="col s6">
      <h4 className="center">{sync.system}</h4>
    </div>
  );
};

export default SelectedItem;
