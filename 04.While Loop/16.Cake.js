function cake(arr){
    let cakeSize = Number(arr[0])*Number(arr[1])
    let index = 2
    let isCakeEaten = false
    let cakeEaten = 0
    let cakes = 0

    while(arr[index] != "STOP"){
        cakes = Number(arr[index])
        index ++
        cakeEaten += cakes
        if (cakeEaten > cakeSize){
            isCakeEaten = true
            break
        }
    }

    if (isCakeEaten){
        let difference = cakeEaten - cakeSize
        console.log(`No more cake left! You need ${difference} pieces more.`)
    }else{
        let leftPieces = cakeSize - cakeEaten
        console.log(`${leftPieces} pieces are left.`)
    }

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21",
"21"])


