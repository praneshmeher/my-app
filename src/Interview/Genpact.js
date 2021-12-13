 var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"


a.forEach((ele, i)=>{
    console.log("row ", i)
    ele.forEach((n)=>{
        console.log(n)
    })
})