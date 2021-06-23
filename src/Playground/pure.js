import React, { PureComponent, Fragment, Component } from 'react'

class WelcomePure extends PureComponent{
    render(){
        console.log('WelcomePure rendered')
        return(
            <Fragment>
                WelcomePure
            </Fragment>
        )
    }
}

const Welcome = ()=>{
    console.log('Welcome rendered')
    return(
        <Fragment>
                Welcome
        </Fragment>
    )
}

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    render(){
        console.log('parent rendered')
        return(
            <Fragment>
                <div><WelcomePure /></div>
                <div><Welcome /></div>
                
                 Count : {this.state.count} <br/>
                <button onClick={()=>{this.setState(prevState=> {return {count:prevState.count+1}})}}>Increment count</button>
            </Fragment>
        )
    }
}

export default App