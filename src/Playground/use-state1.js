import React, { useState, Fragment } from 'react'

const App = ()=>{
    const[count, setCount] = useState(0)
    const[limit, setLimit] = useState(20)

    function incrementCount(){
        setCount((prevCount)=>{
            return prevCount + 1
        })
    }

    function incrementLimit(){
        setLimit((prevLimit)=>{
            return prevLimit + 1
        })
    }

    return(
        <Fragment>
            Count : {count} <br/>
            Limit : {limit}

            <div>
                <button onClick={()=>incrementCount()}>
                    Increment count 
                </button>
                <button onClick={()=>incrementLimit()}>
                    Increment limit 
                </button>
            </div>
        </Fragment>
    )
}

export default App