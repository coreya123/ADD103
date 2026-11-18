const btn = document.getElementById("mode-toggle");
const htmlTag = document.getElementById("html");

let currentColor = 'light'

console.log("button clicked!");
btn.addEventListener("click", () => {
    if(currentColor === 'light') {
        currentColor = 'dark'
        btn.textContent = 'light mode'
    } else {
        currentColor = 'light'
        btn.textContent = 'dark mode'
    }
    htmlTag.setAttribute('data-bs-theme', currentColor)
});