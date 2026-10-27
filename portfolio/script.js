document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("h1, h2, h3, p, ul, li, br").forEach(el => {
        if (el.closest("nav")) return;
        if (el.tagName === "BR") el = el.parentElement;
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nos = [];
        while (walker.nextNode()) nos.push(walker.currentNode);
        nos.forEach(no => {
            if (!no.textContent.trim() || no.parentElement.closest("span")) return;
            const frag = document.createDocumentFragment();
            [...no.textContent].forEach(letra => {
                const s = document.createElement("span");
                s.textContent = letra;
                frag.appendChild(s);
            });
            no.replaceWith(frag);
        });
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
