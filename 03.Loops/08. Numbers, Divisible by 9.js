function dividedByNine(n, m){
    n = Number(n);
    m = Number(m);

    let sum = 0;
    let numbersString = "";

    for (let i = n; i <= m; i++){
        if (i % 9 == 0) {
            sum += i;
            numbersString = numbersString + i + "\n";
        }

    }
    console.log(`The sum: ${sum}`);
    console.log(numbersString);
}

dividedByNine("100", "190")