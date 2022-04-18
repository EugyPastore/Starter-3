// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//FIXME
//TODO
//BUG

const temperatures = [7, 3, -1, 'error', 18, 20];
const temp2 = [6, 89];

function calcAmpl(arr1, arr2) {
  let max = temperatures[0];
  let min = temperatures[0];

  const arr = arr1.concat(arr2);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue;
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    console.log(min, max);
  }
  return max - min;
}
console.log(calcAmpl(temperatures, temp2));
