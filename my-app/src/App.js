// src/App.js
import React from 'react';
import { TodoContext } from './components/TodoContext';
import { TodoProvider } from './components/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    return (
        <TodoProvider>
            <div className="App">
                <h1>Todo List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default App;