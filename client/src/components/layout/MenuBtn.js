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
  setTheme,
} from "../../actions/syncActions";

const MenuBtn = ({
  sync: { select_mode, selected, theme },
  setSelectMode,
  clearSelectMode,
  clearSelected,
  setTheme,
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

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Fragment>
      <div className="fixed-action-btn">
        {/* Menu Open Button */}
        <a
          href="#!"
          className="btn-floating btn-large waves-effect waves-light blue lighten-1"
        >
          <i className="large material-icons">menu</i>
        </a>
        {/* Functional Buttons */}
        <ul>
          {/* Theme Button */}
          <li>
            <a
              href="#!"
              className={`btn-floating waves-effect waves-light ${
                theme === "light" ? "grey darken-3" : "grey lighten-1"
              }`}
              onClick={changeTheme}
            >
              <i className="material-icons">
                {theme === "light" ? "dark_mode" : "light_mode"}
              </i>
            </a>
          </li>

          {/* Logout Button */}
          <li>
            <Link
              to="/login"
              className="btn-floating waves-effect waves-light red"
            >
              <i className="material-icons">logout</i>
            </Link>
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
              className="btn-floating btn-large waves-effect waves-light green"
            >
              <i className="large material-icons">compare_arrows</i>
            </Link>{" "}
          </div>
        ) : (
          <div className="fixed-action-btn" style={{ right: "100px" }}>
            {/* Menu Open Button */}
            <a
              href="#!"
              className="btn-floating btn-large waves-effect waves-light red"
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
  setTheme: PropTypes.func.isRequired,
  setSelectMode: PropTypes.func.isRequired,
  clearSelectMode: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  sync: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sync: state.sync,
});

export default connect(mapStateToProps, {
  setTheme,
  setSelectMode,
  clearSelectMode,
  clearSelected,
})(MenuBtn);
