import React from 'react'
import Header from '../components/Header/Header'

function MainLayouts({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
export default MainLayouts