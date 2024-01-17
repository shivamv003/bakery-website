var a = document.querySelector(".main")

var b = document.querySelector(".dim")

var c = document.querySelector(".dim2")

b.addEventListener("click", function () {
    a.style.background = "dimgrey";
    b.style.color="green";
      c.style.color="white";
});

c.addEventListener("click", function () {
    a.style.background = "black";
     c.style.color="green";
     b.style.color="white";
});


var para_1 = document.querySelector(".paragraph_1")
var butn = document.querySelector(".btn")
var butnles = document.querySelector(".btnless")

butn.addEventListener("click", function (){
para_1.style.display = "block";
butn.style.display = "none";
butnles.style.display = "block";
    
                      
})

butnles.addEventListener("click", function (){
para_1.style.display = "none";
butn.style.display = "block";
butnles.style.display = "none";               
                      
})



















