
const prime = (number) =>{
    let prime = true

    for (let i = 2; i < number/2; i++) {
        if(number%i == 0){
            prime = false
            break;
        }
    }
    if(prime){
        console.log('Number is prime')
    }else{
        console.log('Number is not prime')
    }
}

function Prime(number){
    this.num = number
    this.checkPrime = function(){
        let prime = false
        for (let i = 2; i < this.num/2; i++) {
            if(this.num%i == 0){
                prime = false
                break;
            }
        }
        if(prime){
            console.log('Number is prime')
        }else{
            console.log('Number is not prime')
        }
    }
}

let obj = new Prime(7)
obj.checkPrime()


const duplicates = () =>{
    let arr = [2, 3, 4, 5, 2, 3]
    let map = {}
    let duplicates = []

    for (let i = 0; i < arr.length; i++) {
       if(map[arr[i]]){
           map[arr[i]]++
           duplicates.push(arr[i])
       }else{
           map[arr[i]]=1
       }
    }
    console.log(duplicates)
}