function vergrootTekst() {
    document.querySelector("h1").style.fontSize = "48px";
    let paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = "24px";
    }
}

function verkleinTekst() {
    document.querySelector("h1").style.fontSize = "22px";
    let paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = "14px";
    }
}