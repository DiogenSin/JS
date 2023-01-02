/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then (res => res.json())
    .then (data => {
        data.forEach(brand => {
            console.log(brand)

            let producer = brand.brand
            let producedModels = []
            brand.models.forEach(model => {
                producedModels.push(' ' + model)
            })

            document.getElementById('output').innerHTML += `
            <div class="producerCard">
                <h2>${producer}</h2>
                <div id="info">
                    <h3>Produced models:</h3>
                    <p>${producedModels}</p>
                </div>
            </div>
            `
        });
    })