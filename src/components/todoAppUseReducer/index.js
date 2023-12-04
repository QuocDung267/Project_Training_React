import React, { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { addJob, deleteJob, setJob } from './actions'



export default function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state
    const inputRef = useRef()
    const handleAdd = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    const handleDelete = (index) => {
        dispatch(deleteJob(index))
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <input ref={inputRef} value={job} type='text' placeholder='Enter your job here' onChange={(e) => { dispatch(setJob(e.target.value)) }} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job} <span onClick={() => handleDelete(index)}>&times;</span>
                    </li>

                ))}
            </ul>
        </div>
    )
}
