import React from "react";

const SelectedSystem = ({ sync, color }) => {
  const { system, updateDates } = sync;

  return (
    <div className="col s6">
      <ul className={`collection with-header`}>
        <li className={`collection-header ${color} lighten-4`}>
          <h4 className="center" style={{ fontWeight: "bold" }}>
            {system}
          </h4>
        </li>
        {updateDates.map((date) => (
          <li className={`collection-item ${color} lighten-5`}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedSystem;
