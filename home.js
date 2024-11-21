// JavaScript Code to Check Answers
document.getElementById("submitBtn").addEventListener("click", function () {
    const form = document.querySelector(".quiz-container");
    const questions = ["q1", "q2", "q3", "q4"];
    let allCorrect = true;

    // Check each question
    questions.forEach((q) => {
        const selectedOption = form.querySelector(`input[name="${q}"]:checked`);
        if (!selectedOption || selectedOption.value !== "correct") {
            allCorrect = false;
        }
    });

    // Display the result
    const result = document.getElementById("result");
    if (allCorrect) {
        result.style.color = "green";
        result.textContent = "Congratulations! All answers are correct!";
    } else {
        result.style.color = "red";
        result.textContent = "Oops! Some answers are incorrect. Please try again.";
    }
});
