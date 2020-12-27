function graduate(arr){
    let name = arr[0];
    let index = 1
    let yearScore = 0;
    let grate = 0;
    let isFail = false
    while(index < 13){
        grate += 1
        yearScore += Number(arr[index])
        if(arr[index] < 4){
            console.log(`${name} has been excluded at ${grate} grade`)
            isFail = true
            break
        }
        index ++
    }
    if (!isFail){
        console.log(`${name} graduated. Average grade: ${(yearScore/12).toFixed(2)}`) 
    }
    
}

graduate(["Mimi", 
"4",
"6",
"5",
"6",
"5",
"6",
"6",
"4",
"4"])
