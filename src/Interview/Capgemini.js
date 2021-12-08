

//1 
function sayHi() {​​​ 
    console.log(name); 
    console.log(age); 
    var name = 'Lydia'; 
    let age = 21; 
    }​​​ 
    sayHi(); 
    
    undefined
    error
    //2 
    for (var i = 0; i < 3; i++) {​​​ 
    setTimeout(() => console.log(i), 1); 
    }​​​ 
    
    333
    
    // 1, 
    for (let i = 0; i < 3; i++) {​​​ 
    setTimeout(() => console.log(i), 1); 
    }​​​ 
    
    table
    header
    article
    
    let aar1 = []
    let arr2 = [...arr1]
    
    ((a)=>{
    
    })(2)
    
    0,1,2
    
    //3 
    let a = 3; 
    let b = new Number(3); 
    let c = 3; 
    console.log(a == b); 
    console.log(a === b); 
    console.log(b === c); 
    
    true
    false
    false
    
    //4 
    class Chameleon {​​​ 
        static colorChange(newColor) {​​​ 
            this.newColor = newColor; 
            return this.newColor; 
        }​​​ 
        constructor({​​​ newColor = 'green' }​​​ = {​​​}​​​) {​​​ 
            this.newColor = newColor; 
        }​​​ 
    }​​​ 
    const freddie = new Chameleon({​​​ newColor: 'purple' }​​​); 
    console.log(freddie.colorChange('orange')); 
    
    error
    
    
    -----------SECTION 2 ES6----------10 MIN 
    As a Javascript developer you have to create a method (getEmployeeWithDepartments) that resolves helper methods `getEmployees()` and`getDepartment()` and prints(console.log()) of employees with there dept names instead of Department ID. If department id is not found add `NA` as department name. 
    Good to have 
    Unit Testing 
    Caching 
    Calculate complexity BigO 
    Use async/await 
    Use ES6+ 
    function getEmployees() {​​​ 
        return Promise.resolve([ 
        {​​​ id: 1, name: "acb", dept: 1 }​​​, 
        {​​​ id: 2, name: "abd", dept: 4 }​​​, 
        {​​​ id: 3, name: "adf", dept: 2 }​​​, 
        {​​​ id: 4, name: "des", dept: 1 }​​​, 
        {​​​ id: 5, name: "awa", dept: 3 }​​​, 
        {​​​ id: 6, name: "das", dept: 5 }​​​, 
        {​​​ id: 7, name: "yuu", dept: 1 }​​​, 
        {​​​ id: 8, name: "trr", dept: 2 }​​​, 
        {​​​ id: 9, name: "fds", dept: 6 }​​​, 
        {​​​ id: 10, name: "iuy", dept: 7 }​​​, 
        {​​​ id: 11, name: "iuo", dept: 1 }​​​, 
        {​​​ id: 12, name: "qwq", dept: 4 }​​​, 
        ]); 
    }​​​ 
    function getDepartment(deptID) {​​​ 
        if (deptID > 5) {​​​ 
        return Promise.reject("Employee Dept not found."); 
        }​​​ 
        const employeeIdMapping = {​​​ 
            1: "SALES", 
            2: "HR", 
            3: "MARKETING", 
            4: "IT", 
            5: "SUPPORT", 
        }​​​; 
        return Promise.resolve(employeeIdMapping[deptID]); 
    }​​​ 
    function getEmployeeWithDepartments() {​​​ 
    // Your code comes here. 
    }​​​ 
    result = [ 
    {​​​ id: 1, name: "acb", dept: "SALES" }​​​, 
    {​​​ id: 2, name: "abd", dept: "IT" }​​​, 
    {​​​ id: 4, name: "des", dept: "HR" }​​​, 
    {​​​ id: 3, name: "adf", dept: "SALES" }​​​, 
    {​​​ id: 5, name: "awa", dept: "MARKETING" }​​​, 
    {​​​ id: 6, name: "das", dept: "SUPPORT" }​​​, 
    {​​​ id: 7, name: "yuu", dept: "SALES" }​​​, 
    {​​​ id: 8, name: "trr", dept: "HR" }​​​, 
    {​​​ id: 9, name: "fds", dept: "NA" }​​​, 
    {​​​ id: 10, name: "iuy", dept: "NA" }​​​, 
    {​​​ id: 11, name: "iuo", dept: "SALES" }​​​, 
    {​​​ id: 12, name: "qwq", dept: "IT" }​​​, 
    ]; 
    --------------SECTION 3 BASIC JS PROBLEMS------ 15 MIN 
    
    
    // #1 Array & Object 
    {​​​ 
    let inputObj = {​​​ "a": 1, "b": 4, "c": 7, "d": 8, "e": 20, "f": 11 }​​​; 
    let inputArr = ['a', 'b', 'd']; 
    // Output = {​​​'a':1, 'b': 4, 'd': 8}​​​ 
    let output={}
    Object.keys(inputObj).forEach((key, i)=>{
        if(inputArr.includes(key)){
            output[key]=inputObj[key]
        }
    })
    }​​​ 
    // #2 Array 
    {​​​ 
    let inputArr = [11, 7, 2, 4, 17, 14, 12, 5, 22, 1, 10, 16, 21, 6]; 
    let num = 12; 
    // Output = [[11,1],[7,5],[2,10],[5,7],[1,11],[10,2]] 
    }​​​ 
    // #3 
    {​​​ 
    let data = [ 
    {​​​ Name: 'Ram', Salary: 10000, 'Hike %': 30 }​​​, 
    {​​​ Name: 'Shyam', Salary: 25000, 'Hike %': 20 }​​​ 
    ]; 
    /* 
    Output = [ 
    {​​​ Name: 'Ram', Salary: 10000, 'Hike %': 30, newSalary: 13000}​​​, 
    {​​​ Name: 'Shyan', Salary: 25000, 'Hike %': 20, newSalary: 30000}​​​ 
    ] 
    */ 
    }​​​ 
    
    