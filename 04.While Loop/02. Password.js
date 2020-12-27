function password(arr){
    let name = arr[0]
    let password = arr[1]
    let data = arr[2]
    let index = 3
    while (data !== password){
        data = arr[index];
        index ++;
    }
    console.log(`Welcome ${name}!`)
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
