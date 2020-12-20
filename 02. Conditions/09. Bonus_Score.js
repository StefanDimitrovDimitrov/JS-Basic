function bonus(num) {
    num = Number(num);
    let bonus_points = 0.0; 

    if (num > 1000){
        bonus_points = num * 0.10;
    } else if(num > 100) {
        bonus_points = num * 0.20;
    } else{
        bonus_points = 5;
    }
    
    if (num % 2 == 0) {
        bonus_points = bonus_points + 1;
    } else if (num % 10 == 5){
        bonus_points = bonus_points + 2;
    }

    console.log(bonus_points)
    console.log(num + bonus_points)
}

bonus("20")
