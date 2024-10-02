import classes from './Todos.module.css';

import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[]}> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((todo) => (
                <TodoItem key={todo.id} text={todo.text} />
            ))}
        </ul>
    );
}

export default Todos;