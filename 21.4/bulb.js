let click = true;
const img = document.querySelector('.lightbulb');
function turnon() {
    if (click) {
        img.src = "./on.jpg";
        click=false
    } else {
        img.src = "./off.jpg";
        click = true;
    }
}