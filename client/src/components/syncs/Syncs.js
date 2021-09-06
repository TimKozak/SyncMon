import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SyncItem from "./SyncItem";
import Preloader from "../layout/Preloader";

// Redux
import { connect } from "react-redux";

const Syncs = ({ sync: { syncs, select_mode } }) => {
  if (syncs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Sync Network</h4>
      </li>
      {syncs.length === 0 ? (
        <p className="center">{`No Syncs Found`}</p>
      ) : (
        syncs.map((sync) => (
          <SyncItem sync={sync} key={sync.id} select_mode={select_mode} />
        ))
      )}
    </ul>
  );
};

Syncs.propTypes = {
  sync: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sync: state.sync,
});

export default connect(mapStateToProps, {})(Syncs);
