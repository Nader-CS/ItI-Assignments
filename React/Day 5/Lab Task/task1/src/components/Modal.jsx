import React, { useState, useEffect } from "react";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const x = useEffect(() => {
    if (props.deleteClickedStatus) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [props.deleteClickedStatus]);
  const handleConfirm = () => {
    setIsOpen(false);
    props.onConfirm();
  };

  const handleCancel = () => {
    setIsOpen(false);
    props.onCancel();
  };

  return (
    <div className="d-flex justify-content-between">
      {isOpen && (
        <div>
          <button
            className="btn btn-outline-danger me-3"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button className="btn btn-outline-primary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
