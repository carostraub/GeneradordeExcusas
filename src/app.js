/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function getRandomElement(array) {
    //aqui debo devolver de manera aleatoria cualquier valor dentro de la array//
    return array[Math.floor(Math.random() * array.length)];
  }
  let randomWho = getRandomElement(who);
  let randomAction = getRandomElement(action);
  let randomWhat = getRandomElement(what);
  let randomWhen = getRandomElement(when);

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  document.querySelector("#excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
