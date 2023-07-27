var img = document.getElementById('img');
var slides = ['GreenDress.jpg','PinkDress.jpg','RedSweater.jpg','WhiteSweater.jpg','CoatEnsemble.jpg'];
var Start=0;
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";

}
setInterval(slider,2000);