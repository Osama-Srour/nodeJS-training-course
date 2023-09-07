  const secondMax = function(array) {

    let max  = null;
    let secondMax = null ;

  for (num of array) {

    if(max == null){
        max= num
    }

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax;

}; 

console.log(secondMax([1,5, 2]));
console.log(secondMax([-1, -5, 2]));
console.log(secondMax([-3, -2, -7]) );