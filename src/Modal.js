import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();

  let results = ((correct / questions.length) * 100).toFixed(0);
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        {results < 50 ? (
          <>
            <h2>Oopss!😔</h2>
            <p>You got {results}% You didn't reach the benchmark</p>
          </>
        ) : (
          <>
            <h2>kudos Champ!</h2>
            <p>You answered {results}% of questions correctly</p>
          </>
        )}
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
