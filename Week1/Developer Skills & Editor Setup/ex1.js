/* Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..." */
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

/* 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets. */
const printForecast = (arr) => {
  let toDayMax = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= toDayMax) toDayMax = arr[i];

    console.log(`${toDayMax} is max temperature in ${i+1}`)
  }
}
/*2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems! */
console.log("Data1: ");
printForecast(data1)
console.log("Data2: ");
printForecast(data2)