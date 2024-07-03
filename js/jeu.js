/*    
Projet - Web3
Henri-Paul Bolduc
jeu.js

Controleur et vue du jeu
*/

// Jeu Fin
let jeu_fin;
let jeu_fin_texte;
// --------------------------------------------------------------


// Validation
let taunt_truefalse = false;
let stealth_truefalse = false;
// --------------------------------------------------------------

// Message
let compteur_msg = 0;
let jeu_msg;
let jeu_msg_texte;
let welcome_text = true;
// --------------------------------------------------------------

// Infos ennemi
let img_ennemi;
let bar_ennemi_gauche;
let carte;
let vie_ennemi;
let mana_ennemi;
let carte_restante_ennemi;
let nom_ennemi;
let type_ennemi;
let talent_ennemi;
// --------------------------------------------------------------

// Infos joueur
let clavardage;
let pouvoir_hero;
let fin_tour;
let temps_restant;
let vie_perso;
let mana_perso;
let carte_restante_perso;
let type_perso;
let talent_perso;
// --------------------------------------------------------------

// Carte
let temp_carte;
// --------------------------------------------------------------

// Carte jeu ennemi
for (let i = 0; i < 7; i++) {
    eval("let carte_ennemi_" + i);
    eval("let carte_ennemi_mana_texte_" + i);
    eval("let carte_ennemi_vie_texte_" + i);
    eval("let carte_ennemi_att_texte_" + i);
    eval("let carte_ennemi_image_" + i);
    eval("let carte_ennemi_texte_" + i);
    eval("let carte_ennemi_uid_" + i);
}
// --------------------------------------------------------------

// Carte jeu joueur
for (let i = 0; i < 7; i++) {
    eval("let carte_joueur_" + i);
    eval("let carte_joueur_mana_texte_" + i);
    eval("let carte_joueur_vie_texte_" + i);
    eval("let carte_joueur_att_texte_" + i);
    eval("let carte_joueur_image_" + i);
    eval("let carte_joueur_texte_" + i);
    eval("let carte_joueur_uid_" + i);
}
// --------------------------------------------------------------

// Carte main joueur
for (let i = 0; i < 8; i++) {
    eval("let carte_main_" + i);
    eval("let carte_main_mana_texte_" + i);
    eval("let carte_main_vie_texte_" + i);
    eval("let carte_main_att_texte_" + i);
    eval("let carte_main_image_" + i);
    eval("let carte_main_texte_" + i);
    eval("let carte_main_uid_" + i);
}
// --------------------------------------------------------------

// On load
window.addEventListener("load", () => {
    setID();
    resetAffichageJeu();

    onClickBarJoueur();
    onClickJeuJoueur();

    onClickJeuFin();

    setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});
// --------------------------------------------------------------

