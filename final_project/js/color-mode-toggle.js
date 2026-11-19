const btn = document.getElementById("mode-toggle");
const htmlTag = document.getElementById("html");
const navBar = document.getElementById("nav-bar");


console.log("button clicked!");
btn.addEventListener("click", () => {
    if(sessionStorage.getItem('currentColor') === 'dark') {
        btn.textContent = 'dark mode'
        sessionStorage.setItem("currentColor", 'light')
        // htmlTag.setAttribute('data-bs-theme', 'light')
        htmlTag.setAttribute('color-theme', 'light')

        navBar.classList.add('navbar-light')
        navBar.classList.remove('navbar-dark')


        console.log("changed theme to light mode")
    } else {
        btn.textContent = 'light mode'
        sessionStorage.setItem("currentColor", 'dark')
        // htmlTag.setAttribute('data-bs-theme', 'dark')
        htmlTag.setAttribute('color-theme', 'dark')

        navBar.classList.add('navbar-dark')
        navBar.classList.remove('navbar-light')

        console.log("changed theme to dark mode")
    }
  
});