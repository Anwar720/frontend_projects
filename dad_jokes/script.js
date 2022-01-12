const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

//generates a new joke on click
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//USING ASYNC / AWAIT
async function generateJoke() { 
    const config = {
        headers:{
        Accept: 'application/json',
    },
}
//waits until joke is fetched
const res = await fetch('https://icanhazdadjoke.com', config)

const data = await res.json()

// inserts joke in the html page
jokeE1.innerHTML = data.joke

}