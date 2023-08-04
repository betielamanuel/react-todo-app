
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const todoSlice = createSlice({
name: 'todos',
initialState,
reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
            },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        setWeatherData: (state, action) => {
            state.weatherData = action.payload;
        },
    },
});

export const { addTodo, removeTodo, setWeatherData } = todoSlice.actions;
export default todoSlice.reducer;

