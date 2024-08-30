const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
	(accumulator, currentValue) => accumulator + currentValue
);

console.log(sumWithInitial);
// Expected output: 10

// Inspection
Array.prototype.myReduce = function (callback, initialValue) {
	let result = typeof initialValue === "undefined" ? this[0] : initialValue;

	for (
		let index = typeof initialValue === "undefined" ? 1 : 0;
		index < this.length;
		index++
	) {
		const element = this[index];
		result = callback(result, element, index);
	}

	return result;
};

const sumWithInitial2 = array1.myReduce(
	(accumulator, currentValue) => accumulator + currentValue
);

console.log(sumWithInitial2);
