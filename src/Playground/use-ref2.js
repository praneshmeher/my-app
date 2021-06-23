import react, { useState, useRef, useEffect, Fragment } from 'react'

const App = ()=>{
    const[value, setValue]=useState('')
    const currentRef=useRef('')

    useEffect(()=>{
        currentRef.current=value
    },[value])

    return(
        <Fragment>
            <input value={value} onChange={(e)=>{setValue(e.target.value)}} type="text"/> <br/>
            {currentRef.current}
        </Fragment>
    )
}

export default App