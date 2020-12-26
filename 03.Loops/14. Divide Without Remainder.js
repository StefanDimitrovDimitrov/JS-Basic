function DivideWithoutRemainder(string){
    let n = string[0]
    let p1 = 0
    let p2 = 0
    let p3 = 0

    for (let index = 1; index < string.length; index ++){
        let current = Number(string[index])

        if(current % 2 == 0){
            p1++
        }
        
        if (current % 3 == 0){
            p2++
        }
        
        if (current % 4 == 0){
            p3++
        }

    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);

}

DivideWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
