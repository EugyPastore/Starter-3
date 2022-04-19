const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  // how many elements in an array?
  // how to increase automatically number of days
  // how to print all in one sentence
  let forecast = '...';
  for (i = 0; i < arr.length; i++) {
    let day = `${arr[i]} degrees in ${i + 1} days...`;
    forecast += day;
  }
  console.log(forecast);
}
printForecast(temp1);
printForecast(temp2);
