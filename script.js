// Sample question sets for multiple languages
const questions = {
  python: [
    { question: "What is the correct file extension for Python files?", options: [".pyth", ".pt", ".py", ".pyt"], answer: ".py" },
    { question: "Which keyword is used to create a function in Python?", options: ["func", "define", "def", "function"], answer: "def" },
    { question: "Which function is used to read user input in Python?", options: ["read()", "input()", "scan()", "get()"], answer: "input()" },
    { question: "What data type is used to store a true or false value?", options: ["boolean", "int", "string", "list"], answer: "boolean" },
    { question: "How do you write a comment in Python?", options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"], answer: "# comment" },
    { question: "Which of these is used to create a list in Python?", options: ["()", "{}", "[]", "<>"], answer: "[]" },
    { question: "Which of the following is an immutable data type?", options: ["list", "tuple", "dict", "set"], answer: "tuple" },
    { question: "What is the output of 3 ** 2?", options: ["6", "9", "33", "8"], answer: "9" },
    { question: "Which function is used to find the length of a list?", options: ["size()", "length()", "len()", "count()"], answer: "len()" },
    { question: "How do you create a dictionary in Python?", options: ["()", "{}", "[]", "<>"], answer: "{}" },
    { question: "Which Python module is used for regular expressions?", options: ["regex", "re", "reg", "regexlib"], answer: "re" },
    { question: "What does the 'break' statement do in a loop?", options: ["Stops the loop", "Continues the loop", "Pauses the loop", "Exits the program"], answer: "Stops the loop" },
    { question: "What is the result of 10 // 3 in Python?", options: ["3.33", "3", "3.0", "Error"], answer: "3" },
    { question: "Which of the following is the correct way to import a module?", options: ["import math", "require math", "include math", "load math"], answer: "import math" },
    { question: "What does the 'return' statement do?", options: ["Exits the program", "Returns a value from a function", "Prints the output", "Loops the function"], answer: "Returns a value from a function" },
    { question: "Which of these methods is used to append an item to a list?", options: ["add()", "append()", "insert()", "put()"], answer: "append()" },
    { question: "What is the default value of a Python function argument?", options: ["None", "0", "True", "False"], answer: "None" },
    { question: "What keyword is used to handle exceptions?", options: ["except", "catch", "throw", "error"], answer: "except" },
    { question: "Which of the following is used to create a set?", options: ["{}", "()", "[]", "<>"], answer: "{}" },
    { question: "How do you concatenate two strings in Python?", options: ["+", "-", "*", "&"], answer: "+" },
    { question: "Which operator is used to compare values in Python?", options: ["=", "==", ":", "!=", "==="], answer: "==" }
  ],

  java: [
    { question: "What is the entry point of a Java program?", options: ["start()", "main()", "run()", "execute()"], answer: "main()" },
    { question: "Which keyword is used to inherit a class in Java?", options: ["implement", "extends", "inherits", "instanceof"], answer: "extends" },
    { question: "Which of these is a primitive data type in Java?", options: ["String", "Array", "int", "List"], answer: "int" },
    { question: "What is the default value of an instance variable?", options: ["0", "null", "undefined", "false"], answer: "null" },
    { question: "Which method is used to start a thread in Java?", options: ["startThread()", "init()", "run()", "start()"], answer: "start()" },
    { question: "What is used to handle exceptions in Java?", options: ["catch", "throw", "try-catch", "error"], answer: "try-catch" },
    { question: "What keyword is used to create a constant in Java?", options: ["final", "static", "const", "immutable"], answer: "final" },
    { question: "Which of these collections allows duplicates?", options: ["Set", "List", "Map", "Queue"], answer: "List" },
    { question: "What is the output of the following code: System.out.println(5 + 3 + '5');", options: ["8", "53", "58", "Error"], answer: "58" },
    { question: "Which operator is used for string concatenation in Java?", options: ["&", "+", "*", "%"], answer: "+" },
    { question: "Which method is used to compare two strings in Java?", options: ["==", "equals()", "compare()", "match()"], answer: "equals()" },
    { question: "What does JVM stand for?", options: ["Java Variable Machine", "Java Virtual Machine", "Java Verifiable Machine", "Java Verified Model"], answer: "Java Virtual Machine" },
    { question: "What is the default value of a boolean variable?", options: ["true", "false", "null", "0"], answer: "false" },
    { question: "Which of the following is used to create an array in Java?", options: ["[]", "{}", "<>", "()"], answer: "[]" },
    { question: "Which keyword is used to declare an abstract class?", options: ["abstract", "static", "interface", "class"], answer: "abstract" },
    { question: "What is the size of int in Java?", options: ["8 bytes", "16 bytes", "32 bytes", "64 bytes"], answer: "32 bytes" },
    { question: "What does the 'super' keyword refer to in Java?", options: ["Parent class", "Current object", "Child class", "Method name"], answer: "Parent class" },
    { question: "Which method is used to get the length of an array?", options: ["size()", "length()", "count()", "length"], answer: "length" },
    { question: "Which of the following is a method of the String class?", options: ["split()", "substring()", "charAt()", "All of the above"], answer: "All of the above" },
    { question: "Which of the following is not an access modifier in Java?", options: ["private", "public", "protected", "safe"], answer: "safe" }
  ],

  htmlcss: [
    { question: "Which tag is used to link CSS in HTML?", options: ["<css>", "<link>", "<script>", "<style>"], answer: "<link>" },
    { question: "HTML stands for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Markup Language", "None"], answer: "Hyper Text Markup Language" },
    { question: "Which tag is used to display images in HTML?", options: ["<image>", "<img>", "<pic>", "<imageSource>"], answer: "<img>" },
    { question: "What attribute is used to provide an alternative text for an image?", options: ["alt", "title", "src", "text"], answer: "alt" },
    { question: "Which CSS property is used to change the text color?", options: ["color", "text-color", "font-color", "background-color"], answer: "color" },
    { question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<url>", "<href>"], answer: "<a>" },
    { question: "Which CSS property is used to set the background color?", options: ["background", "color", "bg-color", "background-color"], answer: "background-color" },
    { question: "Which tag is used to define an unordered list?", options: ["<ul>", "<ol>", "<list>", "<li>"], answer: "<ul>" },
    { question: "Which HTML element is used to define the header of a page?", options: ["<header>", "<head>", "<footer>", "<top>"], answer: "<header>" },
    { question: "Which attribute is used to add a hyperlink in the <a> tag?", options: ["href", "src", "link", "url"], answer: "href" },
    { question: "Which property is used to change the font size in CSS?", options: ["font-size", "text-size", "font-style", "text-font"], answer: "font-size" },
    { question: "Which tag is used to create a dropdown list?", options: ["<input>", "<select>", "<list>", "<dropdown>"], answer: "<select>" },
    { question: "Which tag is used to create a table?", options: ["<table>", "<td>", "<tr>", "<th>"], answer: "<table>" },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<hr>"], answer: "<br>" },
    { question: "Which HTML element is used to specify a paragraph?", options: ["<p>", "<div>", "<text>", "<section>"], answer: "<p>" },
    { question: "What does the <meta> tag provide in an HTML document?", options: ["Document title", "Metadata about the document", "Navigation links", "Script links"], answer: "Metadata about the document" },
    { question: "Which tag is used to define a section in HTML?", options: ["<section>", "<div>", "<article>", "<header>"], answer: "<section>" },
    { question: "Which of these tags is used for making text bold?", options: ["<b>", "<strong>", "<em>", "<i>"], answer: "<strong>" },
    { question: "Which tag is used to create a checkbox in HTML?", options: ["<input type='checkbox'>", "<checkbox>", "<check>", "<input type='button'>"], answer: "<input type='checkbox'>" }
  ],

  javascript: [
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "<!--", "#", "/* */"], answer: "//" },
    { question: "Which keyword declares a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
    { question: "What is the result of 5 + '5' in JavaScript?", options: ["55", "10", "Error", "55.0"], answer: "55" },
    { question: "Which method is used to add an element to the end of an array in JavaScript?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
    { question: "Which operator is used to compare both value and type in JavaScript?", options: ["==", "===", "!=", "!="], answer: "===" },
    { question: "Which function is used to parse a string to an integer in JavaScript?", options: ["parseInt()", "parseFloat()", "Number()", "String()"], answer: "parseInt()" },
    { question: "Which method is used to remove the last element of an array?", options: ["pop()", "shift()", "unshift()", "slice()"], answer: "pop()" },
    { question: "Which event is triggered when a user clicks on an element?", options: ["click", "mouseClick", "keydown", "keypress"], answer: "click" },
    { question: "What does JSON stand for?", options: ["JavaScript Online Notation", "JavaScript Object Notation", "Java Object Notation", "JavaScript Operable Notation"], answer: "JavaScript Object Notation" },
    { question: "What will this code log: console.log(typeof 4);", options: ["object", "number", "string", "undefined"], answer: "number" },
    { question: "How do you define a function in JavaScript?", options: ["function()", "def()", "func()", "fun()"], answer: "function()" },
    { question: "Which method is used to round a number to the nearest integer?", options: ["round()", "ceil()", "floor()", "parseInt()"], answer: "round()" },
    { question: "What is the result of 5 === '5' in JavaScript?", options: ["true", "false", "undefined", "Error"], answer: "false" },
    { question: "Which of the following is NOT a valid loop in JavaScript?", options: ["for", "while", "foreach", "repeat"], answer: "repeat" },
    { question: "Which of the following methods is used to sort an array in JavaScript?", options: ["sort()", "order()", "arrange()", "sequence()"], answer: "sort()" },
    { question: "Which method is used to convert a string to lowercase in JavaScript?", options: ["toLower()", "toLowerCase()", "lower()", "lowercase()"], answer: "toLowerCase()" },
    { question: "How do you declare a constant in JavaScript?", options: ["const", "var", "let", "final"], answer: "const" },
    { question: "Which method is used to find the index of an element in an array?", options: ["indexOf()", "find()", "search()", "locate()"], answer: "indexOf()" },
    { question: "What does the 'this' keyword refer to in JavaScript?", options: ["Current object", "Window object", "Function object", "Parent object"], answer: "Current object" }
  ]
};

let currentQuestion = 0;
let currentLanguage = "python";
let score = 0;
let timeLeft = 30;
let timerInterval;

const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const timeoutSound = new Audio("timeout.mp3");

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('loaded');
  startGame();
});

