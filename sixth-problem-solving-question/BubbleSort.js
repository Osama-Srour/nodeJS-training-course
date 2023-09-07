const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - 1 - i; j++){
                if (array[j] > array[j + 1]){
                    // Swap elements
                    let temp = array[j] ;
                    array[j] = array[j+1];
                    array[j+1] = temp;
                   
                }
        }
    }

    return array;
};

const swap = (a , b) => {
    temp = a ; 
    a= b ; 
    b = temp ;
}

console.log(bubbleSort([34, 203, 3, 746, 200, 984, 198, 764, 9]));
console.log(bubbleSort([2, 1, 3])); // yields [1, 2, 3]
