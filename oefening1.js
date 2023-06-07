function toonTekst() {
    let invoer = document.getElementById("tekstvak").value;
    let uitvoer = document.getElementById("uitvoer");
    uitvoer.innerHTML = invoer;}



document.getElementsByTagName("button")[0].addEventListener('click',tekstweergave);

function tekstweergave(){
    let tekst = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("p")[0].innerHTML=tekst;
}