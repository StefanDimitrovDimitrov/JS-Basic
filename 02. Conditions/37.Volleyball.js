function volleyball(yearType, p, h) {
    p = Number(p);
    h = Number(h);

    let weekendsSpendSofiq = 48 - h
    let weekendsSofia = weekendsSpendSofiq * 3 / 4;
    let weekendsHomeTown = h;
    let holidays = p * 2 / 3;

    let totalGames = weekendsHomeTown + weekendsSofia + holidays;

    if (yearType == "leap") {
        totalGames = totalGames + totalGames * 0.15;
    }
    
    console.log(Math.floor(totalGames))
    // }else if(yearType == "normal"){
    //     console.log(Math.floor(totalGames));

}

volleyball("leap",
"2",
"3")


