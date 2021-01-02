function pyramid(arr){
    n = Number(arr[0]);
    let current = 1;
    let isBigger = false;
    let result =  "";
    for (let rows = 1; rows <= n; rows++ ){
        for (let cols = 1; cols <= rows; cols++){
            if (current > n){
                isBigger = true;
                break;
            }
            result += current + " "; 
            current ++;
        }
        console.log(result);
        result = '';
        if (isBigger){
            break;
        }
    }
}

pyramid(["12"])