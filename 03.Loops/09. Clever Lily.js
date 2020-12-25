function cleverLili(age, Newtoyprice, pricePerToy) {
    age = Number(age);
    Newtoyprice = Number(Newtoyprice);
    pricePerToy = Number(pricePerToy);

    let sum = 0;
    let toyCount = 0;
    let moneyCount = 0;
    let moneyPerBd = 10;
    
    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneyCount += moneyPerBd;
            moneyCount = moneyCount - 1;
            moneyPerBd += 10;
        } else {
            toyCount++;
        }
    }

    sum = toyCount * pricePerToy + moneyCount;

    if (sum >= Newtoyprice) {
        console.log(`Yes! ${(sum - Newtoyprice).toFixed(2)}`)
    } else {
        console.log(`No! ${(Newtoyprice - sum).toFixed(2)}`)
    }
}

cleverLili("10","170","6")