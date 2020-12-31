function coins(arr){
    difference = Number(arr[0])
    let numCoins = 0
    listCoins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    while (difference != 0){
        for(let index = 0; index < listCoins.length; index ++){
            let coin = Number(listCoins[index])
            let result = Math.floor(difference / coin)
            if (result != 0) {
                numCoins += result
                res = coin * result
                difference = Number((difference - res).toFixed(2))
            }
        }
    
    }
    console.log(numCoins)
}
//     while(difference != 0){
//         let result = Math.floor(difference / 2)
//         if (result != 0) {
//             numCoins += result
//             res = 2 * result
//             difference = Number((difference - res).toFixed(2))
//         }
//         result = Math.floor(difference/1)
//         if (result != 0) {
//             numCoins +=result
//             res = 1 * result
//             difference = Number((difference - res).toFixed(2))
//         }
//         result = Math.floor(difference/ 0.5)
//         if (result != 0) {
//             numCoins += result
//             res = 0.5 * result
//             difference = Number((difference - res).toFixed(2))
//         }
//         result = Math.floor(difference/0.2)
//         if (result != 0) {
//             numCoins +=result
//             res = 0.2 * result
//             difference = Number((difference - res).toFixed(2))
//         }
//         result = Math.floor(difference/0.1)
//         if (result != 0) {
//             numCoins +=result
//             res = 0.1 * result
//             difference = Number((difference - res).toFixed(2))
//         }
//         result = Math.floor(difference/0.05)
//         if (result != 0) {
//             numCoins +=result
//             res = 0.05 * result
//             difference = Number((difference - res).toFixed(2))
//         }
//         result = Math.floor(difference/0.02)
//         if (result != 0) {
//             numCoins +=result
//             res = 0.02 * result
//             difference = Number((difference - res).toFixed(2))
//         }
//         result = Math.floor(difference/0.01)
//         if (result != 0) {
//             numCoins +=result
//             res = 0.01 * result
//             difference = Number((difference - res).toFixed(2))
//         }
//     }

//     console.log(numCoins)
// }

coins(["2.73"])