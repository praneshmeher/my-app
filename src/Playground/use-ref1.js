import React, { useState, Fragment, useEffect, useRef } from 'react'

const App = ()=>{
    const[value, setValue]=useState('')
    const currentRef = useRef(0)

    useEffect(()=>{
        currentRef.current = currentRef.current+1
    })

    return(
        <Fragment>
            <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" /> <br/>
            {currentRef.current}
        </Fragment>
    )
}

export default App