import { encodeBase64, decodeBase64 } from "./base64Util";
export function makeEmptyArray(original) {
  let copy = [];
  for (let index = 0; index < original.length; index++) {
    copy.push("");
  }
  return copy;
}

export function convertQuestionsToShareString() {
  const questions = getQuestionsFromLocalStorage();
  const jsonQuestions = JSON.stringify(questions);
  const base64String = encodeBase64(jsonQuestions);
  let result = '';
  if(location.host.indexOf('localhost') > -1) {
    console.log('is localjost');
    result = `http://${location.host}?q=${base64String}`;
  } else {
    result = `${location.host}?q=${base64String}`;
  }
  return result;
}

export function convertStringIntoQuiz(input) {
  try {
    const decodedString = decodeBase64(input);
    const questions = JSON.parse(decodedString);
    return questions;
  } catch (error) {
    return false;
  }
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
  question = question.toUpperCase();
  let existingQuestions = getQuestionsFromLocalStorage();
  const item = { question, answer };
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

export function readQuizFromQueryString() {
  var urlParams = new URLSearchParams(window.location.search);
  const queryString = urlParams.get("q");
  const quiz = convertStringIntoQuiz(queryString);
  if(quiz) {
    quiz.forEach((row) => {
      addQuestionToLocalStorage(row.question, row.answer);
    });
  }
}

export function setFocus(id) {
  setTimeout(() => {
    const element = document.getElementById(id);
    element.focus();
  }, 10);
}

export function copyToClipboard(elementId) {
  var area = document.querySelector('#' + elementId);
  area.focus();
  area.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}
 