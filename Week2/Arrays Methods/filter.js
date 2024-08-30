const words = ["spray", "elite", "exuberant", "destruction", "present"];

console.log(words.filter((word) => word.length > 6));
// Expected output: Array ["exuberant", "destruction", "present"]

// Inspection
Array.prototype.myFilter = function (callback) {
	const newArray = [];
	for (let index = 0; index < this.length; index++) {
		if (callback(this[index])) newArray.push(this[index]);
	}

  return newArray;
};

console.log(words.myFilter((word) => word.length > 6));