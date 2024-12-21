import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; 
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8"
    >
      <input
        type="text"
        className="w-full md:w-auto bg-gray-200 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-gray-100 py-2 px-4 leading-6 outline-none transition duration-200 ease-in-out"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 rounded-lg shadow-md focus:outline-none hover:bg-indigo-600 transition duration-200 ease-in-out"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
