function title(age, sex){
    age = Number(age);
    let result = ""
    if (age >= 16){
        switch(sex) {
            case "m":
                result = "Mr.";
                break;
            case "f":
                result = "Ms.";
                break
        }

    }else{
        switch(sex) {
            case "m":
                result = "Master";
                break
            case "f":
                result = "Miss";
                break
        }
    }
    console.log(result)
}

title("5", "f")