function traider(city, sales) {
    sales = Number(sales)
    let result = 0

    if (city == "Sofia") {
        if (sales >= 0 && sales <= 500) {
            result = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            result = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            result = sales * 0.08;
        } else if (sales > 10000) {
            result = sales * 0.12;
        }
    } else if (city == "Varna") {
        if (sales >= 0 && sales <= 500) {
            result = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) {
            result = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            result = sales * 0.1;
        } else if (sales > 10000) {
            result = sales * 0.13;
        }
    } else if (city == "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            result = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            result = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            result = sales * 0.12;
        } else if (sales > 10000) {
            result = sales * 0.145;
        }
    } else {
        result = "error"
    }
    if (result != 0 && result != "error") {
        console.log(result.toFixed(2))
    } else {
        result = "error"
        console.log(result)
    }

}

traider("Plovdiv", "-20")
