// Check if the user is ready to play!
confirm("Are you ready to play? Please press 'ok'");
var age
age = prompt("What's your age?");
if (age < 13) {
    //do this code
    console.log("You are allowed to play, but I take no responsibility.");
}
else //"otherwise" 
{
console.log("Play on dude! You're good!");

//do this code
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer
userAnswer = prompt("Do you want to race Bieber on stage? yes/no");
if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
var feedback
feedback = prompt("Please rate this game 1 to 10, 10 being awesome!");
if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
}
else {
    console.log("I'll keep practicing coding and racing.");
}