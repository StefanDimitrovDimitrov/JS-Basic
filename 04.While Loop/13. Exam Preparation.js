function examPreparatioin(arr){
    let index = 1;
    let target = Number(arr[0]);
    let nextTask = arr[index];
    let totalScore = 0 ;
    let count = 0;
    let countFailiers = 0;
    let isFail = false;

    while (nextTask != "Enough"){
        index ++;
        let score = Number(arr[index])        
        totalScore += score;
        count ++;
        if (score <= 4){
            countFailiers ++;
        }
        if (countFailiers == target){
            isFail = true;
            break;
        }
        index ++;
        nextTask = arr[index];
    }

    if(isFail){
        console.log(`You need a break, ${target} poor grades.`);
    }else{
        console.log(`Average score: ${(totalScore/count).toFixed(2)}`);
        console.log(`Number of problems: ${count}`);
        console.log(`Last problem: ${arr[index - 2]}`);
    }
}

examPreparatioin(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

