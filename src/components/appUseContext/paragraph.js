import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

 function Paragraph() {
    const context = useContext(ThemeContext)
  return (
    <div className={context.theme}>paragraph</div>
  )
}
export default Paragraph