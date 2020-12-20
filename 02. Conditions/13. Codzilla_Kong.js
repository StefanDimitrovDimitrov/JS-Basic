function budgetMovie(budgetMovie, numStat, priceDress){
    budgetMovie = Number(budgetMovie);
    numStat = Number(numStat);
    priceDress = Number(priceDress);

    let costDecor = budgetMovie * 0.1
    let costDress = numStat * priceDress

    if (numStat > 150){
        costDress -= costDress * 0.1
    }

    let totalCost = costDecor + costDress

    if (budgetMovie >= totalCost){
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budgetMovie - totalCost).toFixed(2)} leva left.`)
    }else{
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalCost - budgetMovie).toFixed(2)} leva more.`)
    }

}

budgetMovie("15437.62","186","57.99")

