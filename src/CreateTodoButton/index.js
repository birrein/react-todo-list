import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ openModal, setOpenModal, toggleModal }) {
  return (
    <button className="CreateTodoButton" onClick={toggleModal}>
      +
    </button>
  );
}

export { CreateTodoButton };
