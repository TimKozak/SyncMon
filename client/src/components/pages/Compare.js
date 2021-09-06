import React, { Fragment } from "react";

import ComparisonBar from "../layout/ComparisonBar";
import SelectedItem from "../syncs/SelectedItem";

// Redux
import { connect } from "react-redux";

// Redux actions
import {} from "../../actions/syncActions";

const Compare = ({ sync: { selected } }) => {
  return (
    <Fragment>
      <ComparisonBar />
      <div className="container">
        <div class="card">
          <div class="card-image">
            <img src="https://source.unsplash.com/user/erondu/1600x900" />
          </div>
          <div class="card-content">
            <p className="center">
              Some valuable information about Sync Systems
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">Sync Network</h4>
          </li>
          {selected.length === 0 ? (
            <p className="center">{`No Syncs Selected`}</p>
          ) : (
            selected.map((sync) => <SelectedItem sync={sync} key={sync.id} />)
          )}
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  sync: state.sync,
});

export default connect(mapStateToProps, {})(Compare);
