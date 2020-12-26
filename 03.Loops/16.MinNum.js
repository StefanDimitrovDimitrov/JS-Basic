function minNum(input) {
    minN = 999999999

    for (let index = 1; index <= input.length; index++ ){
        currentNum = Number(input[index])
        if (currentNum < minN){
            minN = currentNum
        }
    }
    console.log(minN)
}

minNum((["2",
"100",
"99"])
)