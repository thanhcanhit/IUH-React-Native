const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

// Inspection
Array.prototype.myFindIndex = function (callback) {
	for (let index = 0; index < this.length; index++) {
		if (callback(this[index])) return index;
	}

	return -1;
};

console.log(array1.myFindIndex(isLargeNumber));