// Aller chercher les ID des elements de la page
const setID = () => {
    // Jeu Fin
    jeu_fin = document.getElementById("jeu-fin");
    jeu_fin_texte = document.getElementById("jeu-fin-texte");
    // --------------------------------------------------------------
    
    // Message
    jeu_msg = document.getElementById("jeu-msg");
    jeu_msg_texte = document.getElementById("jeu-msg-texte");
    // --------------------------------------------------------------

    // Infos ennemi
    bar_ennemi_gauche = document.getElementById("bar-ennemi-gauche");
    carte = document.createElement('div');
    carte.className = 'carte';

    img_ennemi = document.getElementById("img-ennemi");
    vie_ennemi = document.getElementById("vie-ennemi");
    mana_ennemi = document.getElementById("mana-ennemi");
    carte_restante_ennemi = document.getElementById("carte-restante-ennemi");
    nom_ennemi = document.getElementById("nom-ennemi");
    type_ennemi = document.getElementById("type-ennemi");
    talent_ennemi = document.getElementById("talent-ennemi");
    // --------------------------------------------------------------

    // Infos joueur
    clavardage = document.getElementById("clavardage");
    pouvoir_hero = document.getElementById("pouvoir-hero");
    fin_tour = document.getElementById("fin-tour");
    temps_restant = document.getElementById("temps-restant");
    vie_perso = document.getElementById("vie-perso");
    mana_perso = document.getElementById("mana-perso");
    carte_restante_perso = document.getElementById("carte-restante-perso");
    type_perso = document.getElementById("type-perso");
    talent_perso = document.getElementById("talent-perso");
    // --------------------------------------------------------------

    // Carte jeu ennemi
    for (let i = 0; i < 7; i++) {
        eval("carte_ennemi_" + i + " = document.getElementById('carte-ennemi-" + i + "')");
        eval("carte_ennemi_mana_texte_" + i + " = document.getElementById('carte-ennemi-mana-texte-" + i + "')");
        eval("carte_ennemi_vie_texte_" + i + " = document.getElementById('carte-ennemi-vie-texte-" + i + "')");
        eval("carte_ennemi_att_texte_" + i + " = document.getElementById('carte-ennemi-att-texte-" + i + "')");
        eval("carte_ennemi_image_" + i + " = document.getElementById('carte-ennemi-image-" + i + "')");
        eval("carte_ennemi_texte_" + i + " = document.getElementById('carte-ennemi-texte-" + i + "')");
    }
    // --------------------------------------------------------------

    // Carte jeu joueur
    for (let i = 0; i < 7; i++) {
        eval("carte_joueur_" + i + " = document.getElementById('carte-joueur-" + i + "')");
        eval("carte_joueur_mana_texte_" + i + " = document.getElementById('carte-joueur-mana-texte-" + i + "')");
        eval("carte_joueur_vie_texte_" + i + " = document.getElementById('carte-joueur-vie-texte-" + i + "')");
        eval("carte_joueur_att_texte_" + i + " = document.getElementById('carte-joueur-att-texte-" + i + "')");
        eval("carte_joueur_image_" + i + " = document.getElementById('carte-joueur-image-" + i + "')");
        eval("carte_joueur_texte_" + i + " = document.getElementById('carte-joueur-texte-" + i + "')");
    }
    // --------------------------------------------------------------

    // Carte main joueur
    for (let i = 0; i < 8; i++) {
        eval("carte_main_" + i + " = document.getElementById('carte-main-" + i + "')");
        eval("carte_main_mana_texte_" + i + " = document.getElementById('carte-main-mana-texte-" + i + "')");
        eval("carte_main_vie_texte_" + i + " = document.getElementById('carte-main-vie-texte-" + i + "')");
        eval("carte_main_att_texte_" + i + " = document.getElementById('carte-main-att-texte-" + i + "')");
        eval("carte_main_image_" + i + " = document.getElementById('carte-main-image-" + i + "')");
        eval("carte_main_texte_" + i + " = document.getElementById('carte-main-texte-" + i + "')");
    }
    // --------------------------------------------------------------
}
// --------------------------------------------------------------

// Re-initialiser l'affichage du jeu
const resetAffichageJeu = (data) => {
    
    // Jeu Fin
    jeu_fin.style.display = 'none';
    // --------------------------------------------------------------

    // Infos ennemi
    bar_ennemi_gauche.innerHTML = "";
    // --------------------------------------------------------------

    // Carte jeu ennemi
    for (let i = 0; i < 7; i++) {
        eval("carte_ennemi_" + i + ".style.display = 'none'");
    }
    // --------------------------------------------------------------

    // Carte jeu joueur
    for (let i = 0; i < 7; i++) {
        eval("carte_joueur_" + i +  ".style.display = 'none'");
    }
    // --------------------------------------------------------------

    // Carte main joueur
    for (let i = 0; i < 8; i++) {
        eval("carte_main_" + i +  ".style.display = 'none'");
    }
    // --------------------------------------------------------------
} 
// --------------------------------------------------------------

