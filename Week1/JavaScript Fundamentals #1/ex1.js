/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

1. Store Mark's and John's mass and height in variables */
let mark = {
	mass: 95,
	height: 1.88,
};

let john = {
	mass: 85,
	height: 1.76,
};

/* 2. Calculate both their BMIs using the formula (you can even implement both
  versions) */
const calculatedMarkBMI = (mass, height) => mass / height ** 2;

/* 3. Create a Boolean variable 'markHigherBMI' containing information about */
const markBMI = calculatedMarkBMI(mark.mass, mark.height);
const johnBMI = calculatedMarkBMI(john.mass, john.height);

const isMarkHigherBMI = markBMI > johnBMI;

console.log(`Mark's BMI is ${markBMI}`);
console.log(`John's BMI is ${johnBMI}`);

console.log(`Mark's BMI higher than John's is ${isMarkHigherBMI}`);
