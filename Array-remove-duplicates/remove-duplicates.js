
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

const getUniqueValues = (arrOfNum) => {
     
    let uniqueArray = [];

        //loop for all item in original array
     for( num of arrOfNum){

        //check if item available in new array
        let isNumberExist = false ;  
        for(unique of uniqueArray){

            if(num === unique){
                isNumberExist = true;
               // console.log('num === unique');
                break ; 
            }
        }

        //add item to new array if item does not exist before 
        if(!isNumberExist){
            uniqueArray.push(num);
        }    
     }

     //return array 
      return uniqueArray
};
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6] 
