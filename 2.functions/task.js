// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity; 
  let sum = null;
  let avg = null;
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
     }
    avg = Number((sum / arr.length).toFixed(2));
  
    return {min: min, max: max, avg: avg};
  }
  
  // Задание 2
  function worker(arr) {
   let sum = null;
   arr.forEach(item => sum += arr[i]);
    return sum;
  }
  
  function makeWork(arrOfArr, func) {
  let max = - Infinity;
  for (let i = 0; i <= arrOfArr(i); i++) {
   let sum = func(arrOfArr[i]);
   if (sum > max) max = sum;
  }
   return max;
  }
  
  // Задание 3
  function worker2(arr) {
   let min = Infinity, max = -Infinity; 
   let difference = null;
    
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] > max) max = arr[i];
     if (arr[i] < min) min = arr[i];
     difference = Math.abs(max - min);
     
     }
   
    return {min: min, max: max, difference: difference};
  }
  