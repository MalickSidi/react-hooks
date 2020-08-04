import React, { useState } from "react";

export default function btnCount (initCount = 0) {
    const [count, setCount] = useState(initCount);

    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    )
}