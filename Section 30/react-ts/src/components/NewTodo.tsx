import classes from './NewTodo.module.css';

import { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        props.onAddTodo(enteredText)

        // Clear the input field
        todoTextInputRef.current!.value = '';
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodo;