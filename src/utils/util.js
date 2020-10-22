export function makeEmptyArray(original) {
  let copy = [];
  for (let index = 0; index < original.length; index++) {
    copy.push("");
  }
  return copy;
}

export function getQuestionsFromLocalStorage() {
  let keyExist = localStorage.getItem("kidzspell:questions");
  let resultArray = [];

  if (keyExist) {
    resultArray = JSON.parse(localStorage.getItem("kidzspell:questions"));
  }

  return resultArray;
}

export function addQuestionToLocalStorage(question) {
  question = question.toUpperCase();
  let existingQuestions = getQuestionsFromLocalStorage();
  existingQuestions.push(question);
  const questionsToSave = JSON.stringify(existingQuestions);

  localStorage.setItem("kidzspell:questions", questionsToSave);
}

export function cleanLocalStorage() {
  localStorage.removeItem("kidzspell:questions");
}

export function removeQuestionFromLocalStorage(index) {
  let questions = getQuestionsFromLocalStorage();
  questions.splice(index, 1);
  questions = JSON.stringify(questions);
  localStorage.setItem("kidzspell:questions", questions);
}
