function priceGreenYard(area) {
    let price = Number(area) * 7.61;
    let discount = 0.18 * price;
    let total_price = price - discount;
    console.log(`The final price is: ${total_price} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

priceGreenYard("550")