// Affichage du jeu
const affichageJeu = (data) => {
    // Condition si data Error
    if (data == "LAST_GAME_LOST") {
        jeu_fin.style.display = 'flex';
        jeu_fin_texte.innerHTML = "Défaite!"
        return;    
    } else if (data == "LAST_GAME_WON") { 
        jeu_fin.style.display = 'flex';
        jeu_fin_texte.innerHTML = "Victoire!"
        return;
    } else if (data == "WAITING") { 
        nom_ennemi.innerHTML = "WAITING";        
        return;
    }

    // Infos ennemi
    let opponent = data["opponent"];
    let opp_handSize = opponent["handSize"];
    
    if (welcome_text) {
        msg = opponent["welcomeText"]
        welcome_text = false;
    }

    for (let i = 0; i < opp_handSize; i++) {  
        bar_ennemi_gauche.appendChild(carte.cloneNode(true));
    }
    
    vie_ennemi.innerHTML = opponent["hp"];
    mana_ennemi.innerHTML = opponent["mp"];
    carte_restante_ennemi.innerHTML = opponent["remainingCardsCount"];
    nom_ennemi.innerHTML = opponent["username"];
    type_ennemi.innerHTML = opponent["heroClass"];
    talent_ennemi.innerHTML = opponent["talent"];
    // --------------------------------------------------------------

    // Infos joueur
    if (data["heroPowerAlreadyUsed"]) {
        pouvoir_hero.style.backgroundColor = "rgb(160, 0, 0)"
    } else {        
        pouvoir_hero.style.backgroundColor = "rgb(77, 160, 0)"
    }

    if (data["yourTurn"]) {
        fin_tour.style.backgroundColor = "rgb(77, 160, 0)"
    } else {
        fin_tour.style.backgroundColor = "rgb(160, 0, 0)"
    }

    temps_restant.innerHTML = data["remainingTurnTime"]
    vie_perso.innerHTML = data["hp"]
    mana_perso.innerHTML = data["mp"];
    carte_restante_perso.innerHTML = data["remainingCardsCount"];
    type_perso.innerHTML = data["heroClass"];
    talent_perso.innerHTML = data["talent"];
    // --------------------------------------------------------------

    // Carte jeu ennemi
    let opp_board = opponent["board"]

    for (let i = 0; i < opp_board.length; i++) {
        temp_carte = opp_board[i];
        affichageCarte("ennemi", i);       
    }
    // --------------------------------------------------------------

    // Carte jeu joueur
    let board = data["board"]

    for (let i = 0; i < board.length; i++) {
        temp_carte = board[i];
        affichageCarte("joueur", i);   
    }
    // --------------------------------------------------------------

    // Carte main joueur
    let hand = data["hand"]

    for (let i = 0; i < hand.length; i++) {
        temp_carte = hand[i];
        affichageCarte("main", i);    
    }
    // --------------------------------------------------------------
}

// Affichage d'une carte
const affichageCarte = (endroit, i) => {
    let temp_id = temp_carte['id']
    let temp_uid = temp_carte['uid']
    
    // Afficher l'image de la carte selon son ID, sinon mettre #
    try {
        eval("carte_" + endroit + "_image_" + i + ".style.backgroundImage = '" + 'url("img_carte/'  + temp_id + '.png")' + "'");
    }
    catch (err) {
        eval("carte_" + endroit + "_image_" + i + ".style.backgroundImage = '" + 'url("img_carte/%23.png")' + "'");
    }

    // Afficher bordure haut et gauche rouge si la carte est en mode "SLEEP"
    if (temp_carte['state'] == "SLEEP") {
        eval("carte_" + endroit + "_" + i + '.style.borderTop = "2px solid red"');
        eval("carte_" + endroit + "_" + i + '.style.borderLeft = "2px solid red"');
        taunt_truefalse = true;
    } else if (!taunt_truefalse) {
        eval("carte_" + endroit + "_" + i + '.style.borderTop = "2px solid rgb(77, 160, 0)"');
        eval("carte_" + endroit + "_" + i + '.style.borderLeft = "2px solid rgb(77, 160, 0)"');
    }

    // Remplir les informations de la carte et l'afficher
    eval("carte_" + endroit + "_" + i + ".style.display = 'flex'");
    eval("carte_" + endroit + "_mana_texte_" + i + ".innerHTML = temp_carte['cost']");
    eval("carte_" + endroit + "_vie_texte_" + i + ".innerHTML = temp_carte['hp']");
    eval("carte_" + endroit + "_att_texte_" + i + ".innerHTML = temp_carte['atk']");
    eval("carte_" + endroit + "_texte_" + i + ".innerHTML = ''");
    eval("carte_" + endroit + "_uid_" + i + " = " + temp_uid);

    // Remplir les "mechanics" de la carte et mettre la bordure bas droite grise pour Taunt et/ou fond bourgogne pour Stealth
    temp_carte['mechanics'].forEach(element => {
        if (element == "Taunt") {
            eval("carte_" + endroit + "_" + i + '.style.borderBottom = "2px solid rgb(110, 110, 110)"');
            eval("carte_" + endroit + "_" + i + '.style.borderRight = "2px solid rgb(110, 110, 110)"');
            taunt_truefalse = true;
        } else if (!taunt_truefalse) {
            eval("carte_" + endroit + "_" + i + '.style.borderBottom = "2px solid rgb(77, 160, 0)"');
            eval("carte_" + endroit + "_" + i + '.style.borderRight = "2px solid rgb(77, 160, 0)"');
        }

        if (element == "Stealth") {
            eval("carte_" + endroit + "_" + i + '.style.backgroundColor = "rgb(60, 40, 40)"');
            stealth_truefalse = true;
        } else if (!stealth_truefalse) {
            eval("carte_" + endroit + "_" + i + '.style.backgroundColor = "rgb(0, 0, 0)"');
        }

        eval("carte_" + endroit + "_texte_" + i + ".innerHTML += element")
        eval("carte_" + endroit + "_texte_" + i + ".innerHTML += '<br>'");
    });

    // Re-initialiser les conditions pour taunt et stealth
    taunt_truefalse = false;
    stealth_truefalse = false;  
}
// --------------------------------------------------------------

