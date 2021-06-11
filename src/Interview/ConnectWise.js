import react, {Component} from 'react'

const curryFunc = (a) => {
    return function(b) {
        return function(c) {

        }
    }
}


const ans = curryFunc(1)(2)(3)

// (function(a)=>{

// })(a)


const useComponentWillMount = (func)=>{
    const current = useRef(func)
    if(current.current){
        func()
    }else{
        current.current = false
    }
}

const functionalComp = () => {
    useComponentWillMount(() => {
        console.log('will mount')
    })
}


function getMax(arr) {
    if (Array.isArray(arr)) {
    return Math.max.apply(null, arr);
    }
    return 0;
    }
    getMax([2, 5, 9]);


var date = new Date();
Date.prototype.nextDay = ()=>{
    return currDate = this.getDate()
}
date.nextDay();//Tomorrow's Date


var foodProcessor = {
    // Complete the implementation
};
foodProcessor.mixFood().bakeFood().serve();


// Toggle View
class View extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let { view } = this.state
        return(
            <div>
                <button onClick={()=>this.changeView()}>Switch View</button>
            </div>
        )
    }
}





























