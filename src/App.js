// src/App.js
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Weather from './components/Weather'; // Import the Weather component
import './style.css';

const App = () => {
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList />
      <Weather /> {/* Add the Weather component */}
    </div>
  );
};

export default App;
