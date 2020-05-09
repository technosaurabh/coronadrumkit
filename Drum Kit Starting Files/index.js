document.querySelector("button.w").addEventListener("click", sound1);
document.querySelector("button.a").addEventListener("click", sound2);
document.querySelector("button.s").addEventListener("click", sound3);
document.querySelector("button.d").addEventListener("click", sound4);
document.querySelector("button.j").addEventListener("click", sound5);
document.querySelector("button.k").addEventListener("click", sound6);
document.querySelector("button.l").addEventListener("click", sound7);
document.querySelector("button.c").addEventListener("click", sound8);



function sound1(){
  var audio1 = new Audio('sounds/tom-1.mp3');
  audio1.play();
}

function sound2(){
  var audio2 = new Audio('sounds/tom-2.mp3');
  audio2.play();
}

function sound3(){
  var audio3 = new Audio('sounds/tom-3.mp3');
  audio3.play();
}

function sound4(){
  var audio4 = new Audio('sounds/tom-4.mp3');
  audio4.play();
}


function sound5(){
  var audio5 = new Audio('sounds/snare.mp3');
  audio5.play();
}


function sound6(){
  var audio6 = new Audio('sounds/crash.mp3');
  audio6.play();
}


function sound7(){
  var audio7 = new Audio('sounds/kick-bass.mp3');
  audio7.play();
}

function sound8(){
  var audio8 = new Audio('sounds/sau.mp3');
  audio8.play();
}
