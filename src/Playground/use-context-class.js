import React, { Component } from 'react'
import { ThemeContext } from '../App'

class App extends Component{
    constructor(props){
        super(props)
    }

    getTheme(theme){
        return{
            width:'100px',
            height:'100px',
            color:'white',
            background:theme?'black':'red'
        }
    }

    render(){
        return(
            <ThemeContext.Consumer>
                {(theme)=>{
                    return(
                        <div style={this.getTheme(theme)}>Class</div>
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}

export default App