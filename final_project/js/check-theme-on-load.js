const btn2 = document.getElementById("mode-toggle");
const htmlTag2 = document.getElementById("html");
const navBar2 = document.getElementById("nav-bar")

if(sessionStorage.getItem('currentColor') === 'dark' || sessionStorage.getItem('currentColor') === null) {
    btn2.textContent = 'light mode'
    sessionStorage.setItem("currentColor", 'dark')
    // htmlTag2.setAttribute('data-bs-theme', 'dark')
    htmlTag2.setAttribute('color-theme', 'dark')

    navBar2.classList.add('navbar-dark')
    navBar2.classList.remove('navbar-light')
} else {
    btn2.textContent = 'dark mode'
    sessionStorage.setItem("currentColor", 'light')
    // htmlTag2.setAttribute('data-bs-theme', 'light')
    htmlTag2.setAttribute('color-theme', 'light')

    navBar2.classList.add('navbar-light')
    navBar2.classList.remove('navbar-dark')
}

console.log("check theme on load")