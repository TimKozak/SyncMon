import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";

// Redux actions
import {
  setSelectMode,
  clearSelectMode,
  clearSelected,
} from "../../actions/syncActions";

const MenuBtn = ({
  sync: { select_mode, selected },
  setSelectMode,
  clearSelectMode,
  clearSelected,
}) => {
  const openSelectMode = () => {
    if (!select_mode) {
      setSelectMode();
      M.toast({ html: "Select 2 sync systems to compare" });
    }
  };

  const closeSelectMode = () => {
    clearSelectMode();
    clearSelected();
  };

  return (
    <Fragment>
      <div className="fixed-action-btn">
        {/* Menu Open Button */}
        <a
          href="#!"
          className="btn-floating btn-large waves-effect waves-light grey darken-3"
        >
          <i className="large material-icons">menu</i>
        </a>
        {/* Functional Buttons */}
        <ul>
          {/* Logout Button */}
          <li>
            <a href="#!" className="btn-floating waves-effect waves-light red">
              <i className="material-icons">logout</i>
            </a>
          </li>

          {/* Upload Button */}
          <li>
            <a
              href="#upload-modal"
              className="btn-floating waves-effect waves-light green modal-trigger"
            >
              <i className="material-icons">file_upload</i>
            </a>
          </li>

          {/* Compare Button */}
          <li>
            <a
              href="#!"
              className="btn-floating waves-effect waves-light orange"
              onClick={openSelectMode}
            >
              <i className="material-icons">compare_arrows</i>
            </a>
          </li>
        </ul>{" "}
      </div>
      {select_mode &&
        (selected.length === 2 ? (
          <div className="fixed-action-btn" style={{ right: "100px" }}>
            {/* Menu Open Button */}
            <Link
              to="/compare"
              className="btn-floating btn-large waves-effect waves-light green darken-3"
            >
              <i className="large material-icons">compare_arrows</i>
            </Link>{" "}
          </div>
        ) : (
          <div className="fixed-action-btn" style={{ right: "100px" }}>
            {/* Menu Open Button */}
            <a
              href="#!"
              className="btn-floating btn-large waves-effect waves-light red darken-3"
              onClick={closeSelectMode}
            >
              <i className="large material-icons">close</i>
            </a>{" "}
          </div>
        ))}
    </Fragment>
  );
};

MenuBtn.propTypes = {
  setSelectMode: PropTypes.func.isRequired,
  clearSelectMode: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  sync: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sync: state.sync,
});

export default connect(mapStateToProps, {
  setSelectMode,
  clearSelectMode,
  clearSelected,
})(MenuBtn);
