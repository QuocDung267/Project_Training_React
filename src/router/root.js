import React from 'react'
import GetNews from '../GetNews'
import MainLayouts from '../layouts/MainLayouts'
import { useRoutes } from 'react-router-dom'

const routes = [
    { path: '/', index: true, element: <GetNews /> }
]
const RootRoutes = () =>{
    const wrapLayoutRoutes = routes.map((route)=>({
        ...route, element:<MainLayouts>{route.element}</MainLayouts>
    }))
    return useRoutes(wrapLayoutRoutes)
}
export default RootRoutes