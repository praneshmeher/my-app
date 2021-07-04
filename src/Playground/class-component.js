import React, { Component, Fragment } from 'react'

class MyComponent extends Component{
    constructor(props){
        super(props)
    }

    regular(){
       console.log('regular', this)
    }

    arrow = ()=>{
        console.log('arrow', this)
    }

    render(){
        console.log(this)
        return(
            <Fragment>
                <button onClick={this.regular}>Regular</button>
                <button onClick={this.arrow}>Arrow</button>
            </Fragment>
        )
    }
}

export default MyComponent