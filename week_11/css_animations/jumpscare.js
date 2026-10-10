const booText = document.getElementById("boo-text");
const spookyBtn = document.getElementById("spooky-btn");


spookyBtn.addEventListener("click", () => {
    booText.classList.remove("boo-text-jumpscare");
    void booText.offsetWidth;

    booText.textContent = "BOO!";
    booText.classList.add("boo-text-jumpscare");
});