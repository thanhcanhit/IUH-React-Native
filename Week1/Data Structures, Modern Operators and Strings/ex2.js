/* Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
 */
const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnabry",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		draw: 3.25,
		team2: 6.5,
	},
};

/* 1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski") */
game.scored.forEach((item) => console.log(item));

/*  
Lewandowski
Gnabry
Lewandowski
Hummels 
*/

/* 2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember) */
const odds = [game.odds.team1, game.odds.draw, game.odds.team2];
const avgOdds =
	odds.reduce((result, item) => (result += item), 0) / odds.length;
console.log(avgOdds);
// 3.6933333333333334

/* 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5 */

console.log(`
Odd of victory ${game.team1}: ${game.odds.team1}
Odd of draw: ${game.odds.draw}
Odd of victory ${game.team2}: ${game.odds.team2}
`);

// Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
const scorers = game.scored.reduce((result, player) => {
	if (typeof result[player] === "undefined") result[player] = 1;
	else result[player] += 1;

  return result;
}, {});

console.log(scorers);
// { Lewandowski: 2, Gnabry: 1, Hummels: 1 }
