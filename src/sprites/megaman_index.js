/* 
Music and images ©Nintendo
Taken from : https://spritedatabase.net/
*/

/*   
Projet - Web3
Henri-Paul Bolduc
megaman_index.js

Gestion du sprite Megaman sur la page Index
*/

class megaman_index {
    constructor(){
        this.SPEED_MM = 3
        this.CANVAS_HEIGHT = 80
        this.CANVAS_WIDTH = 80
        this.POSITION_INI_X = 120
        this.POSITION_INI_Y = 1000

        // Création de la balise canvas pour megaman
        this.element = document.createElement('canvas')
        this.element.setAttribute("id", "megaman")
        this.element.setAttribute("width", this.CANVAS_WIDTH)
        this.element.setAttribute("height", this.CANVAS_HEIGHT)

        // Ajouter la balise canvas à l'élément animation-block
        this.Animation_ID = document.getElementById('animation-block-index')
        this.Animation_ID.appendChild(this.element) 

        // Animation de megaman avec tiledImage.js
        this.columnCount = 3;
		this.rowCount = 5;
		this.refreshDelay = 200; 			// msec
		this.loopColumns = true; 			// or by row?
		this.scale = 3;
        this.tiledImage = new TiledImage( "img/megaman.png", this.columnCount, this.rowCount,
                                          this.refreshDelay, this.loopColumns, this.scale, null);
        this.tiledImage.changeMinMaxInterval(0, 3); 	// Loop from which column to which column?                                
               
        // Création du canvas pour l'animation
        this.ctx = this.element.getContext("2d")

        // Position x, y initial
        this.x = this.POSITION_INI_X
        this.y = this.POSITION_INI_Y
        
        //Bool
        this.isAliveMM = true

        // Initialiser la position
        this.move()

        // Initialiser un compteur
        this.counter = 0

        // Commencer avec MM qui monte les marches
        this.tiledImage.changeRow(3);
        this.tiledImage.changeMinMaxInterval(0, 1);
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

        if (this.counter == 0) {
            // Faire déplacer le MM jusqu'à ce qu'il arrive en haut des marches
            this.y -= this.SPEED_MM

            if (this.y <= 585) {
                this.counter += 1

                // MM qui se deplace vers la droite
                this.tiledImage.changeRow(1);
                this.tiledImage.changeMinMaxInterval(0, 2);
            }
        } else if (this.counter == 1) {
            // Faire déplacer le MM jusqu'à ce qu'il arrive au point pour sauter
            this.x += this.SPEED_MM

            if (this.x >= 425) {
                this.counter += 1

                // MM qui saute
                this.tiledImage.changeRow(2);
                this.tiledImage.changeMinMaxInterval(0, 0);
            }
        } else if (this.counter == 2) {
            // Faire déplacer le MM jusqu'à ce qu'il arrive au point pour retomber
            this.x += this.SPEED_MM
            this.y -= (this.SPEED_MM + 1)

            if (this.x >= 600) {
                this.counter += 1

                // MM qui tombe
                this.tiledImage.changeMinMaxInterval(1, 1);
            }
        } else if (this.counter == 3) {
            // Faire déplacer le MM jusqu'à ce qu'il arrive au niveau du sol
            this.x += this.SPEED_MM
            this.y += (this.SPEED_MM + 1)

            if (this.x >= 650) {
                this.counter += 1

                // MM qui se deplace vers la droite
                this.tiledImage.changeRow(1);
                this.tiledImage.changeMinMaxInterval(0, 2);
            }
        } else if (this.counter == 4) {
            // Faire déplace le MM jusqu'à ce qu'il arrive à la capsule
            this.x += this.SPEED_MM

            if (this.x >= 985) {
                this.counter += 1

                // MM teleporte
                this.tiledImage.changeRow(4);
                this.tiledImage.changeMinMaxInterval(0, 2);
            }
        } else {
            this.y -= (this.SPEED_MM * 2)

            if (this.y <= 275) {
                // Tuer l'animation MM et enlever le canvas
                this.isAliveMM = true
                this.element.remove()
            }
        }

        // Faire bouger MM
        this.move()
    }
}