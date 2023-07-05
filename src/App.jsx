import { useState } from "react";
import Modal from "./modal";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="container">
        <h1>Click The below Button To Get the Form</h1>
        <button onClick={toggleModal}>Click here.</button>
      </div>
      <Modal show={show} closeModal={() => setShow(!show)} />
    </>
  );
}

export default App;
