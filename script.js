// Navigation Toggle
function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// Slider
var images = ["images/slider/1.jpg","images/slider/2.jpg","images/slider/3.jpg","images/slider/4.jpg","images/slider/5.jpg"];
var i = 0;
var count = 0;

setInterval(imgSlider, 3000);
function imgSlider(){
    if(i !== 0)
        document.getElementById(i.toString()).className = "";
    else if(count > 0)
        document.getElementById("5").className = "";
    var img = document.getElementById("imgSlider");
    img.src = images[i];
    i++; count++;
    document.getElementById(i.toString()).className = "active";
    if(i === 5)
        i = 0;
}

