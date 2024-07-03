/*    
Projet - Web3
Henri-Paul Bolduc
clavardage.js

Affichage (couleur/text) du clavardage et affichage dans la page Jeu
*/

let hideshow = true;

const applyStyles = iframe => {
    let styles = {
        fontColor : "rgb(77, 160, 0)",
        backgroundColor : "rgba(0, 0, 0, 0.1)",
        fontGoogleName : "Roboto Mono",
        fontSize : "10px",
    }
    
    iframe.contentWindow.postMessage(JSON.stringify(styles), "*");
}

window.addEventListener("load", () => {
    try {   
        document.getElementById('clavardage').onclick = () => {
            let element = document.getElementById("iframe-jeu");

            if (hideshow) {
                element.style.display = "none";
                hideshow = false
            } else {
                element.style.display = "initial"; 
                hideshow = true
            }
        }  
    }
    catch(err) {}    
});