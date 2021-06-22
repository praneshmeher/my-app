import React, { useState, Fragment, useMemo } from 'react'

const App = ()=>{
    const[count, setCount] = useState(0)

    const slowmemo = useMemo(()=>{
        console.log('slow called')
        for (let i = 0; i < 1000000000; i++) { }
        return 'memoized value'
    },[])
    
    console.log(slowmemo)

    function increment(){
        setCount((prevCount)=>{
            return prevCount + 1
        })
    }

    return(
        <Fragment>

            Count : {count}

            <div>
                <button onClick={()=>increment()}>
                    Increment count
                </button>
            </div>

        </Fragment>
    )
}

export default App