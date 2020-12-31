function SumTwoInt(arr){
    let magicN = Number(arr[2]);
    let combinationCount = 0;
    let firstN = 0;
    let secondN = 0;
    let isFound = false;

    for(let i = Number(arr[0]);i <= Number(arr[1]); i++){
        for(let j = Number(arr[0]); j <= Number(arr[1]); j++){
            combinationCount ++
            if (i + j === magicN){
                isFound = true
                firstN = i
                secondN = j
                break
            }
        }
        if (isFound){
            break
        }
    }


    if (isFound){
        console.log(`Combination N:${combinationCount} (${firstN} + ${secondN} = ${magicN})`)
    }else{
        console.log(`${combinationCount} combinations - neither equals ${magicN}`)
    }
        
}

SumTwoInt(["23",
"24",
"20"])
