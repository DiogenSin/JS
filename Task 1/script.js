/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault()

    let ivestis = e.target.elements.search.value
    let svarai = ivestis * 2.2046
    let gramai = ivestis * 0.001
    let uncijos = ivestis * 35.274

    document.getElementById('output').innerHTML += `

    <p>Svarai (lb): <span>${svarai}</span></p>
    <p>Gramai (g): <span>${gramai}</span></p>
    <p>Uncijos (oz): <span>${uncijos}</span></p>
    <hr>
    `
    

    
    
})