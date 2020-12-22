function home(flower, numFlower, budget){
    numFlower = Number(numFlower);
    budget = Number(budget);
    let cost = 0 

    function discount(flower, numFlower){
        if (numFlower > 80){
            if (flower == "Roses"){
                cost -= cost * 0.1;
            }else if(flower == "Dahlias" && numFlower >90){
                cost -= cost * 0.15;
            }else if(flower == "Tulips"){
                cost -= cost * 0.15;
            }
        }
    }
    
    function increase(flower, numFlower){
        if (flower == "Narcissus" && numFlower < 120){
            cost += cost * 0.15;
        }
        if (flower == "Gladiolus" && numFlower <80){
            cost += cost * 0.2; 
        }
    }


    if (flower == "Roses"){
        cost = numFlower * 5;
        discount(flower, numFlower);
    }else if(flower == "Dahlias"){
        cost = numFlower * 3.8;
        discount(flower, numFlower);
    }else if(flower == "Tulips"){
        cost = numFlower * 2.8;
        discount(flower, numFlower)

    }else if(flower == "Narcissus"){
        cost = numFlower * 3
        increase(flower,numFlower)
    }else if(flower == "Gladiolus"){
        cost = numFlower* 2.50
        increase(flower, numFlower)
    }

    if(budget >= cost){
        console.log(`Hey, you have a great garden with ${numFlower} ${flower} and ${(budget-cost).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${(cost-budget).toFixed(2)} leva more.`)
    }

}

home("Narcissus","119","360")


