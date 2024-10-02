import React from 'react';

const Todos: React.FC<{ items: string[]}> = (props) => {
    return (
        <ul>
            {props.items.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
}

export default Todos;