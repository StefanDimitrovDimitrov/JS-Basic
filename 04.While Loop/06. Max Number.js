function maxNum(arr){
    let index = 0
    maxNumber = -9999999999999
    while (arr[index] != "Stop"){
        let curNum = Number(arr[index])
        if(curNum > maxNumber){
            maxNumber = curNum
        }index++
    }
    console.log(maxNumber)
}

maxNum(["-10",
"20",
"-30",
"Stop"])
