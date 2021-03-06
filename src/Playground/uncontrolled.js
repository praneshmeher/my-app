import React, { Component, Fragment } from 'react'

class Uncontrolled extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount(){
        console.log(this)
    }

    handleSubmit(){
        console.log(this.ref)
    }

    render(){
        return(
            <Fragment>
                <input ref={(value)=>this.ref = value} type="text"/>
                <button onClick={()=>this.handleSubmit()}>Click</button>
            </Fragment>
        )
    }
}

export default Uncontrolled