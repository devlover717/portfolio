const jokeEl = document.querySelector('#joke'); 
const btnEl = document.querySelector('#button'); 


btnEl.addEventListener('click', async (event) => {

    jokeEl.textContent = 'updating...'; 

    btnEl.disabled = true;
    btnEl.textContent = 'Loading...';

    const response = await fetch('https://api.api-ninjas.com/v1/jokes?limit=1', {
        method: 'GET', 
        headers: {'X-Api-Key': 'AIej0Id4XRo6n9GkEV7b/w==NaZk4CRFqhAurdbb'}, 
        contentType: 'application/json'
    });

    const jsonResponse = await response.json(); 

    btnEl.disabled = false; 
    btnEl.textContent = 'Tell me a joke'; 

    jokeEl.textContent = jsonResponse[0]['joke'];
})
