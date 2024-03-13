const options = [
    'It is certain',
    'Without a doubt',
    'Yes, definitely',
    'Most likely',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Dont count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];
const magicBall = document.getElementById("mb-container")
const respondant = document.getElementById("respondant")

magicBall.addEventListener("click", function () {
  const index = Math.floor(Math.random() * 15);
  const answer = options[index];
  magicBall.className = "outer__magicball animate";
  setTimeout(function () {
    respondant.textContent = answer;
    respondant.style.fontSize = "1.1rem";
    magicBall.className = "outer__magicball";
  }, 3000);
});
