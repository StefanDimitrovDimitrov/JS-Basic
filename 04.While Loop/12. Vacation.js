function vacation(arr){
    let target = Number(arr[0]);
    let capital = Number(arr[1]);
    let index = 2;
    let countSpend = 0;
    let moneySaved = false;
    let days = 0;

    while (countSpend != 5){
        days ++;
        action = arr[index++];
        let currentMoney = Number(arr[index]);
        if (action === "spend"){
            // saved.Monet = Math.max(0, capital - money);
            countSpend ++;
            if (currentMoney >= capital){
                capital = 0;
            }else{
                capital -= currentMoney;
                
            }
                
        }else{
            capital += currentMoney;
            countSpend = 0;
        }

        if (capital >= target){
            moneySaved = true;
            break;
        }
        index++
    }
    if (moneySaved){
        console.log(`You saved the money for ${days} days.`);
    }else{
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


