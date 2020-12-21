function sholarship(budget, score, minSalary){

    budget = Number(budget);
    score = Number(score);
    minSalary = Number(minSalary);

    let socialSholarship = Math.floor(minSalary * 0.35)
    let scoreSholarship = Math.floor(score * 25)
    let result = ''


    if(budget < minSalary){
        if (score >= 5.5){
            if (scoreSholarship >= socialSholarship){
                result = `You get a scholarship for excellent results ${scoreSholarship} BGN`;
            }else{
                result = `You get a Social scholarship ${socialSholarship} BGN`;  
            }
        }else if(score > 4.5){
                result = `You get a Social scholarship ${socialSholarship} BGN`;
        }else{
            result = "You cannot get a scholarship!";
            }
    }else{
        if (score >= 5.5){
                result = `You get a scholarship for excellent results ${scoreSholarship} BGN`;
        }else{
            result = "You cannot get a scholarship!";
            }
    }   
    console.log(result);
}

sholarship("470.00","6","420.00")





