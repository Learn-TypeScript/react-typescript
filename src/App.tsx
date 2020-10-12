import React, { useState } from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');

  const todos = [{ id: 't1', text: 'Finish the course' }]

  const todoAddHandler = (text: string) => {
    setNewTodo(text)
    console.log(text);

  }
  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
