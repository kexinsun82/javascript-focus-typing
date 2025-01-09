window.onload = function () {

  // Back to the index home page
  var homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  // Function to navigate back to Practice Page
  // function tryAgain() {
  //   window.location.href = "practice.html"; 
  // }
  var tryAgainButton = document.getElementById("try-again");
  tryAgainButton.addEventListener("click", function () {
    window.location.href = "practice.html";
  });

  // Retrieve and display results from LocalStorage
  const accuracy = localStorage.getItem("accuracy") || "N/A";
  const time = localStorage.getItem("time") || "N/A";

  document.getElementById("accuracy-display").textContent = accuracy + "%";
  document.getElementById("time-display").textContent = time;

  // Clear results from LocalStorage
  localStorage.removeItem("accuracy");
  localStorage.removeItem("time");

};