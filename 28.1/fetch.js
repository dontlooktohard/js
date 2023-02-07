

const jokeBtn = document.querySelector("#joke");
const container = document.querySelector("#text");
let innerJoke;

jokeBtn.addEventListener("click", function() {
    fetch("https://api.jokes.one/jod")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        innerJoke = data.contents.jokes[0].joke;
        return innerJoke;
      })
      .then(joke => {
        container.innerHTML = `<h3>${joke.title}</h3>
        <p>${joke.text}</p>`;

      })
  });



