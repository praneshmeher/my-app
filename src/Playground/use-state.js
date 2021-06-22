import React, {useState, Fragment} from 'react'


const initialstate = ()=>{
    console.log('initial state called')
    return 0
}

const App = ()=>{
    const[count, setCount] = useState(()=>initialstate())

    function increment(){
        setCount((prevCount)=>{
            return prevCount+1
        })
    }

    console.log('functional component rendered')
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