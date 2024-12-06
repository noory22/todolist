// src/components/TodoForm.js
import React, {useContext, useState} from 'react';
import { TodoContext } from './TodoContext';

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    const {addTodo} = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;