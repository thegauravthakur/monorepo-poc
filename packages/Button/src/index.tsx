import { useState } from 'react';

interface CounterProps {
    decrementButtonLabel: string;
}
export function Counter({ decrementButtonLabel = 'decrement' }: CounterProps) {
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
                +
            </button>
            <button
                type='button'
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >
                {decrementButtonLabel}
            </button>
        </div>
    );
}
