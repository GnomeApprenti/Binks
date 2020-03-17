//déplacements
document.onkeydown = function(event){

  switch(event.keyCode){
    case 38:
      //haut
      listeJoueurs['idBooba'].haut = true;
      break;

    case 37:
      //gauche
      listeJoueurs['idBooba'].gauche = true;
      break;

    case 39:
      //droite
      listeJoueurs['idBooba'].droite = true;
      break;

    case 40:
      //bas
      listeJoueurs['idBooba'].bas = true;
      break;


    case 90:
      //z
      listeJoueurs['idKaaris'].haut = true;
      break;

    case 68:
      //d
      listeJoueurs['idKaaris'].droite = true;
      break;

    case 81:
      //q
      listeJoueurs['idKaaris'].gauche = true;
      break;

    case 83:
      //s
      listeJoueurs['idKaaris'].bas = true;
      break;


    case 13:
      //enter
      if(etat == 1)
        etat = 2;
      else if(etat == 2)
        etat = 1;
      break;

  }

}

document.onkeyup = function(event){

  switch(event.keyCode){
    case 38:
      //haut
      listeJoueurs['idBooba'].haut = false;
      break;
    case 37:
      //gauche
      listeJoueurs['idBooba'].gauche = false;
      break;
    case 39:
      //droite
      listeJoueurs['idBooba'].droite = false;
      break;
    case 40:
      //bas
      listeJoueurs['idBooba'].bas = false;
      break;

    case 77:
      //m
      console.log("attaque joueur 2");
      break;


    case 90:
      //z
      listeJoueurs['idKaaris'].haut = false;
      break;
    case 68:
      //d
      listeJoueurs['idKaaris'].droite = false;
      break;
    case 81:
      //q
      listeJoueurs['idKaaris'].gauche = false;
      break;
    case 83:
      //s
      listeJoueurs['idKaaris'].bas = false;
      break;

    case 71:
      //g
      console.log("attaque joueur 1");
      break;

    }
}
