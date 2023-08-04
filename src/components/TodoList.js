import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

const TodoList = () => {
const todos = useSelector(state => state.todos.todos);
const dispatch = useDispatch();

const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
};

return (
    <ul>
    {todos.map(todo => (
        <li key={todo.id}>
        {todo.text}
        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
    ))}
    </ul>
);
};

export default TodoList;
