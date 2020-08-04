import React, { useState } from "react";

export default function BtnCount ({initCount}) {
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

