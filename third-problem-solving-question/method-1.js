console.log(ReverseString("Hello, World!")); //!dlroW ,olleH
console.log(ReverseString("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));//ZYXWVUTSRQPONMLKJIHGFEDCBA
console.log(ReverseString("Can you do it , for this , text !?")); //?! txet , siht rof , ti od uoy naC
console.log(ReverseString("?! txet , siht rof , ti od uoy naC")); // Can you do it , for this , text !?


//convert to array then reverse  and join it by array methods; easy way 
function ReverseString(str){
   return str.split('').reverse().join('');
}
