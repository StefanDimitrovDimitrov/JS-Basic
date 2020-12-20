function speed(num1) {
    num1 = Number(num1);
    let result = ''
    
    if (num1 > 1000) {
        result = "extremely fast";
    }else if(num1 > 150 ) {
        result = "ultra fast"
    }else if(num1 > 50 ) {
        result = "fast"
    }else if(num1 > 10 ) {
        result = "average"
    }else if(num1 <= 10) {
        result = "slow"
    }

    console.log(result)
}

speed("1000000")