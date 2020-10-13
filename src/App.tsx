import React, { useState } from 'react';

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

import { TDArray } from './types'

type todoList = {
  id: number, text: string
}


const App: React.FC = () => {
  const [todos, setTodos] = useState<TDArray[]>([] as TDArray[])

  const deleteTodoHandler = (id: number) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos)
    console.log(filteredTodos);
  }

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random(), text: text }])

  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
