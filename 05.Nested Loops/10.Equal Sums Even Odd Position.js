function mathEvenOddComparing(arr) {
    firstN = Number(arr[0]);
    secondN = Number(arr[1]);
    let sumEven = 0
    let sumOdd = 0
    let result = ''

    for (let i = firstN; i <= secondN; i++) {
        let lengthI = Math.log(i) * Math.LOG10E + 1 | 0;
        // let lengthI = "" +i;
        for (let j = 0;j < lengthI; j++) {
            i = i.toString()
            num = Number(i[j]);
            if (j % 2 == 0) {
                sumEven += num;
            } else {
                sumOdd += num;
            }
        }
        if (sumEven === sumOdd) {
            result += `${i} ` 
        }
        sumEven = 0
        sumOdd = 0 
        firstN ++
    }
    console.log(result)

}
mathEvenOddComparing(["100000",
    "100050"])
