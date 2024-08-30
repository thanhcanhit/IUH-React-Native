// Normal use case
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

// Inspection
Array.prototype.myEvery = function (callback) {
	for (let index = 0; index < this.length; index++) {
		if (!callback(this[index], index, this)) return false;

		return true;
	}
};

console.log(array1.myEvery(isBelowThreshold));
