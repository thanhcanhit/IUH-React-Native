const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Inspecion
Array.prototype.myFill = function (value, start, end) {
	const newArray = [];
	for (let index = 0; index < this.length; index++) {
		newArray.push(index >= start && index <= end ? value : this[index]);
	}

	return newArray;
};

console.log(array1.myFill(array1));
