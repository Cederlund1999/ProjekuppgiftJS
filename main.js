window.onload = async function createCharacterList(){
    const response = await fetch(`https://swapi.dev/api/people/`);
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
