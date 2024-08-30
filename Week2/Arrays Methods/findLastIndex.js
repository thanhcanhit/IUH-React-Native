const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

// Inspection
Array.prototype.myFindLastIndex = function (callback) {
	for (let index = this.length - 1; index >= 0; index--) {
		if (callback(this[index])) return index;
	}

	return -1;
};

console.log(array1.myFindLastIndex(isLargeNumber));
