import React, { useRef, useEffect, useState, Fragment } from 'react'

const useComponentWillMount = (func)=>{
    const ref = useRef(true)
    if(ref.current){
        func()
    }
    useComponentDidMount(()=>{
        ref.current = false
    })
}

const useComponentDidMount = (func)=>{
    useEffect(func,[])
}

const App = ()=>{
    const[count, setCount]=useState(0)

    useComponentDidMount(()=>{console.log("didmount")})
    useComponentWillMount(()=>{console.log("willmount")})

    return(
        <Fragment>
            <div>{count}</div>
            <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Increment count</button>
        </Fragment>
    )
}

export default App