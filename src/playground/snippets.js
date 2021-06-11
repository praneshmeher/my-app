

class Welcome extends React.PureComponent{}


this.setState((prevState, props)=>({
    counter: prevState.counter + props.increment
}))


(function (){ 
    // Function Logic Here. 
}) ()


componentWillMount() // deprecated
componentWillReceiveProps() // deprecated


// static getDerivedStateFromProps(nextProps, prevState)
shouldComponentUpdate(nextProps, nextState)
getSnapshotBeforeUpdate(prevProps, prevState)
componentDidUpdate(prevProps, prevState, snapshot)
this.setState( (prevState, props)=>({}) )


// This component is loaded dynamically
const OtherComponent = React.lazy(()=>import('./OtherComponent'))


const MyComponent = () => {
    return(
        <React.Suspense fallback={<div>Loading...</div>} >
            <OtherComponent />
        </React.Suspense>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)


axios.get('/user/id=123')
    .then(function(response){

    })
    .catch(function(error){

    })
    .then(function(){

    })


axios.get('/user',{
    params:{
        id:123
    }
    })
    .then(function(response){

    })
    .catch(function(error){

    })
    .then(function(){

    })


async function getUser(){
    try{
        const response = await axios.get('/user?id=123')
        console.log(response)
    }catch(error){
        console.log(error)
    }
}


axios.post('/user', {
    firstName:'abc',
    lastName:'xyz'
    })
    .then(function(response){

    })
    .catch(function(error){

    })



function getAccount(){
    return axios.get('/user/123')
}

function getPermission(){
    return axios.get('/user/123/permission')
}

Promise.all([getAccount(), getPermission()])
    .then(function(result){
        const acc = result[0]
        const permission = result[1]
    })


const john = {
    name:'John',
    age:'24'
}
    
const jane = {
    name:'Jane',
    age:'22'
}

function greeting(){
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`)
}

const greetingJohn = greeting.bind(john)
greetingJohn()

const greetingJane = greeting.bind(jane)
greetingJane()