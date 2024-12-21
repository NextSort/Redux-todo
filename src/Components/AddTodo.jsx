import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../Features/Todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
 

    const addTodoHandler = (e) => {
      e.preventDefault();
      if (!input.trim()) {
          setError('Todo cannot be empty!');
          return;
      }
      const isDuplicate = todos.some((todo) => todo.text === input);
      if (isDuplicate) {
          setError('Task already exists!');
      } else {
          dispatch(addTodo(input));
          setInput('');
          setError('');
      }
  };
  

    const handleInputChange = (e) => {
        setInput(e.target.value);
       
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    );
}

export default AddTodo;
