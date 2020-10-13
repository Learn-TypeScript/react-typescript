import React from 'react';

type TodoListProps = {
    items: { id: number, text: string }[],
    onDeleteTodo: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {

    const renderList = () => props.items.map(todo =>
        <div key={todo.id} onClick={props.onDeleteTodo.bind(null, todo.id)} >
            <li>{todo.text}</li>
        </div>
    )

    return (
        <ul>
            {renderList()}
        </ul >
    )
}

export default TodoList;