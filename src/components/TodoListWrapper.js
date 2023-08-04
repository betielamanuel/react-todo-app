import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';

const TodoListWrapper = () => {
const todos = useSelector(state => state.todos.todos);

return <TodoList todos={todos} />;
};

export default TodoListWrapper;
