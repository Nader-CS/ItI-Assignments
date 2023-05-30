import { useState } from "react";

const Update = (props) => {
  const [name, setName] = useState("");
  const getName = (e) => {
    setName(e.target.value);
  };
  const Confirm = () => {
    console.log(props.id);
    props.updateMovie(props.id, name);
    props.changeupdateClicked();
  };
  const cancel = () => {
    props.changeupdateClicked();
  };
  return (
    <div className="update-container">
      {props.updateClickedStatus && (
        <div>
          <label htmlFor="Name">Name</label>
          <input
            className="ms-2"
            id="Name"
            placeholder="Enter a name"
            type="text"
            value={name}
            onChange={(e) => {
              getName(e);
            }}
          ></input>
          <button className="btn btn-outline-danger m-2 " onClick={Confirm}>
            Confirm
          </button>
          <button className="btn btn-outline-primary" onClick={cancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Update;
