function MultiplicationTable(n){
    n = Number(n)
    for(i = 1; i <= 10; i ++){
        console.log(`${i} * ${n} = ${i * n}`)
    }
}
MultiplicationTable("5")