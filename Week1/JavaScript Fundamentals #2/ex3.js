/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter) */

/* 1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith) */
const Mark = {
	full_name: "Mark Miller",
	mass: 78,
	height: 169,
};

const John = {
	full_name: "John Smith",
	mass: 92,
	height: 195,
};

/* 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
  method on both objects). Store the BMI value to a property, and also return it
  from the method */
const calcBMI = (personInfo) => {
	return personInfo.mass / personInfo.height ** 2;
};

const markBMI = calcBMI(Mark);
const johnBMI = calcBMI(John);
console.log(
	`John's BMI (${johnBMI}) is ${
		johnBMI > markBMI ? "higher" : johnBMI < markBMI ? "lower" : "equal"
	} Mark (${markBMI})!`
);
