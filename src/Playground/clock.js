import React, { Fragment, useState, useEffect } from 'react'

const App = ()=>{
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date().toLocaleTimeString())
        },[date])
    },[])
    
    return(
        <Fragment>
            {date}
        </Fragment>
    )
}

export default App