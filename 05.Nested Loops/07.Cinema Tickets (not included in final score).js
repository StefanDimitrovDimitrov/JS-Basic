function cinemaTickets(arr){
    let index = 0;
    let command = arr[index];
    let freeSpots = 0;
    let occupied = 0
    let typeTicket = "";
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let totalStudents = 0;
    let totalStandard = 0;
    let totalKid = 0;
    let totalTickets = 0;
    let movieTotalTickets = 0;
    let roomCapacity


    while (arr[index] != "Finish"){
        let movie = arr[index]
        freeSpots = Number(arr[index+1])
        index ++
        index ++
        while (arr[index] != "End"){
            typeTicket = arr[index]
            movieTotalTickets ++
            totalTickets ++
            if (typeTicket == "student"){
                studentTickets ++
            }else if(typeTicket == "standard"){
                standardTickets ++
            }else if (typeTicket == "kid"){
                kidTickets ++
            }
            occupied ++
            if(occupied == freeSpots){
                break
            }
            index++
        }

        roomCapacity = movieTotalTickets/freeSpots * 100
        console.log(`${movie} - ${roomCapacity.toFixed(2)}% full.`)
        occupied = 0
        movieTotalTickets =0
        index++
    } 
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentTickets/totalTickets *100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTickets/totalTickets *100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidTickets/totalTickets *100).toFixed(2)}% kids tickets.`)
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])


