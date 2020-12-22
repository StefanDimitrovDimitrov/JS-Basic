function cinema(type, rows, cows){
    rows = Number(rows);
    cows = Number(cows);
    let price = 0
    let capacity = rows * cows

    if (type == "Premiere"){
        price = capacity * 12
    }else if(type == "Normal"){
        price = capacity * 7.5
    }else{
        price = capacity * 5
    }
    console.log(`${price.toFixed(2)}.`)
}

cinema("Normal", "21", "13")