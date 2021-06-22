import React, {useState, Fragment} from 'react'


const initialstate = ()=>{
    console.log('initial state called')
    return {count:0,limit:10}
}

const App = ()=>{
    const[state, setState] = useState(()=>initialstate())
    const count = state.count
    const limit = state.limit

    function increment(){
        if(count<limit)
        setState((prevState)=>{
            return {...prevState, count:prevState.count+1}
        })
    }

    console.log('functional component rendered')
    return(
        <Fragment>
            Count : {count} <br/>
            Limit : {limit}
            <div>
                <button onClick={()=>increment()}> 
                    Increment count
                </button>
            </div>
        </Fragment>
    )
}

export default App