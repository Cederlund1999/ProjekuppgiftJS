"use strict";   
   onload = async function createCharacterList(){
    const response = await fetch(`https://swapi.dev/api/people/?page=1`);
    const responseData = await response.json()
    console.log(responseData);  
    
    let i = 0;
    let x = 0;
    while (i < 10) {
    let li = document.createElement("li");
    let text = document.createTextNode(responseData.results[x].name);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
    i++;
    x++;
    
}
}
document.getElementById('showMoreClick').onclick = async function(){
    const response = await fetch(`https://swapi.dev/api/people/?page=2`)
    const data = await response.json();
    console.log(data);
    let i = 0;
    let x = 0;
    while (i < 10){
    let li = document.createElement('li');
    let text = document.createTextNode(data.results[x].name);
    li.appendChild(text);
    document.getElementById('myUl').appendChild(li);
    i++;
    x++;
    if(i >= 10)
    {
        document.getElementById('showMoreClick').hidden = true;
    }
    }
}
document.getElementById('randomizeButton').onclick = async function randomSearch(){
    let x = Math.floor( (Math.random()*7) +1);
    let i = Math.floor(Math.random()*10);
    const response = await fetch(`https://swapi.dev/api/people/?page=${x}`)
    console.log(response);
    const data = await response.json();
    console.log(document.getElementById('characterName').value);
    console.log(data);
    document.getElementById('characterName').value = data.results[i].name;
    document.getElementById('searchButton').click();
}

