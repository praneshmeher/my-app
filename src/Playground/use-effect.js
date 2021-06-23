import React, { useState, Fragment, useEffect } from 'react'

const App = ()=>{
    const[resource, setResource] = useState('Posts')

    useEffect(()=>{
        console.log('use effect called')

        return ()=>{
            console.log('use effect return')
        }
    },[resource])

    return(
        <Fragment>
            Resource : {resource}
            <div>
                <button onClick={()=>setResource('Posts')}>
                    Posts  
                </button>
                <button onClick={()=>setResource('Comments')}>
                    Comments  
                </button>
                <button onClick={()=>setResource('Users')}>
                    Users
                </button>
            </div>
        </Fragment>
    )
}

export default App