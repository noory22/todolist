// src/components/TodoList.js
import React, {useContext} from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
    const {todos, removeTodo, completeTodo} = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} style={{textDecoration: todo.completed ? 'line-through' : ''}}>
                    {todo.text}
                    <button onClick={() => completeTodo(index)}>Complete</button>
                    <button onClick={() => removeTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;