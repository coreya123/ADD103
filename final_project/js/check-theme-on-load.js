const btn2 = document.getElementById("mode-toggle");
const htmlTag2 = document.getElementById("html");

if(sessionStorage.getItem('currentColor') === 'dark' || sessionStorage.getItem('currentColor') === null) {
    btn2.textContent = 'light mode'
    sessionStorage.setItem("currentColor", 'dark')
    htmlTag2.setAttribute('data-bs-theme', 'dark')
} else {
    btn2.textContent = 'dark mode'
    sessionStorage.setItem("currentColor", 'light')
    htmlTag2.setAttribute('data-bs-theme', 'light')
}

console.log("check theme on load")