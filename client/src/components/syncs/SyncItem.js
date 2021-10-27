import React from "react";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

// Image placeholder
import black_avatar from "../../images/black_avatar.jpeg";

// Redux
import { connect } from "react-redux";

import {
  addToSelected,
  removeFromSelected,
  setCurrent,
} from "../../actions/syncActions";

const SyncItem = ({
  sync,
  select_mode,
  setCurrent,
  addToSelected,
  removeFromSelected,
  selected,
}) => {
  const onSelect = () => {
    if (selected.length < 2) {
      addToSelected(sync);
    } else {
      M.toast({ html: "You already added 2 items for selected" });
    }
  };

  const onUnselect = () => {
    removeFromSelected(sync);
  };

  const onInfo = () => {
    setCurrent(sync);
  };

  return (
    <li
      className={`collection-item avatar ${
        select_mode && "light-blue lighten-5"
      }`}
      onClick={
        select_mode &&
        (selected.includes(sync) === true ? onUnselect : onSelect)
      }
    >
      <img src={black_avatar} alt="" class="circle" />
      <a
        href="#log-info-modal"
        className="modal-trigger blue-text text-darken-4 text-bold"
        style={{ fontWeight: "bold" }}
        onClick={onInfo}
      >
        {sync.system}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID #{sync.id}</span> last updated{" "}
        <Moment format="h:mm:ss a, MM.DD.YYYY">{sync.lastUpdateDate}</Moment>
      </span>
      <hr style={HRstyle} />
      <span className="grey-text">
        Updates: <span className="black-text">{sync.updateDates.length}</span>
      </span>
      {!select_mode ? (
        <a href="#edit-log-modal" className="secondary-content modal-trigger">
          <i className="material-icons grey-text text-lighten-1">edit</i>
        </a>
      ) : (
        <a href="#!" className="secondary-content">
          {selected.includes(sync) === true ? (
            <i className="material-icons green-text">done</i>
          ) : (
            <i className="material-icons grey-text">add</i>
          )}
        </a>
      )}
    </li>
  );
};

const HRstyle = {
  border: "0",
  height: "0",
  width: "30%",
  marginLeft: "0",
  borderTop: "1px solid rgba(0, 0, 0, 0.08)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
};

SyncItem.propTypes = {
  sync: PropTypes.object.isRequired,
  select_mode: PropTypes.bool.isRequired,
  setCurrent: PropTypes.func.isRequired,
  addToSelected: PropTypes.func.isRequired,
  removeFromSelected: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  selected: state.sync.selected,
});

export default connect(mapStateToProps, {
  addToSelected,
  removeFromSelected,
  setCurrent,
})(SyncItem);
