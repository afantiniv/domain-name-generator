/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
let puntos = [".com", ".net", ".cr", ".es"];

function generar() {
  let dominio = [];
  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; z < noun.length; z++) {
        for (let w = 0; w < puntos.length; w++) {
          console.log(pronoun[x] + adj[y] + noun[z]);
          dominio.push(pronoun[x] + adj[y] + noun[z] + puntos[w] + "<br>");
        }
      }
    }
  }
  document.getElementById("texto").innerHTML = dominio;
}

document.getElementById("boton").onclick = function() {
  generar();
};

document.getElementById("limpiar").onclick = function() {
  let ele = document.getElementById("texto");
  ele.childElementCount;
  while (ele.lastChild) {
    ele.lastChild.remove();
  }
  ele.childElementCount;
};