function startGame() {
  currentLanguage = document.getElementById("language").value;
  currentQuestion = 0;
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;
  loadQuestion();
}

function loadQuestion() {
  const questionData = questions[currentLanguage][currentQuestion];

  if (!questionData) {
    endGame();
    return;
  }

  clearInterval(timerInterval);
  timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;

  document.getElementById("question-text").textContent = questionData.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  questionData.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => {
      document.querySelectorAll("#options li").forEach(li => li.classList.remove("selected"));
      li.classList.add("selected");
    };
    optionsList.appendChild(li);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 10) {
      document.querySelector('.timer').classList.add('warning');
    } else {
      document.querySelector('.timer').classList.remove('warning');
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeoutSound.play();
      handleIncorrectAnswer();
    }
  }, 1000);
}

document.getElementById("submit-btn").addEventListener("click", () => {
  const selected = document.querySelector("#options li.selected");
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  const selectedAnswer = selected.textContent;
  const correctAnswer = questions[currentLanguage][currentQuestion].answer;

  if (selectedAnswer === correctAnswer) {
    score += 10;
    correctSound.play();
  } else {
    wrongSound.play();
    handleIncorrectAnswer(false); // Wrong answer
    return;
  }

  document.getElementById("score").textContent = score;
  currentQuestion++;
  loadQuestion();
});

function handleIncorrectAnswer(playSound = true) {
  score -= 5;
  document.getElementById("score").textContent = score;
  if (playSound) wrongSound.play();

  currentQuestion++;
  loadQuestion();
}

function endGame() {
  clearInterval(timerInterval);
  document.getElementById("final-score").textContent = score;
  document.getElementById("result-section").classList.remove("hidden");
  document.getElementById("question-section").classList.add("hidden");
}

function restartGame() {
  document.getElementById("result-section").classList.add("hidden");
  document.getElementById("question-section").classList.remove("hidden");
  startGame();
}

document.getElementById("language").addEventListener("change", restartGame);
