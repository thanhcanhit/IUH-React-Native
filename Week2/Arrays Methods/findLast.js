const array1 = [5, 12, 50, 130, 44];

console.log(array1.findLast((element) => element > 45));
// Expected output: 130

// Inspection
Array.prototype.myFindLast = function (callback) {
	for (let index = this.length - 1; index >= 0; index--) {
		if (callback(this[index])) return this[index];
	}

	return undefined;
};


console.log(array1.myFindLast((element) => element > 45));