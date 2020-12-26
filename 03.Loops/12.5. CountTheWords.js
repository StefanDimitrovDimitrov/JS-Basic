function countTheWords(string){
    string = string.split(" ").length;
    
    if (string > 10){
        console.log(`The message is too long to be send! Has ${string} words.`)
    }else{
        console.log("The message was send successfully!")
    }
    
    
}

countTheWords("This message has exactly eleven words. One more as it's allowed!")