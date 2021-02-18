async function apiTestCall(){
    const response = await fetch(`https://swapi.dev/api/people/?page=1`);
    const responseData = await response.json()
    console.log(responseData);  
}

