function combination(n){
    n = Number(n)
    let combinations = 0
    for(let i = 0; i<= n; i++){
        for(let j = 0; j<= n; j++){
            for(let k = 0; k<= n; k++){
                if (i + j + k == n){
                    combinations ++
                }
            }
        }
    }
    console.log(combinations)
}

combination("20")