/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiama
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const output = document.querySelector('#output');
    const input = +document.querySelector('#search').value;
    output.style.cssText = 'text-align: center; font-size: 1.5em; color: blueviolet; list-style: none';
    output.innerHTML = `<li>Pounds: ${input * 2.2046} lb</li><li>Grams: ${input / 0.0010000} g</li><li>Ounces: ${input * 35.274} oz</li>`;
});