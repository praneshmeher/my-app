import React, { useRef, useEffect, useState, Fragment } from 'react'

const useComponentWillMount = (func)=>{
    const ref = useRef(true)
    if(ref.current){
        func()
    }
    useEffect(()=>{
        ref.current=false
    },[])
}

const App = ()=>{
    const[count, setCount]=useState(0)

    useComponentWillMount(()=>{console.log("willmount")})
    
    return(
        <Fragment>
            <div>{count}</div>
            <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Increment count</button>
        </Fragment>
    )
}

export default App