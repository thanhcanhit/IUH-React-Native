const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// Inspection
Array.prototype.myForEach = function (callback) {
	for (let index = 0; index < this.length; index++) {
		const element = this[index];
		callback(element);
	}
};

array1.myForEach((element) => console.log(element));
