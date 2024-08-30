const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// Inspection
Array.prototype.myMap = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    result.push(callback(element));
  }

  return result;
}

const map2 = array1.myMap((x) => x * 2);

console.log(map2);