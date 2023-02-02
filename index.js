const jokeBtn = document.getElementById("btn");
const jokeText = document.getElementById("joke");

const APIKey = "Av+L16KGa6vHhvXM2OfaBw==CQJ73BVa0hyBnfFs";
const APIURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: { "X-Api-Key": APIKey },
};

async function getJokes() {
  try {
    // Joke text loader
    jokeText.innerText = "Loading . . .";

    // Joke button loader
    jokeBtn.disabled = true;
    jokeBtn.innerText = "Loading . . .";

    // Fetching data
    let jokes = await fetch(APIURL, options);
    let data = await jokes.json();
    jokeText.innerText = data[0].joke;

    // Joke Button enabled again
    jokeBtn.disabled = false;
    jokeBtn.innerText = "Tell Me a Joke";

    return data;
  } catch (err) {
    // Error message
    jokeText.innerText = "An error happened, try again later :(";

    // Joke Button enabled when an error appears
    jokeBtn.disabled = false;
    jokeBtn.innerText = "Tell Me a Joke";
    console.log(err);
  }
}

jokeBtn.addEventListener("click", getJokes);
