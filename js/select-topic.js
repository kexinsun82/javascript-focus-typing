window.onload = function () {
  // Get DOM elements
  var forInBtn = document.getElementById("forInBtn");
  var ifElseBtn = document.getElementById("ifElseBtn");
  var bmiBtn = document.getElementById("bmiBtn");
  var previewContent = document.getElementById("preview-content");
  var previewBox = document.getElementById("preview-box");
  var startButton = document.getElementById("start-button");

  // Code Preview for each topic
  var codePreview = {
    "for-in": `
    const person = {
      fname:"John", 
      lname:"Doe", 
      age:25
    }; 
    let txt = "";
    for (let x in person) {
      txt += person[x] + " ";
    }
    document.getElementById("demo").innerHTML = txt;`,
    "if-else": `
    const time = new Date().getHours();
    let greeting;
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("demo").innerHTML = greeting;`,
    "bmi": `
      const form = document.querySelector('form');

      form.addEventListener('submit', function(e){
        e.preventDefault();
        
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');
        
        if ((height === '') || (height < 0) || (isNaN(height))) {
            //NaN !== NaN
            results.innerHTML = "Please provide a valid height";
        } else if (weight === '' || weight < 0 || isNaN(weight)) {
            results.innerHTML = "Please provide a valid weight";
        } else {
            // calculate BMI
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            // display the results
            results.innerHTML = \`<span>\${bmi}</span>\`;  
        }
      });
    `
  };

  // Current selected topic
  var selectedTopic = null;

  // Click the button to update the preview and selected topic
  forInBtn.addEventListener("click", () => {
    selectedTopic = "for-in";
    previewContent.textContent = codePreview["for-in"];
    enableStartButton();
  });

  ifElseBtn.addEventListener("click", () => {
    selectedTopic = "if-else";
    previewContent.textContent = codePreview["if-else"];
    enableStartButton();
  });

  bmiBtn.addEventListener("click", () => {
    selectedTopic = "bmi";
    previewContent.textContent = codePreview["bmi"];
    enableStartButton();
  });

  // Enable the Start button
  function enableStartButton() {
    startButton.classList.add("enabled");
    startButton.removeAttribute("disabled");
  }

  // Active button setting
  function setActiveButton(activeButton) {
    [forInBtn, ifElseBtn, bmiBtn].forEach(function (btn) {
      btn.classList.remove("active");
    });
    activeButton.classList.add("active");
  }

  // Enable the clicked topic button
  forInBtn.addEventListener("click", () => {
    setActiveButton(forInBtn); 
    selectedTopic = "for-in";
    previewContent.textContent = codePreview["for-in"];
    previewBox.style.backgroundColor = "#AEB6FF";
    enableStartButton();
  });

  ifElseBtn.addEventListener("click", () => {
    setActiveButton(ifElseBtn); 
    selectedTopic = "if-else";
    previewContent.textContent = codePreview["if-else"];
    previewBox.style.backgroundColor = "#AEB6FF";
    enableStartButton();
  });

  bmiBtn.addEventListener("click", () => {
    setActiveButton(bmiBtn); 
    selectedTopic = "bmi";
    previewContent.textContent = codePreview["bmi"];
    previewBox.style.backgroundColor = "#AEB6FF";
    enableStartButton();
  });


  // Click the "Start" button to jump to practice page
  startButton.addEventListener("click", () => {
    if (selectedTopic) {
      // Store the selected topic and code in localStorage
      localStorage.setItem("topic", selectedTopic);
      localStorage.setItem("content", codePreview[selectedTopic]);

      // Navigate to the practice page
      window.location.href = "practice.html";
    }
  });
};