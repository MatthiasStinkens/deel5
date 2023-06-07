function toonTekst() {
    let tekst = document.getElementById("tekst").value;
    let output = document.getElementById("output");
    output.innerHTML += "<strong><span style='color: red;'>" + tekst + "</span></strong><br>";
}
document.getElementById("tekst").style.fontWeight="tekst";
function wissen() {
    let output = document.getElementById("output");
    output.innerHTML = "";
}
