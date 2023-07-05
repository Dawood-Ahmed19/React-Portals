import React from "react";
import { ReactDOM } from "react";
import { createPortal } from "react-dom";

const Modal = ({ show, closeModal }) => {
  if (!show) return null;
  return createPortal(
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="content">
          <input type="text" name="Name" placeholder="Type Your Name here" />
          <input
            type="password"
            name="Password"
            placeholder="type Your Password here"
          />
          <button type="submit">Submit</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
