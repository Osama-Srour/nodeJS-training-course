console.log(isPrimeNumber(3456));//false
console.log(isPrimeNumber(1));//false
console.log(isPrimeNumber(-1));//false
console.log (isPrimeNumber(-13));//false
console.log (isPrimeNumber(13));//true

function isPrimeNumber(number){
    
    if(number <= 0){
        //zero and negative numbers are not prime 
        return false;

    }else{

        count = number-1;
    
    while(count !=1 ){

        if(number % count == 0){
             return false;
        }

        count -=1; 
    }

        return true;

    }
}