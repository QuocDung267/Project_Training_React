import React, { useReducer } from 'react'

// sử dụng useReducer gồm các bước như sau
// khởi tạo initState
const initState = 0
// khởi tạo các action (lưu ý là là hằng)
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// khởi tạo reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
            break;
        case DOWN_ACTION:
            return state - 1;
            break
        default:
            throw new Error('invalid action');
    }
}

export default function Reducer() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>useReducer()</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>

        </div>
    )
}
