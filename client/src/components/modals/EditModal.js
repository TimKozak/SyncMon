import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditModal = () => {
  const [system, setSystem] = useState("");
  const [fileName, setFileName] = useState("");

  const onSubmit = () => {
    if (system === "" || fileName === "") {
      M.toast({ html: "Please enter a system and attach file" });
    } else {
      M.toast({ html: `${system} data added` });

      // Clear Fields
      setSystem("");
      setFileName("");
    }
  };

  return (
    // ID should match the href in the modal trigger
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Add a New Data / Sync</h4>
        <br />
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={system}
              onChange={(e) => setSystem(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Sync System Name
            </label>
          </div>
          <div className="input-field">
            <button className="btn btn-primary grey lighten-1">
              <i className="material-icons">file_upload</i>
            </button>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect green waves-light btn"
        >
          Add
        </a>
      </div>
    </div>
  );
};

// Connect redux to this component
// Usage: connect(state, actions)(Component)
export default EditModal;
