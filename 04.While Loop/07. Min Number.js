function maxNum(arr){
    let index = 0
    minNumber = 9999999999999
    while (arr[index] != "Stop"){
        let curNum = Number(arr[index])
        if(curNum < minNumber){
            minNumber = curNum
        }index++
    }
    console.log(minNumber)
}