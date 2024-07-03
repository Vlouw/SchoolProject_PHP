/* 
Music and images ©Nintendo
Taken from : https://spritedatabase.net/
*/

/*   
Projet - Web3
Henri-Paul Bolduc
gravityman_accueil.js

Gestion du sprite gravityman dans la page accueil
*/

class gravityman_accueil {
    constructor(){
        this.CANVAS_HEIGHT = 175
        this.CANVAS_WIDTH = 175
        this.POSITION_INI_X = 975
        this.POSITION_INI_Y = 390

        // Création de la balise canvas pour gravityman
        this.element = document.createElement('canvas')
        this.element.setAttribute("id", "gravityman")
        this.element.setAttribute("width", this.CANVAS_WIDTH)
        this.element.setAttribute("height", this.CANVAS_HEIGHT)

        // Ajouter la balise canvas à l'élément animation-block
        this.Animation_ID = document.getElementById('animation-block-accueil')
        this.Animation_ID.appendChild(this.element) 

        // Animation de waveman avec tiledImage.js
        this.columnCount = 6;
		this.rowCount = 1;
		this.refreshDelay = 400; 			// msec
		this.loopColumns = true; 			// or by row?
		this.scale = 3;
        this.tiledImage = new TiledImage( "img/gravityman.png", this.columnCount, this.rowCount,
                                          this.refreshDelay, this.loopColumns, this.scale, null);
        this.tiledImage.changeMinMaxInterval(0, 6); 	// Loop from which column to which column?                                
               
        // Création du canvas pour l'animation
        this.ctx = this.element.getContext("2d")

        // Position x, y initial
        this.x = this.POSITION_INI_X
        this.y = this.POSITION_INI_Y

        // Initialiser la position
        this.move()
    }

    // Fonction move
    move () {
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
    }

    // Fonction tick
    tick() {
        // Vider le canvas et activer le tick de l'image
        this.ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
        this.tiledImage.tick(this.CANVAS_HEIGHT/2, this.CANVAS_WIDTH/2, this.ctx);
    }
}