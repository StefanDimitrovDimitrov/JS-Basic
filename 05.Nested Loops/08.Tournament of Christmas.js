function tournament(arr){
    let days = Number(arr[0]);
    let index = 1;
    let win = 0;
    let lose = 0;
    let money = 0
    let totalWin =0 

    for (let i = 0; i < days; i++){
        while(arr[index] != "Finish"){
            result = arr[index]
            switch (result){
                case "win":
                    win ++;
                    break;
                case "lose":
                    lose++
                    break;
                default:
                    break;
            }
            index ++
        }
        let todayMoney = win * 20
        totalWin += win
        if (win>lose){
            todayMoney *= 1.1
        }
        money += todayMoney
        win = 0
        lose = 0
        index++


   }
   if (totalWin > (arr.length-3)/4){
        money *= 1.2
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`)

   }else{
    console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`) 
   }
       
}

tournament([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])
