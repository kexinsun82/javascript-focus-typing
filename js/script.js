window.onload = function () {
  var selectTopicButton = document.getElementById("select-topic-button");

  // Click the "Select Topic" button to jump to Select Topic page
  selectTopicButton.addEventListener("click", () => {
    window.location.href = "select-topic.html";
  });
  
};