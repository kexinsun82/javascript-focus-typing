window.onload = function () {
  var typingContent = document.getElementById("typing-content");
  var typingInput = document.getElementById("typing-input");
  var accuracyDisplay = document.getElementById("accuracy");
  var timerDisplay = document.getElementById("timer");
  var errorMessage = document.getElementById("error-message");

  // Load LocalStorage Content
  var content = localStorage.getItem("content");
  // Check the content
  if (content) {
    typingContent.textContent = content;
  } else {
    typingContent.textContent = "Error: No content found!";
  }

  // Time & Accuracy setup
  var startTime = new Date();
  var totalErrors = 0; 
  var correctCharacters = 0; 
  var totalTyped = 0; 

  // Timer function
  function screenTime(startTime) {
    var elapsed = Math.floor((new Date() - startTime) / 1000);
    var minutes = Math.floor(elapsed / 60);
    var seconds = elapsed % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  var timerInterval = setInterval(function () {
    timerDisplay.textContent = screenTime(startTime);
  }, 1000);

  // Keyup Event Listener
  typingInput.addEventListener("keyup", function () {
    // avoid space
    var inputText = typingInput.value.replace(/\s+/g, ' ').trim(); 
    var typingContentText = typingContent.textContent.replace(/\s+/g, ' ').trim();
    
    // Reset styling and error message
    errorMessage.style.display = "none";
    typingInput.style.border = "none";
    // Default correct color (purple)
    typingInput.style.color = "#AEB6FF"; 

    // Reset correct characters count for recalculation
    correctCharacters = 0;
    totalTyped = inputText.length;

    // Compare input with preview content
    for (var i = 0; i < totalTyped; i++) {
      if (inputText[i] === typingContentText[i]) {
        // Correctly typed character
        correctCharacters++; 
      } else {
        // Increment total errors for mismatched characters
        totalErrors++; 
      }
    }

    // If error exists, set red border and show error message
    if (inputText !== typingContentText.substring(0, totalTyped)) {
      typingInput.style.color = "red";
      typingInput.style.border = "6px solid red";
      errorMessage.style.display = "block";
    }

    // Calculate accuracy
    var accuracy = Math.round(
      (correctCharacters / (correctCharacters + totalErrors)) * 100
    );
    accuracyDisplay.textContent = `${accuracy}%`;

    // Check if the input matches the preview text
    if (inputText === typingContentText) {
      clearInterval(timerInterval);

      // Save results in LocalStorage
      var timeResult = screenTime(startTime);
      localStorage.setItem("time", timeResult);
      localStorage.setItem("accuracy", accuracy);
      window.location.href = "result.html";
    }
  });

  // Back to Select Topic page
  var backButton = document.getElementById("back-button");
  backButton.addEventListener("click", function () {
    window.location.href = "select-topic.html";
  });
};