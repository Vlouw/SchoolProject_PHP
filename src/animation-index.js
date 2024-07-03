/* 
Music and images ©Nintendo
Taken from : https://spritedatabase.net/
*/

/*   
Projet - Web3
Henri-Paul Bolduc
animation_accueil.js

Gestion des sprites dans la page index
*/

// Variables locales
let spriteList = []
let ticker = null

window.addEventListener("load", () => {
    // Ajouter megaman
    spriteList.push(new megaman_index()) 

    // Partir le tick
    tick()
});

// Fonction tick ()
const tick = () => {
    // Boucler sur la spriteList
    spriteList.forEach(s => {
        s.tick()
    })

    // Enlever les éléments Alive = false
    spriteList = spriteList.filter(s => s.isAliveMM)

    window.requestAnimationFrame(tick)
}