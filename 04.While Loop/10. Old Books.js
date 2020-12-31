function oldBook(arr){
    let index = 0
    let findBook = arr[index]
    let isFound = false
    let currentBook = ""
    let count = 0

    while (!isFound){
        index += 1
        currentBook = arr[index]
        if (currentBook === "No More Books"){
            break
        }
        if (currentBook === findBook){
            isFound = true
            break
        }else {
            count +=1
        }
    
    }
    if (isFound){
        console.log(`You checked ${count} books and found it.`)
    }else {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${count} books.`)
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


