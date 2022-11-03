function getQuestion() {
  let question = document.querySelectorAll(".question-content");
  question = [...question];
  question = question.splice(1, question.length);
  return question;
}

function getAll() {
  const questions = getQuestion();
  let data = {};
  for (let index = 0; index < questions.length; index++) {
    const element = questions[index];
    data[index] = {
      q: element.querySelector("p").textContent,
      answer: element.querySelector(".selected-answer")?.querySelector("p")
        .textContent,
    };
  }
  return data;
}

function transformToString(myObject) {
  return JSON.stringify(myObject);
}

function transformToObject(myString) {
  return JSON.parse(myString);
}
