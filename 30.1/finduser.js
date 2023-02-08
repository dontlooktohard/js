const input = document.querySelector("#textHold");
const submitBtn = document.querySelector("#btn");
const userCard = document.querySelector("#cardsBox")

async function getUserInfo(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(username);
  return data;
}

submitBtn.addEventListener("click", async function() {

  const username = input.value;
  console.log(username);
  try {
    const user = await getUserInfo(username);
    userCard.innerHTML += `
      <div class="cardBox">
        <img src="${user.avatar_url}" alt="Avatar">
        <h2>${user.name}</h2>
        <p>Public Repos: ${user.public_repos}</p>
        <a href="${user.html_url}" target="_blank">View Profile</a>
      </div>
    `;
  } catch (error) {
    console.log(error);
  }
});

  