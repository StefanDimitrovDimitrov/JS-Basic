function specialNum(arr){
    n = Number(arr[0]);
    let start = 1111;
    let end = 9999;
    isSpecial = false
    result = ''
    for(i = start; i <= end; i++){
        i = "" + i 
        for(j = 0; j < 4; j++ ){
            if (n % Number(i[j]) == 0){
                isSpecial = true
            }else{
                isSpecial = false
                break
            }
        }
        if (isSpecial){
           result += `${Number(i)} ` 
        }
        
    }
    console.log(result)
}

specialNum(["3"])