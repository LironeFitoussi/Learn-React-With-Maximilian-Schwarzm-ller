import React, { createContext, useState } from "react";

// Class Imports
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);


    function addTodoHandler(text: string) {
        const newTodo = new Todo(text);
        setTodos((prevTodos) => {
        return [...prevTodos, newTodo];
        });
    }

    function removeTodoHandler(todoId: string) {
        setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== todoId);
        });
    }

    const ctxValue: TodosContextObj= {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={ctxValue}>
            {props.children}
        </TodosContext.Provider>
    );
}

export default TodosContextProvider;