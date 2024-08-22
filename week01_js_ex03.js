// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
var arrDolphins = [96, 108, 89]
var arrKoalas = [88, 91, 110]
    // 1. Calculate the average score for each team, using the test data below
var sumDolphins = 0
var sumKoalas = 0
for (const a of arrDolphins) {
    sumDolphins += a;
}
for (const a of arrKoalas) {
    sumKoalas += a;
}
const avgDolphins = sumDolphins / arrDolphins.length;
console.log(avgDolphins)
const avgKoalas = sumKoalas / arrKoalas.length;
console.log(avgKoalas)
    // 2. Compare the team's average scores to determine the winner of the competition,
    // and print it to the console. Don't forget that there can be a draw, so test for that
    // as well (draw means they have the same average score)
if (avgDolphins > avgKoalas)
    console.log("Dolphins Team is the winner of the competition")
else if (avgDolphins < avgKoalas)
    console.log("Koalas Team is the winner of the competition")
else
    console.log("Both of teams have the same average score")
    // 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    // team only wins if it has a higher score than the other team, and the same time a
    // score of at least 100 points. Hint: Use a logical operator to test for minimum
    // score, as well as multiple else-if blocks
    // Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
var arrDolphins2 = [97, 112, 101]
var arrKoalas2 = [109, 95, 123]
var sumDolphins2 = 0
var sumKoalas2 = 0
for (const a of arrDolphins2) {
    sumDolphins2 += a;
}
for (const a of arrKoalas2) {
    sumKoalas2 += a;
}
const avgDolphins2 = sumDolphins2 / arrDolphins2.length;
const avgKoalas2 = sumKoalas2 / arrKoalas2.length;
if (avgDolphins2 > avgKoalas2 && avgDolphins2 >= 100)
    console.log("Dolphins Team is the winner of the competition")
else if (avgDolphins2 < avgKoalas2 && avgKoalas2 >= 100)
    console.log("Koalas Team is the winner of the competition")
else
    console.log("Both of teams have the same average score")