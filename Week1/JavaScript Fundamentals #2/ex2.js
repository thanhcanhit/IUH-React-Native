/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%. */

/* 1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100 */
const calcTip = (bill) => {
	if (bill >= 50 && bill <= 300) return bill * 0.15;
	return bill * 0.2;
};

/* 2. And now let's use arrays! So create an array 'bills' containing the test data
below */
const bills = [125, 555, 44];

/* Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before */
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

total.forEach((value) => console.log(value));
