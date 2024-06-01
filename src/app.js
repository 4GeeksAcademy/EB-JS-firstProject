/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log("Hello Rigo from the console!");
const whos = ["my boss", "brother", "my dog"];
const whats = ["lost", "eat", "block"];
const avoids = ["my check", "my shoe", "computer"];
const whens = ["yesterday", "today", "last week"];

const who = randomItem(whos);
const what = randomItem(whats);
const avoid = randomItem(avoids);
const when = randomItem(whens);

const randomExcuse = `${who} ${what} ${avoid} ${when}`;
document.querySelector("div").innerText = randomExcuse;
