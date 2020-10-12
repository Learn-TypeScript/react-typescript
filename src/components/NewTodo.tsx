import React, { useRef } from 'react';

export interface NewToDoProps {

}

const NewToDo: React.SFC<NewToDoProps> = () => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);

    }
    return (
        <form onSubmit={todoSubmitHandler} >
            <div>
                <label htmlFor='todo-text' >Todo Text</label>
                <input ref={textInputRef} type='text' id='todo-text' />
            </div>
            <button type='submit' >ADD TODO</button>
        </form>

    );
}

export default NewToDo;