function vacation(days, room, feedback) {
    days = Number(days);
    let cost = 0;
    let costRoomOnePerson = 18 * (days - 1)
    let costApartment = 25 * (days - 1)
    let costPresidentApertment = 35 * (days - 1)

    if (room == "room for one person") {
        cost = costRoomOnePerson
    } else if (room == "apartment") {
        if (days < 10) {
            cost = costApartment - costApartment * 0.3
        } else if (days <= 15) {
            cost = costApartment - costApartment * 0.35
        } else {
            cost = costApartment - costApartment * 0.5
        }

    } else if (room == "president apartment") {
        if (days < 10) {
            cost = costPresidentApertment - costPresidentApertment * 0.1
        } else if (days <= 15) {
            cost = costPresidentApertment - costPresidentApertment * 0.15
        } else {
            cost = costPresidentApertment - costPresidentApertment * 0.2
        }

    }

    if (feedback == "positive"){
        cost = cost+ cost * 0.25
    }else{
        cost = cost - cost * 0.1
    }
    console.log(cost.toFixed(2))
}

vacation("30",
"president apartment",
"negative")
