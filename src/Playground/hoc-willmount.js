import React, { Fragment } from "react"

const HOC = (WrappedComponet)=>{
    let mount = true
    return (props)=>{
        if(mount){
            props.func()
            mount = false
        }
        console.log('render')
        return(
            <Fragment>
                <WrappedComponet/>
            </Fragment>
        )
    }
}

const App = ()=>{
    return(
        <Fragment>
            Hello World
        </Fragment>
    )
}

export default HOC(App)