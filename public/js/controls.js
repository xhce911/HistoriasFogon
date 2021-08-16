var prevBtn = document.getElementById("prev");
var s = skrollr.init();
var nextBtn = document.getElementById("next");
var volumeBtn = document.getElementById("volum").childNodes[0];
var sound = true;
var textview = document.getElementsByClassName("text1");
var increment = 0; 
var content = document.getElementsByName("content").offsetWidth;


window.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
};

volumeBtn.onclick = function(){
    sound =!sound;
    if(sound == false){
        volumeBtn.classList.remove('fas', 'fa-volume-up');
        volumeBtn.classList.add('fas', 'fa-volume-off');
    }else{
        volumeBtn.classList.remove('fas', 'fa-volume-off');
        volumeBtn.classList.add('fas', 'fa-volume-up');
    }
}


prevBtn.onclick = function(){
    increment -= 550;
    s.animateTo(increment);
    console.log(increment)
}
nextBtn.onclick = function(){
    increment += 550;
    s.animateTo(increment);
    console.log(increment)
}