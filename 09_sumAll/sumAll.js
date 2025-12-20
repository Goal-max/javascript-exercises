const sumAll = function(a,b) {
  if( a < 0 | b < 0 | !Number.isInteger(a) | !Number.isInteger(b) | !Number.isFinite(a) | !Number.isFinite(b)) {
    return 'ERROR'
  }
  else {
  let array = [a,b];
  array.sort();
  let diff = array[1] - array[0];
  
  for (let i = 1; i < diff; i++) {
    let number = array[0] + i;
    array.push(number); 
  }
  
  let sum = array.reduce((sum, current) => sum + current, 0);
  return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
