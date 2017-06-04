function snackbar(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4500);
}
function openSnackbarBLH() {
    $("#tekst").text("Błędny login lub hasło!");
    snackbar();
}
function openSnackbarBLE() {
    $("#tekst").text("Ten email i login są już zajęte!");
    snackbar();
}
function openSnackbarBL() {
    $("#tekst").text("Ten login jest już zajęty!");
    snackbar();
}
function openSnackbarBE() {
    $("#tekst").text("Ten email jest już zajęty!");
    snackbar();
}
function openSnackbarOK() {
    $("#tekst").text("Rejestracja przebiegła pomyślnie!");
    snackbar();
}
