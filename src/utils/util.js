export function makeEmptyArray(original) {
  let copy = [];
  for (let index = 0; index < original.length; index++) {
    copy.push("");
  }
  return copy;
}

export function getQuestionsFromLocalStorage() {
  let itemsInStorage = localStorage.getItem("kidzspell:questions");
  let resultArray = [];

  if (itemsInStorage) {
    resultArray = JSON.parse(itemsInStorage);
  }

  return resultArray;
}

export function addQuestionToLocalStorage(question, answer) {
  answer = answer.toUpperCase();
  let existingQuestions = getQuestionsFromLocalStorage();
  const item = {question, answer};
  existingQuestions.push(item);
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

export function setFocus(id) {
  setTimeout(() => {
    const element = document.getElementById(id);
    element.focus();
  }, 10);
}
