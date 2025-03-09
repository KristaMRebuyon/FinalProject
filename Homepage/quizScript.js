var questions = [
    {
        question: "What is the main problem with single-use sachets in relation to SDG 12?",
        choices: ["They are easy to use and convenient", "They promote sustainable packaging solutions", "They create excessive waste and pollution", "They decompose quickly and enrich the soil"],
        answer: "They create excessive waste and pollution"
    },
    {
        question: "How do single-use sachets contribute to climate change?",
        choices: ["They help absorb carbon dioxide from the atmosphere", "Their production and disposal release greenhouse gases", "They improve air quality by reducing waste", "They have no impact on climate change"],
        answer: "Their production and disposal release greenhouse gases"
    },
    {
        question: "Why are single-use sachets harmful to wildlife?",
        choices: ["Animals mistake them for food, causing harm or death", "They provide shelter for small animals", "They help enrich the soil when disposed of properly", "They break down quickly into safe organic materials"],
        answer: "Animals mistake them for food, causing harm or death"
    },
    {
        question: "What is a sustainable alternative to single-use plastic sachets?",
        choices: ["Using refillable containers", "Burning sachets to get rid of them", "Throwing sachets in the ocean", "Buying more sachets to reuse them"],
        answer: "Using refillable containers"
    },
    {
        question: "What can individuals do to help reduce the impact of single-use sachets?",
        choices: ["Continue using sachets without concern", "Spread awareness and support sustainable packaging", "Ignore the issue and let companies handle it", "Dump used sachets in open spaces"],
        answer: "Spread awareness and support sustainable packaging"
    }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");
    questionElement.innerHTML = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = questions[currentQuestion].choices[i];
        button.classList.add("choice-btn");
        button.onclick = function () {
            checkAnswer(this);
        };
        choicesElement.appendChild(button);
    }

    document.getElementById("prev").style.display = currentQuestion === 0 ? "none" : "inline-block";
    document.getElementById("next").style.display = currentQuestion < questions.length - 1 ? "inline-block" : "none";
    document.getElementById("submit").style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
}

function checkAnswer(selectedButton) {
    var selectedChoice = selectedButton.innerHTML;
    var correctAnswer = questions[currentQuestion].answer;

    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.classList.remove("correct", "incorrect");
    });

    if (selectedChoice === correctAnswer) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    document.getElementById("next").disabled = false;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showSubmit();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function showSubmit() {
    document.getElementById("question").innerHTML = "Ready to submit your answers?";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("prev").style.display = "inline-block";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("next").style.display = "none";
}

function submitQuiz() {
    document.getElementById("question").innerHTML = "Quiz Completed!";
    document.getElementById("choices").innerHTML = "You scored " + score + " out of " + questions.length + "!";
    document.getElementById("prev").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "none";
}

window.onload = displayQuestion;
