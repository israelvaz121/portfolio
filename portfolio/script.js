// Hover nas letras: separa o texto em palavras e letras (spans)
const SELETOR_TEXTOS = "h1, h2, h3, p, li";

function separarLetras(no) {
    const frag = document.createDocumentFragment();

    no.textContent.split(/(\s+)/).forEach(parte => {
        if (!parte) return;

        // Espaços ficam como texto normal, para a linha poder quebrar neles
        if (/^\s+$/.test(parte)) {
            frag.appendChild(document.createTextNode(parte));
            return;
        }

        const palavra = document.createElement("span");
        palavra.className = "palavra";
        [...parte].forEach(caractere => {
            const letra = document.createElement("span");
            letra.className = "letra";
            letra.textContent = caractere;
            palavra.appendChild(letra);
        });
        frag.appendChild(palavra);
    });

    no.replaceWith(frag);
}

function ativarHoverNasLetras() {
    document.querySelectorAll(SELETOR_TEXTOS).forEach(el => {
        if (el.closest("nav")) return;

        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nos = [];
        while (walker.nextNode()) nos.push(walker.currentNode);

        nos.forEach(no => {
            if (!no.textContent.trim()) return;
            // Links ficam inteiros (senão perdem o sublinhado) e não repete o que já foi separado
            if (no.parentElement.closest("a, .palavra")) return;
            separarLetras(no);
        });
    });
}

// Menu muda de fundo quando a página rola
function atualizarMenu() {
    const barra = document.querySelector("nav .barra");
    barra.classList.toggle("rolado", window.scrollY > 80);
}

document.addEventListener("DOMContentLoaded", () => {
    ativarHoverNasLetras();
    atualizarMenu();
});

window.addEventListener("scroll", atualizarMenu);
