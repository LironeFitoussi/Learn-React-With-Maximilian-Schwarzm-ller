import { useRef } from "react";

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text"></label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodo;