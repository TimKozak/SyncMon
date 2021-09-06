import React from "react";
import PropTypes from "prop-types";

const ComparisonBar = ({ clearSelected, clearSelectMode }) => {
  return (
    <nav style={{ marginBottom: "30px" }} className="green darken-3">
      <div class="nav-wrapper">
        <a
          href="#!"
          className="brand-logo center"
          style={{ cursor: "default" }}
        >
          Comparison
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="/">
              <i className="material-icons">arrow_back</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ComparisonBar;
