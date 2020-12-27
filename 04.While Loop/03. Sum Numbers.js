function sum(arr){
    number = Number(arr[0])
    let sumN = 0
    let index = 1
    while(sumN < number){
        sumN += Number(arr[index])
        index ++
    }
    console.log(sumN)
}
sum(["100",
"10",
"20",
"30",
"40"]
)