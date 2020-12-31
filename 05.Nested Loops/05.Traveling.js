function traveling(arr){
    let index = 0
    let price = 0;

    while (arr[index] != "End"){
        let destination = arr[index]
        price = Number(arr[index+1]);
        index ++;
        index ++

        for(let i = 0; i < arr.length; i++){
            if (price > 0){
                price -= Number(arr[index]);
                index ++   
            }else{
                break
                index ++
            }
            
               
        }
    console.log(`Going to ${destination}!`)    
    }

}
    


 traveling(["France",
 "10",
 "1",
 "2",
 "3",
 "1",
 "3",
 "Portugal",
 "1450",
 "400",
 "400",
 "200",
 "300",
 "300",
 "Egypt",
 "1900",
 "1000",
 "280",
 "300",
 "500",
 "End"])
 
 
 