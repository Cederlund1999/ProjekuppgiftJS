async function apiTestCall(){
    const response = await fetch(`https://swapi.dev/api/people/`);
    const responseData = await response.json()
    console.log(responseData);  
}
