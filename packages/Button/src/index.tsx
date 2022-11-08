import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button
                type='button'
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Increment
            </button>
            <button
                type='button'
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >
                -
            </button>
        </div>
    );
}
