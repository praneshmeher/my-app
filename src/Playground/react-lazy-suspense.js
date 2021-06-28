import React, { Suspense, Fragment } from 'react'

const OtherComponent = React.lazy(()=>import('./pure'))

const App = ()=>{
    return(
        <Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent/>
            </Suspense>
        </Fragment>
    )
}

export default App