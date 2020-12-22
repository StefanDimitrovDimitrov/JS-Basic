function trip(budget, season){
    budget = Number(budget);
    let location = ''
    let place = ''
    let cost = 0
    if (budget <= 100){
        location = "Bulgaria"
        if (season == "summer"){
            place = "Camp"
            cost = budget * 0.3    
        }else{
            place = "Hotel"
            cost = budget * 0.7  
        }
    }else if(budget <= 1000){
        location = "Balkans"
        if (season == "summer"){
            place = "Camp"
            cost = budget * 0.4
        }else{
            place = "Hotel"
            cost = budget * 0.8
        }
    }else{
        location = "Europe"
        place = "Hotel"
        cost = budget * 0.9  

    }
    console.log(`Somewhere in ${location}`)
    console.log(`${place} - ${cost.toFixed(2)}`)
}

trip("50", "summer")