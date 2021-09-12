import React, { Fragment } from "react";

import ComparisonBar from "../layout/ComparisonBar";
import SelectedSystem from "../syncs/SelectedSystem";

// Image
import graph from "../../images/blue_red.jpg";

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
            <img src={graph} alt="" />
          </div>
        </div>
        <div className="row">
          {selected.length === 0 ? (
            <p className="center">{`No Syncs Selected`}</p>
          ) : (
            <Fragment>
              <SelectedSystem
                sync={selected[0]}
                key={selected[0].id}
                color="blue"
              />
              <SelectedSystem
                sync={selected[1]}
                key={selected[1].id}
                color="red"
              />
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  sync: state.sync,
});

export default connect(mapStateToProps, {})(Compare);
