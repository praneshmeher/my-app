function checkmax(arr, num){
    let ans = {}
    let counter = 1
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num && arr[i-1]==num){
            counter++
        }else{
            counter=0
        }
        console.log(counter)
    }
}

let arr = [1, 2, 1, 1, 1, 2, 2, 1, 1, 2]

checkmax(arr,1)