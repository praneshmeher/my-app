
const calculateDegree = (hrs, minutes) =>{
    if(hrs == 12){
        let m1 = minutes * 6
    }
    let de1 = hrs * 30
    let de2 = minutes / 2
    let finaldeg = de1 + de2
    let minutesdeg = minutes * 6
    let ans = finaldeg - minutesdeg
    if(ans<0)
        return ans*(-1)
    return ans
}

// 2004 -> lp yr
// 2100 -> not lp yr
// 2000 -> lp yr
// 2002 -> not lp yr

const leapYear = (year) =>{
    if(year % 4 == 0  && year % 100 !==0 ){
        return 'leap year'
    }else if(year % 400 == 0){
        return 'leap year'
    }else{
        return 'not leap year'
    }
}