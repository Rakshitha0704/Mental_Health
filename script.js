function scrollToChat() {
  document.getElementById("chat").scrollIntoView({ behavior: "smooth" });
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  // Display user message
  const userDiv = document.createElement("div");
  userDiv.className = "user-message";
  userDiv.textContent = userMessage;
  chatbox.appendChild(userDiv);

  userInput.value = "";

  // Bot reply (basic AI simulation)
  const botDiv = document.createElement("div");
  botDiv.className = "bot-message";

  const responses = [
    "Take a deep breath — everything will be okay 💚",
    "You are doing your best, and that’s enough 🌼",
    "Remember: asking for help is a sign of strength 🤍",
    "Let’s pause for a moment. How are you feeling right now?",
    "You are stronger than you think 💪",
  ];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  botDiv.textContent = randomResponse;

  setTimeout(() => {
    chatbox.appendChild(botDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 800);
}
