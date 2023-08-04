// src/App.js
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
