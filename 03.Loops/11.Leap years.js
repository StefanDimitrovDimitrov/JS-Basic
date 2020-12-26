function leapYear(firstY, secondY){
    for(let i = firstY; i <= secondY; i++) {
        if ((i % 4 == 0) && (i % 100 != 0)){
            console.log(i);
        }else if(i % 400 == 0){
            console.log(i)
        }
            
    }

}

leapYear("1908", "1919")