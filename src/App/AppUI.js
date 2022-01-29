import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import Modal from "../Modal";
import TodoForm from "../TodoForm";
import TodosError from "../TodosError";
import TodosLoading from "../TodosLoading";
import TodosEmpty from "../TodosEmpty";
import "./App.css";

export default function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    toggleModal,
  } = useContext(TodoContext);
  return (
    <div className="container">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && [1, 2, 3, 4].map(() => <TodosLoading />)}
        {!loading && !searchedTodos.length && (
          <TodosEmpty toggleModal={toggleModal} />
        )}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            toggleTodo={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} toggleModal={toggleModal} />
    </div>
  );
}
