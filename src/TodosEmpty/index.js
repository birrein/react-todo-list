import React from "react";

const TodosEmpty = ({ toggleModal }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>
        <a
          href="javascript:void(0)"
          onClick={toggleModal}
          style={{ color: "lightblue" }}
        >
          ¡Crea tu primera tarea!
        </a>
      </p>
    </div>
  );
};

export default TodosEmpty;
