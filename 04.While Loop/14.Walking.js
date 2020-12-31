function walking(arr){
    let target = 10000
    let index = 0
    let dayAchievement = 0 


    while (dayAchievement <= target){
        let input = arr[index]
        if (input == "Going home"){
            index ++
            currentSteps = Number(arr[index])
            dayAchievement += currentSteps
            break
        }

        currentSteps = Number(input)
        index ++
        dayAchievement += currentSteps

    }

    if (dayAchievement >= target){
        let overAchievement = dayAchievement - target
        console.log(`Goal reached! Good job!`)
        console.log(`${overAchievement} steps over the goal!`)
    }else{
        let difference = target - dayAchievement
        console.log(`${difference} more steps to reach goal.`)
    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



