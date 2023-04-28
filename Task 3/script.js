/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
2. Informacija, kuri pateikiama: "login" ir "avatar_url" (kaip nuotrauka) kortelėje
3. Žinutė - Press "Show Users" button to see users - turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';// <-jei neveikia, naudoti: 'users.json'.

fetch(ENDPOINT)
.then(response => response.json())
.then(users => showUsers(users))
.catch(err => console.log(err));

function showUsers(person){
    const btn = document.querySelector('#btn');
    const output = document.querySelector('#output');
    const p = document.querySelector('#message');

    for(let i = 0; i < person.length; i++){
        const img = document.createElement('img');
        img.src = person[i].avatar_url;
        Object.assign(img.style, {
            width: '300px',
            borderRadius: '10px', 
            margin: '10px',
        });
        const name = document.createElement('h1');
        name.textContent = person[i].login;
        name.style.color = 'red';
        const div = document.createElement('div');
        Object.assign(div.style, {
            width: '400px',
            margin: '20px auto',
            borderRadius: '15px',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: 'black',
        });
        div.append(name, img);
        btn.addEventListener('click', () => {
            p.remove();
            output.append(div);
        });
    };
};