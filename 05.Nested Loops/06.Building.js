function building(arr){
    let floors = (arr[0]);
    let rooms = (arr[1]);
    let result = ''
    let l = ''
    for(let i = Number(floors); i != 0;i--){

        for(let j = 0; j<rooms; j++){
            if (i == floors){
                l = "L"
            }else if (i % 2 == 0){
                l = "O"
            }else{
                l = "A"
            }
        
            result += `${l}${i}${j} `
        }

        console.log(result)
        result =''
    }
    
    

}

building(["1","1"])