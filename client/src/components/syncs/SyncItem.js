import React from "react";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";

import { addToSelected, removeFromSelected } from "../../actions/syncActions";

const SyncItem = ({
  sync,
  select_mode,
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

  return (
    <li className={`collection-item ${select_mode && "blue lighten-5"}`}>
      <div>
        <a
          href="#edit-log-modal"
          className="modal-trigger deep-orange-text text-darken-4 text-bold"
          style={{ fontWeight: "bold" }}
        >
          {sync.system}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{sync.id}</span> last updated{" "}
          <Moment format="h:mm:ss a, MM.DD.YYYY">{sync.lastUpdateDate}</Moment>
        </span>
        {!select_mode ? (
          <a href="#!" className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
        ) : selected.includes(sync) === true ? (
          <a href="#!" className="secondary-content" onClick={onUnselect}>
            <i className="material-icons green-text">done</i>
          </a>
        ) : (
          <a href="#!" className="secondary-content" onClick={onSelect}>
            <i className="material-icons grey-text">add</i>
          </a>
        )}
      </div>
    </li>
  );
};

SyncItem.propTypes = {
  sync: PropTypes.object.isRequired,
  select_mode: PropTypes.bool.isRequired,
  addToSelected: PropTypes.func.isRequired,
  removeFromSelected: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  selected: state.sync.selected,
});

export default connect(mapStateToProps, { addToSelected, removeFromSelected })(
  SyncItem
);
