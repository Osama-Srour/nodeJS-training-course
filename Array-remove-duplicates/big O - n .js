
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

const getUniqueValues = (arrOfNum) => {
    return new Set(arrOfNum); 
};
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6] 