// Fonction afficher un message et faire disparaitre apres 3 secondes
const tick_msg = () => {    
    jeu_msg.style.display = "flex";
    jeu_msg_texte.innerHTML = msg;
        
    compteur_msg += 1;
    if (compteur_msg >= 180 ) {
        compteur_msg = 0;
        msg = '';
        document.getElementById("jeu-msg").style.display = "none";
    } else {
        window.requestAnimationFrame(tick_msg);
    }  
}
// --------------------------------------------------------------

// Code source donnee par l'enonce
const state = () => {
    fetch ( "action/ajax-state.php", 
                {   method : "POST",
                    credentials: "include"
                })
    .then(response => response.text())
    .then(data => {
        data = JSON.parse(data);
        
        // console.log(data); // contient les cartes/état du jeu.

        if (msg != '' && compteur_msg == 0)
            tick_msg();        
        
        resetAffichageJeu();
        affichageJeu(data);

        setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    })
}
// --------------------------------------------------------------

// Fin du tour
const finTour = () => {
    $.ajax (
        {
            type: "POST",
            url: "action/ajax-action-jeu.php",
            data: {
                type: "END_TURN"
            }
        }).done( data => {           
            data = JSON.parse(data);

            // console.log(data)

            if (data == "WRONG_TURN")
                msg = "Ce n'est pas votre tour!"
        });
}
// --------------------------------------------------------------

// Pouvoir Hero
const pouvoirHero = () => {
    $.ajax (
        {
            type: "POST",
            url: "action/ajax-action-jeu.php",
            data: {
                type: "HERO_POWER"
            }
        }).done( data => {           
            data = JSON.parse(data);

            // console.log(data)

            if (data == "WRONG_TURN")
                msg = "Ce n'est pas votre tour!"

            else if (data == "NOT_ENOUGH_ENERGY")
                msg = "Haha! Tu manques d'énergie!"

            else if (data == "HERO_POWER_ALREADY_USED")    
                msg = "Bel essai, une fois par tour seulement!"
        });
}
// --------------------------------------------------------------

// Jouer une carte de notre main
const jouerCarteMain = (uidCarte) => {
    $.ajax (
        {
            type: "POST",
            url: "action/ajax-action-jeu.php",
            data: {
                type: "PLAY",
                uid: uidCarte
            }
        }).done( data => {
            data = JSON.parse(data);

            // console.log(data)

            if (data == "NOT_ENOUGH_ENERGY")
                msg = "Haha! Tu manques d'énergie!"
            else if (data == "BOARD_IS_FULL")    
                msg = "WOW STOP! 7 cartes en jeu maximum!"
        });
}
// --------------------------------------------------------------

// Attaquer
const attaquer = (uidCarte, uidAtt) => {
    $.ajax (
        {
            type: "POST",
            url: "action/ajax-action-jeu.php",
            data: {
                type: "ATTACK",
                uid: uidCarte,
                targetuid: uidAtt
            }
        }).done( data => {
            data = JSON.parse(data);

            // console.log(data)

            if (data == "OPPONENT_CARD_HAS_STEALTH")
                msg = "Tu ne peux pas attaquer les ombres!"
            else if (data == "MUST_ATTACK_TAUNT_FIRST")    
                msg = "Par ici, Taunt! Taunt!"
            else if (data == "WRONG_TURN")    
                msg = "Patience, attends ton tour!"
            else if (data == "CARD_IS_SLEEPING")    
                msg = "Cette carte viens d'être jouer ou elle a déjà attaquer. Elle dort!"
        });
}
// --------------------------------------------------------------

