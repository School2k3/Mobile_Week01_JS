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