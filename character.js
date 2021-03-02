"use strict"; 
const url = new URL(window.location.href);
const searchName = url.searchParams.get('cname');
const spanElements = document.getElementsByTagName('span');
const characterName = document.querySelector('#character-name');

function getCharacterInfo(name){
    const url = new URL('https://swapi.dev/api/people/');
    url.searchParams.append('search', name);
    fetch(url).then((res) => res.json()).then((data) => {
        if(data.count === 0){
            displayError('Unknown');
        } 
        else{
            createCharacterInfoArticle(data.results[0]);
            getHomeworldInfo(data.results[0].homeworld);
        }
    }).catch((err) => {
        console.log(err);
        displayError('Server down');
    });
}

getCharacterInfo(searchName);

function getHomeworldInfo(homeworldUrl){
    fetch(homeworldUrl).then((res) => res.json()).then((data) => {
        if(data.count === 0){
            console.log('no planet');
        } 
        else{
            console.log(data);
            createHomeworldArticle(data);
        }
    }).catch((err) => {
        console.log(err);
    });
}

function createCharacterInfoArticle(data){
    characterName.innerText = data.name;
    spanElements[0].innerText = data.name;
    spanElements[1].innerText = data.birth_year;
    spanElements[2].innerText = data.gender;
    spanElements[3].innerText = data.height;
    spanElements[4].innerText = data.mass;
    spanElements[5].innerText = data.hair_color;
    spanElements[6].innerText = data.eye_color;
    spanElements[7].innerText = data.skin_color;
}

function createHomeworldArticle(data){
    spanElements[8].innerText = data.name;
    spanElements[9].innerText = data.climate;
    spanElements[10].innerText = data.diameter;
    spanElements[11].innerText = data.gravity;
    spanElements[12].innerText = data.orbital_period;
    spanElements[13].innerText = data.population;
    spanElements[14].innerText = data.rotation_period;
    spanElements[15].innerText = data.surface_water;
    spanElements[16].innerText = data.terrain;
}


function displayError(msg){
    characterName.innerText = msg;
    for(let i = 0; i < spanElements.length; i++){
        spanElements[i].innerText = msg;
    }
}