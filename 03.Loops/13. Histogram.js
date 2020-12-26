function histogram(string){
    let n = string[0]
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0

    for (let index = 1; index < string.length; index ++){
        let current = Number(string[index])

        if(current < 200){
            p1++
        }else if (current < 400){
            p2++
        }else if (current < 600){
            p3++
        }else if (current < 800){
            p4++
        }else{
            p5++
        }

    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);

}

histogram(["3",
"1",
"2",
"999"])

