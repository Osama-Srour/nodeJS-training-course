
console.log(ReverseString("Hello, World!")); //!dlroW ,olleH
console.log(ReverseString("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));//ZYXWVUTSRQPONMLKJIHGFEDCBA
console.log(ReverseString("Can you do it , for this , text !?")); //?! txet , siht rof , ti od uoy naC
console.log(ReverseString("?! txet , siht rof , ti od uoy naC")); // Can you do it , for this , text !?

//loop the str from last to first and save elemnet in results then return it ;  
function ReverseString(str){

    let results  = '';   
    for( i =str.length -1 ; i >= 0 ; i--){
            results  += str[i];
        }
    return results ;
    
}


