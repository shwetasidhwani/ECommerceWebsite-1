var img = document.getElementById('img');
var slides = ['https://cdn.forcast.com.au/media/webp_image/wysiwyg/JUL5_MAIN_MOBILE.webp3','https://i.pinimg.com/originals/b6/a8/42/b6a8429f8097c52d13081dece51b544a.jpg','https://i5.walmartimages.com/asr/49449dc5-f0d7-4bb2-9664-77072f33fcc9.0d62633a014df1006e4d5b6830005204.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF','https://as2.ftcdn.net/v2/jpg/04/84/64/31/1000_F_484643174_Tal7FyQ9fuVJogXBGutDim6BEUZRdCgm.jpg','https://cdn.forcast.com.au/media/webp_image/wysiwyg/JUL5_MAIN_MOBILE.webp'];

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
