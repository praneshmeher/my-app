import React, { Fragment } from 'react'

const App = ()=>{
    return(
        <Child>
            <div>Component 1</div>
            <div>Component 2</div>
        </Child>
    )
}

const Child = (props)=>{
    console.log(props)
    return(
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default App