const url = new URL(window.location.href);
const searchName = url.searchParams.get('cname');

const spanElements = document.getElementsByTagName('span');
let characterName = document.querySelector('#character-name');

function getCharacterInfo(name){
    const url = new URL('https://swapi.dev/api/people/');
    url.searchParams.append('search', name);
    fetch(url).then((res) => res.json()).then((data) => {
        if(data.count === 0){
            displayError('Unknown');
        } 
        else{
            createCharacterInfoArticle(data.results[0]);
        }
    }).catch((err) => {
        console.log(err);
        displayError('Server down');
    });
}

getCharacterInfo(searchName);

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

function displayError(msg){
    let characterHeading = document.querySelector('#info-heading');
    characterHeading.innerHTML = msg;
    characterName.innerText = msg;
    for(let i = 0; i < spanElements.length; i++){
        spanElements[i].innerText = msg;
    }
}