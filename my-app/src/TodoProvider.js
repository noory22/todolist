import React, {createContext, useState, useContext, useEffect} from 'react';

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState(() => {
    // Get data from localStorage on initial load
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    // Persist to-do list to localStorage when it changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{todos, addTodo, removeTodo}}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
