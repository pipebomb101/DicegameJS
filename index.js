var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomimage1src = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1src);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomimage2src = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2src);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "🔥Player1 wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = "🔥Player2 wins";

}
else{
  document.querySelector("h1").innerHTML = "Draw";

}
