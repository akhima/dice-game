var randomNumber1 = Math.floor(Math.random()*6)+1;

var diceImage = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",diceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceImage = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",diceImage);

if(randomNumber1 > randomNumber2)
{
  document.getElementsByTagName("h1")[0].textContent = "⛳ Player 1 wins!";
}
else if(randomNumber2 > randomNumber1)
{
  document.getElementsByTagName("h1")[0].textContent = "Player 2 wins! ⛳"
}

else
{
  document.getElementsByTagName("h1")[0].textContent = "Match tied!"
}
