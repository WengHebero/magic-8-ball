const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

const magicBall = document.getElementById('magic-ball');
const answerDiv = document.getElementById('answer');
const shakeButton = document.getElementById('shake-button');

shakeButton.addEventListener('click', () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answerDiv.textContent = randomAnswer;
    magicBall.classList.add('shake');

    setTimeout(() => {
        magicBall.classList.remove('shake');
    }, 1000);
});
