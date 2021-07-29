import React, { Fragment, useState, useEffect } from 'react'

const App = ()=>{
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date().toLocaleTimeString())
        },1000)
    },[date])
    
    return(
        <Fragment>
            {date}
        </Fragment>
    )
}

export default App