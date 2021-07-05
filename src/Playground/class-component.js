import React, { Component, Fragment } from 'react'

class MyComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        console.log('componentdidmount')
        setInterval(()=>{
            this.setState({time:new Date().toLocaleTimeString()})
        },1000)
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
                <div>{this.state.time}</div>
                <button onClick={this.regular}>Regular</button>
                <button onClick={this.arrow}>Arrow</button>
            </Fragment>
        )
    }
}

export default MyComponent