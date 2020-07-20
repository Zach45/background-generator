var css1 = document.querySelector("#text1");
var css2 = document.querySelector("#text2");
var cssFormat1 = document.querySelector("#firstColor");
var cssFormat2 = document.querySelector('#secondColor');
var body = document.getElementById("gradient")

var color1 = document.querySelector("#color1")
var color2 = document.querySelector("#color2")

color1.addEventListener('input', function (){
    body.style.background = 
    "linear-gradient(to right, "
     + this.value +
     " , "
     + color2.value + ")" ;
    var newColor1 = this.value;
    color1.setAttribute('value', newColor1)
    css1.innerHTML = this.value;
    cssFormat1.innerHTML = this.value;
})
color2.addEventListener('input', function(){
    body.style.background = 
    "linear-gradient(to right, "
     + color1.value +
     " , "
     + this.value + ")" ;
    var newColor2 = this.value;
    color2.setAttribute('value', newColor2)
    css2.innerHTML = this.value;
    cssFormat2.innerHTML = this.value;

})
