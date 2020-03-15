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

  }

}

document.onkeyup = function(event){

  switch(event.keyCode){
    case 38:
      //haut
      listeJoueurs['idBooba'].haut = false
      break;
    case 37:
      //gauche
      listeJoueurs['idBooba'].gauche = false
      break;
    case 39:
      //droite
      listeJoueurs['idBooba'].droite = false
      break;
    case 40:
      //bas
      listeJoueurs['idBooba'].bas = false
      break;


    case 90:
      //z
      listeJoueurs['idKaaris'].haut = false
      break;
    case 68:
      //d
      listeJoueurs['idKaaris'].droite = false
      break;
    case 81:
      //q
      listeJoueurs['idKaaris'].gauche = false
      break;
    case 83:
      //s
      listeJoueurs['idKaaris'].bas = false
      break;

    }
}
