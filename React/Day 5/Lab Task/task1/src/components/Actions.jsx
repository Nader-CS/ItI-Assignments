import Modal from "./Modal";
import Update from "./Update";
import { useState } from "react";
const Actions = (props) => {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [updateClicked, setUpdateClicked] = useState(false);
  const deleteStatus = () => {
    setDeleteClicked(true);
    // console.log(props.id);
  };
  const deleteMovice = () => {
    props.deleteMovie(props.id);
  };
  const CancelDeleteMovie = () => {
    setDeleteClicked(false);
  };
  const changeupdateClicked = () => {
    if (updateClicked) {
      setUpdateClicked(false);
    } else {
      setUpdateClicked(true);
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-around align-items-center ">
        <button className="btn btn-primary" onClick={changeupdateClicked}>
          Update
        </button>
        <Update
          id={props.id}
          updateMovie={props.updateMovie}
          updateClickedStatus={updateClicked}
          changeupdateClicked={changeupdateClicked}
        ></Update>
        <button className="btn btn-danger" onClick={deleteStatus}>
          Delete
        </button>
        {deleteClicked && (
          <Modal
            deleteClickedStatus={deleteClicked}
            onConfirm={deleteMovice}
            onCancel={setDeleteClicked}
          />
        )}
      </div>
    </div>
  );
};

export default Actions;
