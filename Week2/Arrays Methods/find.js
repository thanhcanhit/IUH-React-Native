const array1 = [5, 12, 8, 130, 44];
console.log(array1.find((element) => element > 10 ));
// Expected output: 12

// Inspection
Array.prototype.myFind = function (callback) {
	for (let index = 0; index < this.length; index++) {
		if (callback(this[index])) return this[index];
	}

  return undefined;
};

console.log(array1.myFind((element) => element > 10));