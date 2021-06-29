import React, { Fragment } from 'react'

const App = ()=>{
    return(
        <Fragment>
            <Category category={'Food'} render={()=><List list={['Pizza','Burger']}/>}/>
        </Fragment>
    )
}

const List = (props)=>{
    return(
        <Fragment>
            {props.list.map((item)=><div key={item}>{item}</div>)}
        </Fragment>
    )
}

const Category = (props)=>{
    return(
        <Fragment>
            {props.category}
            {props.render()}
        </Fragment>
    )
}

export default App