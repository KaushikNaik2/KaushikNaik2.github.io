function showAlert() {
  alert("Happy Birthday! My love");
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", function() {
  showAlert();
});
const elements = document.querySelectorAll(".fade-in");

elements.forEach(element => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add("visible");
        observer.unobserve(element);
      }
    });
  });
  observer.observe(element);
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)"; // Slightly scale up on hover
  });
  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)"; // Reset scale on mouseout
  });
});
  const form = document.getElementById("love-quiz");
const results = document.getElementById("results");
const scoreText = document.getElementById("score");
const messageText = document.getElementById("message");

const correctAnswers = ["a", "b", "a", "c","d","b","b","a","d","d"]; // Replace with your actual correct answers (10 values)

function calculateScore() {
  let score = 0;

  for (let i = 1; i <= 10; i++) {
    const userAnswer = document.querySelector(`input[name=question${i}]:checked`);

    if (userAnswer && userAnswer.value === correctAnswers[i - 1]) {
      score++;

      // Optional: Display feedback next to the question (requires HTML structure for feedback)
      // ... code to display "Correct!" based on the answer
    } else {
      // Optional: Display feedback next to the question (requires HTML structure for feedback)
      // ... code to display "Incorrect." based on the answer
    }
  }

  return score;
}

function displayResults(score) {
  scoreText.textContent = `You scored ${score} out of 10!`;

  if (score === 10) {
    messageText.textContent = "Wow! You know me incredibly well.";
  } else if (score >= 7) {
    messageText.textContent = "You're doing great! Keep surprising me with your knowledge.";
  } else if (score >= 4) {
    messageText.textContent = "Not bad! Maybe a few more date nights can improve your score.";
  } else {
    messageText.textContent = "Uh oh, some studying is required! But hey, that's an excuse for more quality time together.";
  }

  results.style.display = "block";
}

form.addEventListener("submit", function(event) {
  event.preventDefault(); // this line prevents the default form submission
  
    console.log("Submit button clicked!"); // add this line to check if the event listener is being triggered
  const score = calculateScore();
  displayResults(score);
});


