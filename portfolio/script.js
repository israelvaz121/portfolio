document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".span").forEach(el => {
    const letras = el.textContent.split("");
    el.innerHTML = letras.map(letra => `<span>${letra}</span>`).join("");
});
});

window.addEventListener("scroll", function() {
    const navUl = document.querySelector("nav ul");
    if (window.scrollY > 80) {
    navUl.classList.add("rolado");
} else {
    navUl.classList.remove("rolado");
}
});
