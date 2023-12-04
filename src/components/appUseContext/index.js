import React, { useContext } from 'react'
import Context from './Context'
import './app.css'
import { ThemeContext } from './ThemeContext'

function AppUseContext() {
    const context = useContext(ThemeContext)
    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <Context  />
        </div>
    )
}
export default AppUseContext