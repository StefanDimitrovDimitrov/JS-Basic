function fishBoat(budget, season, fishers) {
    budget = Number(budget);
    fishers = Number(fishers);

    let cost = 0
    function discount(fishers) {
        if (fishers <= 6) {
            cost -= cost * 0.1
        } else if (fishers >= 7 && fishers <= 11) {
            cost -= cost * 0.15
        } else {
            cost -= cost * 0.25
        }
    }

    if (season == "Spring") {
        cost = 3000;
        discount(fishers)
    }else if (season == "Summer" || season == "Autumn") {
        cost = 4200;
        discount(fishers)
    } else if (season == "Winter") {
        cost = 2600;
        discount(fishers)
    }

    if (fishers % 2 == 0 && season != "Autumn")
        cost -= cost * 0.05

    if (budget >= cost){
        console.log(`Yes! You have ${(budget - cost).toFixed(2)} leva left.`)

    }else{
        console.log(`Not enough money! You need ${(cost - budget).toFixed(2)} leva.`)
    }
}

fishBoat("2000","Summer","12")


