import React, { Fragment } from 'react'

const WithLoading = (WrappedComponent)=>{
    return (props)=>{
        return(
            <Fragment>
                {props.loading?
                <div>Loading...</div>:
                <WrappedComponent {...props}/>}
            </Fragment>
        )
    }
}

const List = (props)=>{
    return(
        <Fragment>
            {props.list.map((item)=><div key={item}>{item}</div>)}
        </Fragment>
    )
}

export default WithLoading(List)