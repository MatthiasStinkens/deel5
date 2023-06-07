let teller=0;
document.getElementsByTagName("button")[0].addEventListener('click',teksttonen)
document.getElementsByTagName("button")[1].addEventListener('click',tekstwissen)

function teksttonen(){
    teller++;

    let span=document.createElement("span");
    let spanTekst=document.createTextNode(document.getElementsByName("tekstvak")[0].value+" ");
    span.appendChild(spanTekst);
    document.getElementsByTagName("p")[0].appendChild(span);
    span.id="span"+teller;

    document.getElementById("span"+teller).style.color="red";
    document.getElementById("span"+teller).style.fontWeight="bold";

    //als die er is zwart en normaal lettertype terug en die blijft ook zo
    if (teller !==1){
        document.getElementById("span"+(teller - 1)).style.color="black"
        document.getElementById("span"+(teller - 1)).style.fontWeight="normal"
    }
}

function tekstwissen(){
    teller =0;
    document.getElementsByTagName("p")[0].innerHTML="";


}