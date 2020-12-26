function factorial(n){
    n = Number(n);
    let answer = 1;
    if(n == 0 || n == 1){
        return answer;
    }else{
        for(let i = n; i >= 1; i--){
            answer *= i
        }
    }
    console.log(answer)
}
factorial("4")