const commonCharacters = (str1, str2) => {
    let result ='';

    for( i =0 ; i< str1.length ; i++){

         if(str2.indexOf(str1[i]) != -1 && result.indexOf(str1[i]) == -1  ){
                result +=str1[i];
         };

    }
    return result
};
console.log(commonCharacters('acexivou', 'aegihobu')); // aeiou

