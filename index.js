var randomnumber1 = Math.floor(Math.random() * 6)+1;

var randomImage = "dice" + randomnumber1 + ".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0]; 

image1.setAttribute("src", randomImageSource);

var randomnumber2 = Math.floor(Math.random() * 6)+1;

var randomImage = "dice" + randomnumber2 + ".png";

var randomImageSource = "images/" + randomImage;

var image2 = document.querySelectorAll("img")[1]; 

image2.setAttribute("src", randomImageSource);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerText="Player1 Wins!!";
}
else if(randomnumber1 == randomnumber2){
    document.querySelector("h1").innerText="DRAW!!";
}

else{
    document.querySelector("h1").innerText="Player2 Wins!!";
}