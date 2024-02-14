import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  // Hint 2: Initialize two state variables using useState. 
  // One for the list of todos and another for the current task input.
  let [input, setInput] = useState('');
  let [todos, setTodo] = useState([]);

  // Hint 3: Define the addTodo function which will be called on button click.
  // - Check if 'task' is not empty. If not, proceed to add the task.
  // - Use setTodos to add the new task to the todos array.
  // - The new task should be an object of the form: { task: string, completed: boolean }
  // - Reset the task input field after adding the task.
  const addTodo = () => {
    if (input) {
      setTodo([...todos, { input, completed: false }])
      setInput('');
    };
  };

  // Hint 4: Define the toggleComplete function to toggle the completion status of a todo item.
  // - Use setTodos with the map function to create a new array.
  // - In the map function, check if the current todo item's task matches the one received in the function's argument.
  // - If it matches, toggle its 'completed' property.
  // - Otherwise, return the todo item as is.

  const toggleComplete = (input) => {
    setTodo(todos.map(todo => todo.input === input ? {...todo, completed: !todo.completed} : todo));
  }

  // Hint 5: Define the removeTodo function to remove a todo item.
  // - Use setTodos with the filter function to create a new array.
  // - In the filter function, return only those todo items whose task doesn't match the one received in the function's argument.

  const removeTodo = (input) => {
    setTodo(todos.filter(todo => todo.input !== input))
  }

  return (
    <div className="todo-list">
      
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task"
    />
    <button type="submit" onClick={addTodo}>Add</button>
    {todos.map((todo) => (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <span onClick={() => toggleComplete(todo.input)}>{todo.input}</span>
          <button onClick={() => removeTodo(todo.input)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

