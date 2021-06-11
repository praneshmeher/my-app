import React, {Component} from 'react'

let reverse = [] 

export default class Coding extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    missing(){
        let arr = [1, 2, 3, 5, 6]
        let sum = (6*7)/2
        let ans = arr.reduce((sum ,ele)=>{
            return sum-ele
        },sum)
        console.log(ans) // 4
    }

    repeating(){
        let arr = [11, 4, 2, 4, 2, 11, 5, 2, 3, 1]
        let map = {}

        let non = []
        let rep = []

        for (let i = 0; i < arr.length; i++) {
            if(map[arr[i]]){
                map[arr[i]]++
                if(map[arr[i]]==2) rep.push(arr[i]) // [4, 2, 11]
                console.log('rep', rep)
            }else{
                map[arr[i]]=1
                non.push(arr[i])
                console.log('non', non) // [11, 4, 2, 5, 3, 1]
            }
        }
    }

    repeating1(){
        // let str = ['q', 'w', 'w', 'w', 'e', 'e', 'i', 'u', 'r'] // ["w", "w", "e"]
        let str = [11, 4, 2, 4, 2, 11, 5, 2, 3, 1] // [4, 2, 11, 2]
        let duplicates = str.filter((ele, i)=>str.indexOf(ele) !== i)
        console.log(duplicates)
    }

    repeating2(){
        let str = 'Hello World'
        // let arr = str.split() // ["Hello World"]
        let arr = str.split('') // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
        let duplicates = arr.filter((ele, i)=>str.indexOf(ele) !== i)
        console.log(duplicates) // ["l", "o", "l"]
    }

    firstRepeating(){
        let str = 'geeksforgeeks'
        let arr = str.split('')
        let map = {}

        for (let i = 0; i < arr.length; i++) {
            if(map[arr[i]]){
                console.log(arr[i]) // e
                break
            }else{
                map[arr[i]] = 1
            }
        }
    }

    // 'Hello World'
    reverse(str){
        if(str.length === 0)
            return;

        this.reverse(str.substr(1))
        reverse.push(str[0])
        console.log(reverse) // ["d", "l", "r", "o", "W", " ", "o", "l", "l", "e", "H"]
    }

    reverseIndividual(){
        let str = 'getting good at coding needs a lot of practice';
        let ans = ''

        for (let i = 0; i < str.length; i++) {
           if(str.charAt(i) !== ' '){
                ans = str.charAt(i) + ans
           }else{
               ans = ' ' + ans
           }
        }
        console.log(ans) // ecitcarp fo tol a sdeen gnidoc ta doog gnitteg
    }

    reverseIndividual2(){
        let str = 'getting good at coding needs a lot of practice';
        let ans = ''
        let rev = ''

        for (let i = 0; i < str.length; i++) {
           if(str.charAt(i) !== ' '){
                ans = str.charAt(i) + ans
           }else{
                rev = rev + ' ' + ans
                ans = ''
           }
        }
        console.log(rev) // gnitteg doog ta gnidoc sdeen a tol fo
    }

    onlyDigits(){
        let str = '67v8'
        let ans = false

        for (let i = 0; i < str.length; i++) {
            if(str.charAt(i) >= 0 && str.charAt(i) <= 9){
                ans = true
            }else{
                ans= false
                break;
            }
        }
        console.log(ans) // false
    }

    charOccurance(){
        let str = 'geeksforgeeks'
        let count = 0
        let char = 'e'

        for (let i = 0; i < str.length; i++) {
           if(str.charAt(i) == char){
               count++
           }            
        }
        console.log(count) // 4
    }

    // silent
    // listen
    anagram(){
        let str1 = 'silent'
        let str2 = 'listen'

        let ans1 = str1.split('').sort().join('')
        let ans2 = str2.split('').sort().join('')

        console.log(ans1, ans2) // eilnst eilnst
    }

    minmax(){
        let arr = [112, 24, 31, 44, 101, 203, 33, 56]
        let min = arr[0]
        let max = arr[0]

        arr.forEach((ele, i)=>{
            if(ele > max){
                max = ele
            }else if(ele < min){
                min = ele
            }
        })
        console.log(min, max) // 24 203
    }

    sumPairs(){
        let arr = [10, 20, 10, 40, 50, 60, 70, 30]
        let sum = 50
        let map = {}
        let results = []

        for (let i = 0; i < arr.length; i++) {
           if(map[arr[i]]){
                results.push([map[arr[i]], arr[i]])
           }else{
               map[sum-arr[i]] = arr[i]
           }
        }
        console.log(results) // [10, 40] [20, 30]
    }

    sumPairs2(){
        let arr1 = [-1, -2, 4, -6, 5, 7]
        let arr2 = [6, 3, 4, 0]
        let sum = 8
        let map = {}
        
        for (let i = 0; i < arr1.length; i++) {
            map[arr1[i]] = 1
        }

        for (let i = 0; i < arr2.length; i++) {
            if(map[sum-arr2[i]]){
                console.log(sum-arr2[i], arr2[i])
            }
        }
    }

    reverseArray(){
        let arr = [11, 4, 2, 4, 2, 11, 5, 2, 3, 1]
        let start = 0
        let end = arr.length - 1
        while(start < end){
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
        console.log(arr) // [1, 3, 2, 5, 11, 2, 4, 2, 4, 11]
    }

    recursiveReverseArray(arr, start, end){ 
        if(start>=end){
            return;
        }

        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        this.recursiveReverse(arr, start+1, end-1) // [1, 3, 2, 5, 11, 2, 4, 2, 4, 11]
    }

    // Given a string str and another string patt. 
    // Find the character in patt that is present at the minimum index in str. 
    // If no character of patt is present in str then print ‘No character present’.
    minimumIndex(){
        let str = 'geeksforgeeks'
        let pat = 'set'
        let map = {}
        let minindex = 100

        for (let i = 0; i < str.length; i++) {
            if(!map[str[i]]){
                map[str[i]] = i
            }
        }

        for (let i = 0; i < pat.length; i++) {
            if(map[pat[i]] && map[pat[i]]<minindex){
                minindex = map[pat[i]]
            }
        }
        console.log(str[minindex]) // e
    }

    sumtTillGiven(n){
        if(n==1){
            return n;
        }
        return n + this.sumtTillGiven(n-1)
    }

    subarraySum(){
        let arr = [1,2,3,4,5,6,7,8,9,10]
        let sum = 15

        for (let i = 0; i < arr.length; i++) {
            let total = arr[i]

            for (let j = i+1; j < arr.length; j++) {
                if(total==sum){
                    console.log(i, j-1) // 0 4 || 3 5 || 6 7
                    break
                }
                if(total>sum){
                    break
                }
                total = total + arr[j]
            }
            
        }
    }

    tripletCount(){
        let arr = [1, 5, 3, 2]
        let map = {}
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            if(map[arr[i]]){
                map[arr[i]]++
            }else{
                map[arr[i]]=1
            }
        }

        for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if(map[arr[i]+arr[j]] > 0){
                    count++
                }
            }
        }
        console.log('count', count) // 2
    }

    repeating(){
        let arr = ['abc', 'xyz', 'qwe', 'abc']
        let map = {}
        
        for(let i=0;i<arr.length;i++){
            if(map[arr[i]]){
                map[arr[i]]++
            }else{
                map[arr[i]] = 1
            }
        }
        
        let freq = Object.values(map)
        let max = 0
        let index = 0
        for(let j =0;j<freq.length;j++){
            if(freq[j]>max){
                max= freq[j]
                index = j
            }
        }
        
        console.log(map)
        console.log(max, index)
    }

    render(){
        return(
            <div>
                {/* {this.minimumIndex([11, 4, 2, 4, 2, 11, 5, 2, 3, 1], 0, 9)} */}
                {this.repeating(5)}
            </div>
        )
    }

}