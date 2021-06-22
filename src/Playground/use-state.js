import React, {useState, Fragment} from 'react'

const App = ()=>{
    const[count, setCount] = useState(0)

    function increment(){
        setCount((prevCount)=>{
            return prevCount+1
        })
    }

    console.log('functional component rerendered')
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