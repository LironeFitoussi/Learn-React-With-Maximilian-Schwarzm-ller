import React from 'react'

export function counterReducer(state, action) {
    if (action.type === "DECREMENT") {
        return {
            ...state,
            count: state.count -1
        }
    }

    if (action.type === "INCREMENT") {
        return {
            ...state,
            count: state.count +1
        }
    }

    if (action.type === "RESET") {
        return {
            count: 0
        }
    }

    return state
}

function App() {
    const [counterState, counterDispatch] = React.useReducer(
        counterReducer,
        { count: 0 }
    );

    function handleReducer(type) {
        counterDispatch({
            type
        })
    }

    function handleReset() {
        counterDispatch({
            type: "RESET"
        })
    }
    return (
        <div id="app">
            <h1>The (Final?) Counter</h1>
            <p id="actions">
                <button onClick={() => handleReducer("INCREMENT")}>Increment</button>
                <button onClick={() => handleReducer("DECREMENT")}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </p>
            <p id="counter">{counterState.count}</p>
        </div>
    );
}

export default App;
