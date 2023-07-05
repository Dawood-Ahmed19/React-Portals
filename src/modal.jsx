import React, { Profiler } from "react";
import { ReactDOM } from "react";
import { createPortal } from "react-dom";

const Modal = ({ show, closeModal }) => {
  if (!show) return null;
  function callback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    );
  }
  return createPortal(
    <>
      <Profiler id="Modal" onRender={callback}>
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
      </Profiler>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
