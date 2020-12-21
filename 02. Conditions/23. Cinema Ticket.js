function cinemaTicket(day){
    switch(day){
        case "Saturday":
        case "Sunday": 
            console.log(16)
            break
        case "Wednesday":
        case "Thursday":
            console.log(14)
            break
        default:
            console.log(12)
            break    
    }
}

cinemaTicket("Monday")