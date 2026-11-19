const btn = document.getElementById("mode-toggle");
const htmlTag = document.getElementById("html");


console.log("button clicked!");
btn.addEventListener("click", () => {
    if(sessionStorage.getItem('currentColor') === 'dark') {
        btn.textContent = 'dark mode'
        sessionStorage.setItem("currentColor", 'light')
        htmlTag.setAttribute('data-bs-theme', 'light')
        console.log("changed theme to light mode")
    } else {
        btn.textContent = 'light mode'
        sessionStorage.setItem("currentColor", 'dark')
        htmlTag.setAttribute('data-bs-theme', 'dark')
        console.log("changed theme to dark mode")
    }
  
});