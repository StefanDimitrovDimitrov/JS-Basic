function oldBook(arr){
    let findBook = arr[0];
    let index = 1;
    let isFound = false;
    let currentBook = "";
    let count = 0;

    while (!isFound){
        currentBook = arr[index++];
        if (currentBook === "No More Books"){
            break;
        }
        if (currentBook === findBook){
            isFound = true;
            break;
        }else {
            count +=1;
        }
    
    }
    if (isFound){
        console.log(`You checked ${count} books and found it.`);
    }else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`);
    }
    
}

oldBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


