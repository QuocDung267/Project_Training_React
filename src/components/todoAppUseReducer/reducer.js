import { ADD_JOB, DELETE_JOB, SET_JOB } from './contain'
// 1. create state
export const initState = {
    job: '', jobs: []
}


// 3. reducer
const reducer = (state, action) => {

    switch (action.type) {
        case SET_JOB:
            return { ...state, job: action.payload }

        case ADD_JOB:
            return { ...state, jobs: [...state.jobs, action.payload] }

        case DELETE_JOB:
            const newjob = [...state.jobs]
            newjob.splice(action.payload, 1)
            return { ...state, jobs: newjob }

        default:
            throw new Error('invalid error')

    }

}
export default reducer 