function market(price_strawberries,num_bananas,num_oranges,num_raspberries,num_strawberries) {
    price_strawberries = Number(price_strawberries);
    num_bananas = Number(num_bananas);
    num_oranges = Number(num_oranges);
    num_raspberries = Number(num_raspberries);
    num_strawberries = Number(num_strawberries);

    let price_rospberries = price_strawberries / 2;
    let price_oranges = price_rospberries - price_rospberries * 0.4;
    let price_bananas = price_rospberries - price_rospberries * 0.8;

    let total_straw = price_strawberries * num_strawberries;
    let total_ros = price_rospberries * num_raspberries;
    let total_oran = price_oranges * num_oranges;
    let total_ban = price_bananas *num_bananas;  

    let total = total_ban + total_oran + total_ros + total_straw;

    console.log(total);
}

market("48", "10", "3.3", "6.5", "1.7")
