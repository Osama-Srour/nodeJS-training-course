function balancedParens(input) {
    
  //step 3 ignore non-bracket characters
  input =  input.replace(/[^\[\]{}()]/g, '');
   
  // step 1  
  let count = 0;
  for (const i of input) {
    // step2 update if to be works for all types of brackets 
    if (i === '(' || i === '{' || i === '[') {
      count++;
    } else if (i === ')'|| i === '}' || i === ']') {
      count--;
      if (count < 0) {
        return false; // unbalanced if a closing first
      }
    }
  }

  return count === 0; // Balanced if count is zero
 
}


console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
