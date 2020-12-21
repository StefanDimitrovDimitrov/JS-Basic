function fruitShop(fruit, day, quantity){
    quantity = Number(quantity);
    let result = 0
    
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit == "banana" ){
                result = quantity * 2.5;
            }else if (fruit == "apple"){
                result = quantity * 1.2;
            }else if(fruit == "orange"){
                result = quantity * 0.85;
            }else if(fruit == "grapefruit"){
                result = quantity * 1.45;
            }else if(fruit == "kiwi"){
                result = quantity * 2.7;
            }else if(fruit == "pineapple"){
                result = quantity * 5.5;
            }else if(fruit == "grapes"){
                result = quantity * 3.85;
            }else{
                console.log("error");
            }
        break
        case "Saturday":
        case "Sunday":
            if (fruit == "banana" ){
                result = quantity * 2.7;
            }else if (fruit == "apple"){
                result = quantity * 1.25;
            }else if(fruit == "orange"){
                result = quantity * 0.9;
            }else if(fruit == "grapefruit"){
                result = quantity * 1.6;
            }else if(fruit == "kiwi"){
                result = quantity * 3;
            }else if(fruit == "pineapple"){
                result = quantity * 5.6;
            }else if(fruit == "grapes"){
                result = quantity * 4.2;
            }else{
                console.log("error");
            }
        break
        default:
            console.log("error")
        break
        }
    if (result != 0){
        console.log(result.toFixed(2))   
    }    
     
}


fruitShop("tomato", "Monday", "0.5")