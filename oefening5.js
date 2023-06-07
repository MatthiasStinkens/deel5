function openCell(num) {
    let cell = document.querySelector("td:nth-child(" + num + ")");
    cell.innerHTML = <img src="images.jpg" alt="Screaming Frog"/>;
    cell.style.backgroundColor = "red";
    cell.style.color = "red";
    cell.style.cursor = "default";
    cell.onclick = null;
}