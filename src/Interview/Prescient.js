import React, {Component} from 'react'

class Signal extends Component{
    constructor(props){
        super(props)
        this.state={
            color:'red'
        }
    }

    changeColor(){
        setInterval(()=>{
            this.setState({color:'green'})
        },1000)
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.changeColor()}}>Start Signal</button>
                <div style={{height:'10px', width:'10px', background:this.state.color}}></div>
            </div>
        )
    }
}

export default Signal