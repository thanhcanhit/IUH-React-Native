/* JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins! */

const dolphins = {
	data1: [44, 23, 71],
	data2: [85, 54, 41],
};
const koalas = {
	data1: [64, 54, 49],
	data2: [23, 34, 27],
};

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
const avgDolphins = calcAverage(
	dolphins.data2[0],
	dolphins.data2[1],
	dolphins.data2[2]
);
const avgKoalas = calcAverage(
	koalas.data2[0],
	koalas.data2[1],
	koalas.data2[2]
);

/* Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above. */
const checkWinner = (avgDolphin, avgKoala) => {
	if (avgDolphin > avgKoala * 2) {
		console.log("Dolphin win");
	} else if (avgKoala > avgDolphin * 2) {
		console.log("Koala win");
	}
};

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDolphins, avgKoalas)
