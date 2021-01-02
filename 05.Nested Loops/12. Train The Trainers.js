function trainTrainers(arr){
    numberG = Number(arr[0]);
    index = 1; 
    let presentation = ''
    let sum = 0
    let totalSum = 0
    let count = 0 
    for(i = 1; i<arr.length-1; i++){
        presentation = arr[i]
        for(j = 0; j < numberG; j++){
            i++
            sum += Number(arr[i])
            count++
        }
        totalSum += sum
        console.log(`${presentation} - ${(sum/numberG).toFixed(2)}.`)
        sum = 0
    }
    console.log(`Student's final assessment is ${(totalSum/count).toFixed(2)}.`)
}

trainTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

