import React, { useState, Fragment, useRef } from 'react'

const App = ()=>{
    const[value, setValue]=useState('')
    const currentRef = useRef()

    function focus(){
        currentRef.current.focus()
    }

    return(
        <Fragment>
            <input ref={currentRef} value={value} onChange={(e)=>setValue(e.target.value)} type="text" /> <br/>
            My name is {value} <br/>
            <button onClick={focus}>Focus</button>
        </Fragment>
    )
}

export default App