const btn = document.getElementById("light-switch");
const bg = document.getElementById("background");

const txt = document.getElementById("light-text");

let currentColor = "white";

btn.addEventListener("click", () => {
    if (currentColor === "white") {
        bg.style.backgroundColor = "black";
        currentColor = "black";

        txt.textContent = "THE LIGHT SWITCH IS OFF.";
    } else {
        bg.style.backgroundColor = "white";
        currentColor = "white";

        txt.textContent = "THE LIGHT SWITCH IS ON.";
    }
});