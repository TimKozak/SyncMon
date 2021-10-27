import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

// Redux
import { connect } from "react-redux";

const InfoModal = ({ sync: { current } }) => {
  return (
    // ID should match the href in the modal trigger
    <div id="log-info-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Info</h4>
        <br />
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = (state) => ({
  sync: state.sync,
});

// Connect redux to this component
// Usage: connect(state, actions)(Component)
export default connect(mapStateToProps, {})(InfoModal);
