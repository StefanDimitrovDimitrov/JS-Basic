function hotel(month, numNights) {
    numNights = Number(numNights);
    let studio = 0
    let apartment = 0

    if (month == "May" || month == "October") {
        studio = numNights * 50;
        apartment = numNights * 65;

        if (numNights > 14) {
            studio = studio - studio * 0.3;
            apartment = apartment - apartment * 0.1;
        } else if (numNights > 7) {
            studio = studio - studio * 0.05;
        }

    } else if (month == "June" || month == "September") {
        studio = numNights * 75.2;
        apartment = numNights * 68.70;
        if (numNights > 14) {
            studio = studio - studio * 0.2;
            apartment = apartment - apartment * 0.1;
        }
    } else if (month == "July" || month == "August") {
        studio = numNights * 76;
        apartment = numNights * 77;
        if (numNights > 14) {
            apartment = apartment - apartment * 0.1;
        }

    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);

}


hotel("May", "15")
