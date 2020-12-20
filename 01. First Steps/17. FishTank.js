function fishTank(length, width, height, percentage) {
    length = Number(length);
    width = Number(width);
    height = Number(height);
    percentage = Number(percentage);

    let volume = length * width * height;
    let litters = volume * 0.001;
    let total_percentage = percentage * 0.01;
    let total_litter = litters * (1 - total_percentage);

    console.log(total_litter);
}

fishTank("85","75","47","17");
