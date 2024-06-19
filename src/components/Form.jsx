import React from "react";
function Form({ todos, setTodos }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;

    const newTodo = {
      title: value,
      id: crypto.randomUUID(),
      is_completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    const updatedTodoList = JSON.stringify([...todos, newTodo]);
    localStorage.setItem("todos", updatedTodoList);

    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
    <label htmlFor="todo">
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Можете ввести следующую задачу"
      />
    </label>
    <button>
      <span className="visually-hidden">Submit</span>
      <svg>
        <path d="" />
      </svg>
    </button>
  </form>
  );
}

export default Form;