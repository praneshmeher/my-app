import React, { Fragment, useContext } from 'react'
import { ThemeContext } from '../App'

const App = ()=>{
    const theme = useContext(ThemeContext)

    const style = {
        width:'100px',
        height:'100px',
        color:'white',
        background:theme?'black':'red'
    }

    return(
       <div style={style}>Function</div>
    )
}

export default App