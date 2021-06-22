import React, {useState, useCallback, useMemo, Fragment, useEffect} from 'react'

const App = ()=>{
    const[count, setCount] = useState(0)
    const[callBackCount, setCallBackCount] = useState(0)
    const[memoCount, setMemoCount] =useState(0)

    const callBackFunction = useCallback(()=>{
        console.log('callback called')
        for (let i = 0; i < 1000000000; i++) { }
        return callBackCount
    }, [callBackCount])

    const memoizedvalue = useMemo(()=>{
        console.log('memo called')
        for (let i = 0; i < 1000000000; i++) { }
        return memoCount
    }, [memoCount])

    return(
        <Fragment>
            <ChildComponent action={callBackFunction} />
            <div>
                {callBackCount} <br/>
                <button onClick={()=>setCallBackCount(prevCallBackCount=>prevCallBackCount+1)}>
                    Increment callback count
                </button>
            </div>
            <div>
                {memoizedvalue} <br/>
                <button onClick={()=>setMemoCount(prevMemoCount=>prevMemoCount+1)}>
                    Increment memo count
                </button>
            </div>
            <div>
                {count} <br/>
                <button onClick={()=>setCount(prevCount=>prevCount+1)}>
                    Increment memo count
                </button>
            </div>
        </Fragment>
    )
}

const ChildComponent = ({action})=>{
    const[value, setValue] = useState(0)

    useEffect(()=>{
        let val = action()
        setValue(val)
    }, [action])

    return(
        <Fragment>
            Child : {value}
        </Fragment>
    )
}

export default App