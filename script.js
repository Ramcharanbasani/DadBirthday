// Loader

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800);

};


// Smooth Fade Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity=0;
sec.style.transform="translateY(70px)";
sec.style.transition="1s";

observer.observe(sec);

});


// Typing Effect

const text="Daddy ❤️";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,90);

}

}

typing();


// Floating Hearts

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=Math.random()*25+20+"px";

heart.style.opacity=".8";

heart.style.zIndex="999";

heart.style.animation="floatUp 7s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},450);


// Balloons

setInterval(()=>{

let balloon=document.createElement("div");

balloon.innerHTML="🎈";

balloon.style.position="fixed";

balloon.style.left=Math.random()*100+"vw";

balloon.style.bottom="-50px";

balloon.style.fontSize="40px";

balloon.style.animation="floatUp 10s linear";

balloon.style.zIndex="998";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},10000);

},1800);

const imgs=document.querySelectorAll(".gallery img");

const box=document.getElementById("lightbox");

const boximg=document.getElementById("lightbox-img");

imgs.forEach(img=>{

img.onclick=()=>{

box.style.display="flex";

boximg.src=img.src;

};

});

box.onclick=()=>{

box.style.display="none";

};

const music=document.getElementById("music");

document.getElementById("musicBtn").onclick=()=>{

music.play();

};

const cursor=document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

function fireworks(){

confetti({

particleCount:300,

spread:180,

origin:{y:.6}

});

}

setTimeout(fireworks,4000);

document
.getElementById("heartBtn")
.onclick=()=>{

document
.getElementById("letterCard")
.style.display="block";

};