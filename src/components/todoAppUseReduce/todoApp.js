import React, { useReducer, useRef } from 'react'
// 1. create state
const initState = {
    job: '', jobs: []
}
// 2. Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'
const setJob = (payload) => {
    return { type: SET_JOB, payload }
}
const addJob = payload => {
    return { type: ADD_JOB, payload }
}
const deleteJob = payload => {
    return { type: DELETE_JOB, payload }
}
// 3. reducer
const reducer = (state, action) => {
    console.log("action", action);
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = { ...state, job: action.payload }
            break;
        case ADD_JOB:
            newState = { ...state, jobs: [...state.jobs, action.payload] }
            break;
        case DELETE_JOB:
            const newjob = [...state.jobs]
            newjob.splice(action.payload,1)
            newState = { ...state, jobs: newjob }
            break;
        default:
            throw new Error('invalid error')
            break;
    }
    return newState
}
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
