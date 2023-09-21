
const divElement = document.getElementById("ma_div");


const h1Element = document.createElement("h1");
h1Element.textContent = "Titre h1";

const h2Element = document.createElement("h2");
h2Element.textContent = "Titre h2";

divElement.appendChild(h1Element);
divElement.appendChild(h2Element);

console.log("innerHTML de la div : " + divElement.innerHTML);
console.log("outerHTML de la div : " + divElement.outerHTML);
console.log( "textcontent"+h1Element.textContent )
