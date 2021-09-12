import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Redux actions
import { clearSelectMode, clearSelected } from "../../actions/syncActions";

const ComparisonBar = ({ clearSelectMode, clearSelected }) => {
  const onGoBack = () => {
    clearSelected();
    clearSelectMode();
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue lighten-1">
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
            <Link to="/" onClick={onGoBack}>
              <i className="material-icons">arrow_back</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

ComparisonBar.propTypes = {
  clearSelectMode: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
};

export default connect(null, { clearSelectMode, clearSelected })(ComparisonBar);
