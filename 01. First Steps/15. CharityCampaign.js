function charity(campaign_days,num_cake_makers,num_cakes,num_gof,num_pump) {
    campaign_days = Number(campaign_days);
    num_cake_makers = Number(num_cake_makers);
    num_cakes = Number(num_cakes);
    num_gof = Number(num_gof);
    num_pump = Number(num_pump);

    let total_sum_cakes = num_cakes * 45;
    let total_sum_gof = num_gof * 5.80;
    let total_sum_pump = num_pump * 3.20;
    let total_sum_products = (total_sum_cakes + total_sum_gof + total_sum_pump) * num_cake_makers;
    let total_sum = (campaign_days * total_sum_products);
    let total = total_sum - total_sum / 8;
    console.log(total);
}

charity("23","8","14","30","16");
