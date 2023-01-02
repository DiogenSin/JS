/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById('btn').addEventListener('click', e => {
    e.preventDefault()
    console.log(e)
    document.getElementById('message').classList.add('hide')

    fetch(ENDPOINT)
        .then (res => res.json())
        .then (data => {
            console.log(data)

            data.forEach(user => {
                console.log(user)
                let avatar = user.avatar_url
                let login = user.login
                document.getElementById('output').innerHTML += `
                <div class="userCard">
                <img src="${avatar}" alt="${login} avatar">
                <h3>Login: ${login}</h3>
                <div>            
                `
            });

        })
})