
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoListWrapper from './components/TodoListWrapper';
import Weather from './components/Weather';
import { useSelector } from 'react-redux';
import './style.css';

const App = () => {
  const weatherData = useSelector(state => state.weatherData);

  return (
    <div className="center-container"> 
      <div className="container">
        <h1>To-Do List</h1>
        <TodoForm />
        <TodoListWrapper />
        <Weather />
        {weatherData && weatherData.name && (
          <div>
            <h3>Weather in {weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
