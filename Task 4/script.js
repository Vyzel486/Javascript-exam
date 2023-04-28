/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(response => response.json())
.then(cars => showCars(cars))
.catch(err => console.log(err));

function showCars(cars){
    const rezult = document.querySelector('#output');
    

    for(let i = 0; i < cars.length; i++){
        const div = document.createElement('div');
        const brand = document.createElement('h2');
        brand.textContent = cars[i].brand;
        const models = document.createElement('h4');
        models.textContent = cars[i].models;
        Object.assign(div.style, {
            width: '700px',
            margin: '20px auto',
            backgroundColor: 'lightgreen',
            borderRadius: '10px',
            padding: '15px',
            boxShadow: '5px 5px 15px grey',
        });
        div.append(brand, models);
        rezult.append(div);
    };
};