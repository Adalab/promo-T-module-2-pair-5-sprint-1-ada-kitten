'use strict'
const list = document.querySelector(".js-list");

//ejemplo de un objeto con la información del primer gatito
const kittenData_1 = {
    image: 'https://dev.adalab.es/gato-siames.webp',
    name: 'Anastacio',
    desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
    race: 'Siamés',
  };

  //ejemplo de un objeto con la información del primer gatito
const kittenData_2 = {
    image: 'https://dev.adalab.es/sphynx-gato.webp',
    name: 'Fiona',
    desc: ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
    
    race: 'Sphynx',
  };

  //ejemplo de un objeto con la información del primer gatito
const kittenData_3 = {
    image: 'https://dev.adalab.es/maine-coon-cat.webp',
    name: 'Cielo',
    desc: ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
    race: 'Maine Coon',
  };
/*
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
*/
function renderKitten(kittenData_1) {
    
  }
const elementOne = `
<li class="card one">
    <article>
        <img class="card_img" src= ${kittenData_1.image} alt="siames-cat"/>
        <h3 class="card_title"> ${kittenData_1.name}</h3>
        <h4 class="card_race"> ${kittenData_1.race}</h4>
        <p class="card_description"> ${kittenData_1.desc}</p>
    </article>
</li>`;
const elementTwo = `
<li class="card two"><img class="card_img" src=${kittenData_2.image} alt="sphynx-cat"/>
    <h3 class="card_title">${kittenData_2.name}</h3>
    <h4 class="card_race">${kittenData_2.race}</h4>
    <p class="card_description">${kittenData_2.desc}</p>
</li>`;
const elementThree =`
<li class="card three"><img class="card_img" src="${kittenData_3.image}" alt="maine-coon-cat"/>
    <h3 class="card_title">${kittenData_3.name}</h3>
    <h4 class="card_race">${kittenData_3.race}</h4>
    <p class="card_description">${kittenData_3.desc}</p>
</li>`;
list.innerHTML = elementOne + elementTwo + elementThree;



function filterKitten (event) { 
    const descrSearchText = input_search_desc.value;
    const raceSearchText = input_search_race.value; 
    event.preventDefault();
    console.log (descrSearchText,raceSearchText);
    list.innerHTML="";
    if( kittenData_1.desc.includes(descrSearchText) && kittenData_1.race.includes(raceSearchText)){
        list.innerHTML += elementOne
    }   
    if( kittenData_2.desc.includes(descrSearchText) && kittenData_2.race.includes(raceSearchText)){
            list.innerHTML += elementTwo
    }   
    if( kittenData_3.desc.includes(descrSearchText) && kittenData_3.race.includes(raceSearchText)){
            list.innerHTML += elementThree
    }
}

const input_search_race = document.querySelector('.js_in_search_race'); 
const input_search_desc = document.querySelector('.js_in_search_desc');
const buttonSearch = document.querySelector('.js-button-search');

function renderRace (event) {
    event.preventDefault();
    const raceSearchText = input_search_race.value;
    if (raceSearchText===''){
        list.innerHTML = "Uy que despiste, no sabemos su raza";
    }else {
        filterKitten(event);
    }
}


buttonSearch.addEventListener('click', renderRace);

const spanAdd = document.querySelector('.new');

function handleClickNewCatForm(event) {
    event.preventDefault(); 
    const form =document.querySelector('.new-form');
    /*form.classList.toggle('collapsed');*/ /*otra manera de hacerlo*/
    if (form.classList.contains('collapsed')) {
        form.classList.remove('collapsed');
    } else {
        form.classList.add('collapsed');
    }
  }

spanAdd.addEventListener('click', handleClickNewCatForm);

function handleButtonCancel(event) {
    event.preventDefault(); 
    form.classList.add('collapsed')
  }




const buttonCancel = document.querySelector('.js-btn-cancel');
buttonCancel.addEventListener('click', handleButtonCancel);


const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const button_add = document.querySelector(".js-btn-add");
const inputRace = document.querySelector('.js-input-race');


function addNewKitten(event) {
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueRace = inputRace.value; 
    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo.';
    }
    else {
        list.innerHTML(` 
        <li class="card one">
        <article>
            <img class="card_img" src= ${valuePhoto} alt="siames-cat"/>
            <h3 class="card_title"> ${valueName}</h3>
            <h4 class="card_race"> ${valueRace}</h4>
            <p class="card_description"> ${valueDesc}</p>
        </article>
    </li>`)
  }
}
button_add.addEventListener('click', addNewKitten);
