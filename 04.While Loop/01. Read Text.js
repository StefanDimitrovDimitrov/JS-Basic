function readText(arr){
    let index = 0;
    while (arr[index] !== "Stop"){
        console.log(arr[index]);
        index += 1;
    }

}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
