const jokeBtn = document.querySelector("#joke");
const container = document.querySelector("#text");

async function getJoke() {
  const response = await fetch("https://api.jokes.one/jod");
  const data = await response.json();
  return data.contents.jokes[0].joke;
}

jokeBtn.addEventListener("click", async function() {
  try {
    const joke = await getJoke();
    container.innerHTML = `<h3>${joke.title}</h3>
    <p>${joke.text}</p>`;
  } catch (error) {
    console.error(error);
  }
});