function outfit(degrees, period){
    degrees = Number(degrees);
    let outfit = ""
    let shoes = ""

    if (10 <= degrees && degrees <= 18){
        if (period == "Morning"){
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        }else if(period == "Afternoon"){
            outfit = "Shirt"
            shoes = "Moccasins"
        }else{
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }else if(18 < degrees && degrees <= 24){
        if (period == "Morning"){
            outfit = "Shirt"
            shoes = "Moccasins"
        }else if(period == "Afternoon"){
            outfit = "T-Shirt"
            shoes = "Sandals"
        }else{
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }else if(degrees >= 25){
        if (period == "Morning"){
            outfit = "T-Shirt"
            shoes = "Sandals"
        }else if(period == "Afternoon"){
            outfit = "Swim Suit"
            shoes = "Barefoot"
        }else{
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

outfit("22","Afternoon")