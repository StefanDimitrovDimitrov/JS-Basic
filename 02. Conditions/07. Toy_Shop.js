function toyShop(trip_price,num_puzzels,num_toy,num_bear,num_miniunies,num_track) {
    trip_price = Number(trip_price);
    num_bear = Number(num_bear);
    num_miniunies = Number(num_miniunies);
    num_puzzels = Number(num_puzzels);
    num_track = Number(num_track);
    num_toy = Number(num_toy)

    let profit = num_puzzels * 2.60 + num_toy * 3 + num_bear * 4.10 + num_miniunies * 8.20 + num_track * 2

    let count_products = num_puzzels + num_toy+ num_bear + num_miniunies+num_track

    if (count_products >= 50) {
        profit = profit - profit * 0.25
    }

    profit = profit - profit * 0.10

    if(trip_price <= profit){
        console.log(`Yes! ${(profit - trip_price).toFixed(2)} lv left.`)
    }else { console.log(`Not enough money! ${(trip_price - profit).toFixed(2)} lv needed.`)

    }

}

toyShop("320", "8", "2", "5", "5", "1")