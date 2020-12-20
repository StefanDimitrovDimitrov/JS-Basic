function sum_seconds(num1, num2, num3){
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let total_seconds = num1 + num2 +num3;
    let minutes = Math.floor(total_seconds / 60);
    let seconds = total_seconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)

    }else{
        console.log(`${minutes}:${seconds}`)
    }
}

sum_seconds("35", "45", "44")