import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our', 'my', 'your', 'his', 'her', 'its', 'their'];
let adj = [
  'great',
  'big',
  'small',
  'tiny',
  'huge',
  'fantastic',
  'amazing',
  'incredible',
];
let noun = [
  'jogger',
  'racoon',
  'developer',
  'designer',
  'manager',
  'teacher',
  'student',
  'artist',
];
let extensions = [
  '.com',
  '.net',
  '.org',
  '.io',
  '.tech',
  '.dev',
  '.app',
  '.site',
];
for (let index = 0; index < pronoun.length; index++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        console.log(pronoun[index] + adj[j] + noun[k] + extensions[l]);
      }
    }
  }
}
}