// Option OnClick de jeu fin
const onClickJeuFin = () => {
    jeu_fin.onclick = () => {
        window.location.href = "accueil.php";
    }
}
// --------------------------------------------------------------

// Option OnClick de la bar du joueur
const onClickBarJoueur = () => {
    // Bouton joueur
    pouvoir_hero.onclick = () => {
        pouvoirHero();
    }
    
    fin_tour.onclick = () => {
        finTour();
    }
    // --------------------------------------------------------------

    // Carte main joueur
    carte_main_0.onclick = () => {
        jouerCarteMain(carte_main_uid_0);
    }

    carte_main_1.onclick = () => {
        jouerCarteMain(carte_main_uid_1);
    }

    carte_main_2.onclick = () => {
        jouerCarteMain(carte_main_uid_2);
    }

    carte_main_3.onclick = () => {
        jouerCarteMain(carte_main_uid_3);
    }

    carte_main_4.onclick = () => {
        jouerCarteMain(carte_main_uid_4);
    }

    carte_main_5.onclick = () => {
        jouerCarteMain(carte_main_uid_5);
    }

    carte_main_6.onclick = () => {
        jouerCarteMain(carte_main_uid_6);
    }

    carte_main_7.onclick = () => {
        jouerCarteMain(carte_main_uid_7);
    }
    // --------------------------------------------------------------
}
// --------------------------------------------------------------

// Option OnClick des cartes en jeu du joueur
const onClickJeuJoueur = () => {

    carte_joueur_0.onclick = () => {
        ombrageCarte(0);
        onClickEnnemi(carte_joueur_uid_0);
    }

    carte_joueur_1.onclick = () => {
        ombrageCarte(1);
        onClickEnnemi(carte_joueur_uid_1);
    }

    carte_joueur_2.onclick = () => {
        ombrageCarte(2);
        onClickEnnemi(carte_joueur_uid_2);
    }

    carte_joueur_3.onclick = () => {
        ombrageCarte(3);
        onClickEnnemi(carte_joueur_uid_3);
    }

    carte_joueur_4.onclick = () => {
        ombrageCarte(4);
        onClickEnnemi(carte_joueur_uid_4);
    }

    carte_joueur_5.onclick = () => {
        ombrageCarte(5);
        onClickEnnemi(carte_joueur_uid_5);
    }

    carte_joueur_6.onclick = () => {
        ombrageCarte(6);
        onClickEnnemi(carte_joueur_uid_6);
    }
}
// --------------------------------------------------------------

// Option OnClick des options ennemis
const onClickEnnemi = (uidCarte) => {

    img_ennemi.onclick = () => {
        attaquer(uidCarte, 0);
        ombrageCarte(999);
        uidCarte = -1;
    }
    
    carte_ennemi_0.onclick = () => {
        attaquer(uidCarte, carte_ennemi_uid_0);
        ombrageCarte(999);
        uidCarte = -1;
    }

    carte_ennemi_1.onclick = () => {
        attaquer(uidCarte, carte_ennemi_uid_1);
        ombrageCarte(999);
        uidCarte = -1;
    }

    carte_ennemi_2.onclick = () => {
        attaquer(uidCarte, carte_ennemi_uid_2);
        ombrageCarte(999);
        uidCarte = -1;
    }

    carte_ennemi_3.onclick = () => {
        attaquer(uidCarte, carte_ennemi_uid_3);
        ombrageCarte(999);
        uidCarte = -1;
    }

    carte_ennemi_4.onclick = () => {
        attaquer(uidCarte, carte_ennemi_uid_4);
        ombrageCarte(999);
        uidCarte = -1;
    }

    carte_ennemi_5.onclick = () => {
        attaquer(uidCarte, carte_ennemi_uid_5);
        ombrageCarte(999);
        uidCarte = -1;
    }

    carte_ennemi_6.onclick = () => {
        attaquer(uidCarte, carte_ennemi_uid_6);
        ombrageCarte(999);
        uidCarte = -1;
    }
}
// --------------------------------------------------------------

// Mettre en évidence la carte selectionné
const ombrageCarte = (num_carte) => {
    for (let i = 0; i < 7; i++) {
        eval("carte_joueur_" + i + ".style.boxShadow = 'none'");
    }

    try {
        eval("carte_joueur_" + num_carte + ".style.boxShadow = '5px 5px 5px green'");      
    } catch (err) { }
}
// --------------------------------------------------------------