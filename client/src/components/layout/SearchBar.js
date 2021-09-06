import React, { useRef } from "react";
import PropTypes from "prop-types";

// Redux actions
import { searchSyncs } from "../../actions/syncActions";

// Redux
import { connect } from "react-redux";

const SearchBar = ({ searchSyncs }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchSyncs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="grey darken-2">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Syncs.."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchSyncs: PropTypes.func.isRequired,
};

// Connect redux to this component
// Usage: connect(state, actions)(Component)
export default connect(null, { searchSyncs })(SearchBar);
