import React from "react";
import "./TodosLoading.css";

const TodosLoading = () => {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-competeIcon"></span>
      <p className="LoadingTodo-text">&nbsp;</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
};

export default TodosLoading;
