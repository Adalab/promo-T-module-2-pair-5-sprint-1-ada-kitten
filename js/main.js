'use strict'
const list = document.querySelector(".js-list");
const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio'.toUpperCase();
const kittenDescOne =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceOne = 'Siamés';

const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona'.toUpperCase();
const kittenDescTwo =
  ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRaceTwo = 'Sphynx';


const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo'.toUpperCase();
const kittenDescThree =
  ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRaceThree = 'Maine Coon';

const elementOne = `
<li class="card one">
    <article>
        <img class="card_img" src= ${kittenImageOne} alt="siames-cat"/>
        <h3 class="card_title"> ${kittenNameOne}</h3>
        <h4 class="card_race"> ${kittenRaceOne}</h4>
        <p class="card_description"> ${kittenDescOne}</p>
    </article>
</li>`;
const elementTwo = `
<li class="card two"><img class="card_img" src=${kittenImageTwo} alt="sphynx-cat"/>
    <h3 class="card_title">${kittenNameTwo}</h3>
    <h4 class="card_race">${kittenRaceTwo}</h4>
    <p class="card_description">${kittenDescTwo}</p>
</li>`;
const elementThree =`
<li class="card three"><img class="card_img" src="${kittenImageThree}" alt="maine-coon-cat"/>
    <h3 class="card_title">${kittenNameThree}</h3>
    <h4 class="card_race">${kittenRaceThree}</h4>
    <p class="card_description">${kittenDescThree}</p>
</li>`;
list.innerHTML = elementOne + elementTwo + elementThree;

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;


if( kittenDescOne.includes(descrSearchText) ) {
    list.innerHTML += elementOne
}
    
if( kittenDescTwo.includes(descrSearchText) ) {
        list.innerHTML += elementTwo
}
    
if( kittenDescThree.includes(descrSearchText) ) {
        list.innerHTML += elementThree
}

const input_search_race = document.querySelector('.js_in_search_race');
const raceSearchText = input_search_race.value;
    
if( kittenRaceOne.includes(raceSearchText) ) {
    list.innerHTML += elementOne
}
        
if( kittenRaceTwo.includes(raceSearchText) ) {
    list.innerHTML += elementTwo
}
        
if( kittenRaceThree.includes(raceSearchText) ) {
        list.innerHTML += elementThree
}   else {
    list.innerHTML = `Uy que despiste, no sabemos su raza`
} 

const spanAdd = document.querySelector('.new');
spanAdd.addEventListener('click', (event) => {
    const form =document.querySelector('.new-form');
    form.classList.toggle('collapsed');
});
const buttonCancel = document.querySelector('.js-btn-cancel');
buttonCancel.addEventListener('click', (event) => {
    const form =document.querySelector('.new-form');
    form.classList.add('collapsed');
});

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const button_add = document.querySelector(".js-btn-add");
button_add.addEventListener('click', (event) => {
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;  
    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo.';
    }
});