function prime(arr){
    let sumP = 0;
    let sumNotP = 0;
    let isPrime = true
    let isNegative = false
    arrL = arr.length - 1

    for(let i = 0; i< arrL; i++){
        
        let num = Number(arr[i])
        if (num < 0){
            num = 0
            console.log("Number is negative.")
        }

        for(let j = 2; j < num; j++){
            if (num % j == 0){
                isPrime = false
                break;
            }
        }


        if(!isPrime){
            sumNotP += num
        }else{
            sumP += num
        }
        isPrime = true
    }
    console.log(`Sum of all prime numbers is: ${sumP}`)
    console.log(`Sum of all non prime numbers is: ${sumNotP}`)
}


prime(["30","83","33","-1","20","stop"])
