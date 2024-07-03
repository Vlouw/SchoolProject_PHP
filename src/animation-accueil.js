/* 
Music and images ©Nintendo
Taken from : https://spritedatabase.net/
*/

/*   
Projet - Web3
Henri-Paul Bolduc
animation_accueil.js

Gestion des sprites dans la page d'accueil
*/


// Variables locales
let spriteList = []
let ticker = null

window.addEventListener("load", () => {   
    // Ajouter Waveman
    spriteList.push(new waveman_accueil())
    spriteList.push(new napalmman_accueil()) 
    spriteList.push(new crystalman_accueil()) 
    spriteList.push(new gravityman_accueil()) 

    // Partir le tick
    tick()
});

// Fonction tick ()
const tick = () => {
    // Boucler sur la spriteList
    spriteList.forEach(s => {
        s.tick()
    })

    window.requestAnimationFrame(tick)
}