var tableFoot = document.getElementById("bizkitOnTheTable");
var addSingle = document.getElementById("single");
var addSong = document.getElementById("song");
var addDuration = document.getElementById("duration");

function addRow() {
    var newRow = tableFoot.insertRow();
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    var newCell3 = newRow.insertCell(2);
    newCell1.innerHTML = addSingle.value;
    newCell2.innerHTML = addSong.value;
    newCell3.innerHTML = addDuration.value;
    newRow.style = "h5";
    newCell3.style.textAlign = "center";
    document.getElementById("single").value = "";
    document.getElementById("song").value = "";
    document.getElementById("duration").value = "";
}
var addRowButton = document.getElementById("add-row");
addRowButton.addEventListener("click", addRow);
document.querySelector("#button-down").addEventListener("click", () => {
    window.scrollTo(0,document.body.scrollHeight);
});
document.querySelector("#button-up").addEventListener("click", () => {
    window.scrollTo(0,0);
});