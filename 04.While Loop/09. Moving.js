function moving(arr){
    a = Number(arr[0]);
    b = Number(arr[1]);
    c = Number(arr[2]);
    let space = a * b * c
    let index = 3 
    let currentSpace = 0
    let boxes = 0
    let freeSpace = true
    while (arr[index] != "Done"){
        currentSpace += Number(arr[index])
        index ++
        
        if(currentSpace > space){
            console.log(`No more free space! You need ${currentSpace - space} Cubic meters more.`)
            freeSpace = false 
            break
        }

    }
    if (freeSpace){
        console.log(`${space - currentSpace} Cubic meters left.`)
    }
}

moving(["10",
"1",
"2",
"4",
"6",
"Done"])