
import React, {Component} from 'react'

class Rocket extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    palindrome = () => {
        let str = 'abcbcbd'
        let count = 0
    
        for (let i = 0; i < str.length/2 ; i++) {
            if(str.charAt(i) == str.charAt(str.length-1-i)){
                count++
            }
        }
    
        let ans = (count/Math.ceil(str.length/2))*100
        console.log(ans)
    }

    
    factorial = (num)=>{
        if(num == 1){
            return 1
        }else{
            return num * this.factorial(num-1)
        }
    }

    render(){
        return(
            <div>
                {this.palindrome()}
                {this.factorial(5+1)/(5+1)}
            </div>
        )
    }

}

export default Rocket



