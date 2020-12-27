function balance(arr){
    let sum = 0;
    let index = 0;
    let balance = Number(arr[index])

    while(arr[index] !== "NoMoreMoney"){
        let balance = Number(arr[index])
        if(balance < 0){
            console.log("Invalid operation!")
            break
        }
        console.log(`Increase: ${balance.toFixed(2)}`)
        sum += balance
        index ++
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}

balance(["120",
"45.55",
"-150"])

