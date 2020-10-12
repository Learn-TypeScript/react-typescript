import React, { useState } from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

type todoList = {
  id: number, text: string
}

type TDArray = { id: number, text: string }

const App: React.FC = () => {
  const [todos, setTodos] = useState<TDArray[]>([] as TDArray[])
  // const todos = [{ id: 't1', text: 'Finish the course' }]

  const todoAddHandler = (text: string) => {
    console.log(text);
    const todo: todoList = { id: 0, text: '' }
    const todoArray: TDArray[] = [{ id: 0, text: '' }]
    todo.id = Math.random();
    todo.text = text

    if (todoArray.length === 0) {
      todoArray.push(todo)
      setTodos(todoArray.concat(todo))
    } else {
      setTodos(todos.concat(todo))
    }

  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
