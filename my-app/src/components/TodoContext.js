// src/contexts/TodoContext.js
import React, {createContext, useState, useEffect} from 'react';
export const TodoContext = createContext();
export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    // Load todos from local storage on mount
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    // Save todos to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        setTodos((prevTodos) => [...prevTodos, {text, completed: false}]);
    };

    const removeTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    const completeTodo = (index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo, completeTodo}}>
            {children}
        </TodoContext.Provider>
    );
};