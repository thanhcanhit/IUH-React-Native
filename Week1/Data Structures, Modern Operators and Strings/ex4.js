/* Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed. */

const textData = `
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure`;

/* Should produce this output (5 separate console.log outputs):
underscoreCase   ✅
firstName        ✅✅
someVariable     ✅✅✅
calculateAge     ✅✅✅✅
delayedDeparture ✅✅✅✅✅ 
*/
const format = (string) => {
	const lines = string.split("\n");
	const formatedLines = lines.map((line, lineIndex) => {
		line = line.trim().toLowerCase();
		words = line.split("_");
		const formatedLine = words
			.map((item, index) =>
				index == 0
					? item
					: `${item[0].toUpperCase()}${item.split("").splice(1).join("")}`
			)
			.join("");

		return formatedLine;
	});

	const maxLength = formatedLines.reduce(
		(max, line) => (line.length > max ? line.length : max),
		0
	);

	formatedLines.forEach((line, index) => {
		let suffix = "";
		for (let i = line.length; i < maxLength + 1; i++) {
			suffix += " ";
		}
		for (let i = 0; i < index; i++) {
			suffix += "✅";
		}

		console.log(line + suffix);
	});
};

format(textData);

/* 
underscoreCase   ✅
firstName        ✅✅
someVariable     ✅✅✅
calculateAge     ✅✅✅✅
delayedDeparture ✅✅✅✅✅ */
