function myFunction() {
  var person = prompt("Leuk dat je er bent! wat is je naam?", "Harry Potter");
  if (person != null) {
    document.getElementById("Naam").innerHTML =
    "Hey " + person + "!" ;
  }
}

function guessNumber() {
  var getal = prompt("Denk goed na, welk getal denk je dat het is?", "9");
  if (getal != null) {
    document.getElementById("Getal").innerHTML =
    "Dat is helaas onjuist..." + "Klik op de knop hieboven om het opnieuw te proberen";
  }
  if (getal == getRandomInt(25)){
    document.getElementById("Getal").innerHTML =
    "Gefeliciteerd!  " + getal + " Was het juiste nummer" ;
  }
}

function getRandomInt(max){
  return Math.floor(Math.random()* max);
}