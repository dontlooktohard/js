const input = document.querySelector("input")

function addingSmile() {

    for (let i = 0; i < input.value; i++) {
        let creating = document.createElement('img')
        creating.src = "./assets/smile.png";
        creating.width = 50

        document.body.appendChild(creating);
    }
}