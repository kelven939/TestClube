console.log("Ola Mundo!");
let conte = document.getElementById("mydro");
function arte(){
    document.getElementById("mydro").classList.toggle("shows");
}
window.onclick=function(event){
    if (!event.target.matches('.artes')) {
        conte.classList.remove("shows");
    }
}