import React from 'react'
import GetNews from '../components/getNew/GetNews'
import MainLayouts from '../layouts/MainLayouts'
import { useRoutes } from 'react-router-dom'
import Reducer from '../components/useReducer/useReducer'
import TodoApp from '../components/todoAppUseReduce/todoApp'

const routes = [
    { path: '/', index: true, element: <GetNews /> },
    { path: '/usereducer', index: true, element: <Reducer /> },
    { path: '/todo-app-usereducer', index: true, element: <TodoApp /> },

]
const RootRoutes = () =>{
    const wrapLayoutRoutes = routes.map((route)=>({
        ...route, element:<MainLayouts>{route.element}</MainLayouts>
    }))
    return useRoutes(wrapLayoutRoutes)
}
export default RootRoutes