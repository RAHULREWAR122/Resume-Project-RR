let loding=document.getElementById("loder");

    function Loding(){
           loding.style.display="none"
    }


var btn=document.getElementById('sub-btn');
var msg=document.getElementById('do');
btn.addEventListener('click',function(a){
msg.innerHTML="Thanks For Massage 💓 💕 💖 💗 💞 💟 "
  alert('Success')
    
})

// Smooth scroller Animation 

var anchor = document.querySelectorAll('nav a');

for(let i =0; i < anchor.length;i++){ 
     anchor[i].addEventListener('click' ,function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
     })
}








// Skill Bar Animation  

let skillContainer=document.getElementById('skill-container')
let skillProgress=document.querySelectorAll('.skill-progress > div')


window.addEventListener('scroll',scrolling);


var animatioDone=false;

function startBars(){
    for(let bar of skillProgress){
        bar.style.width=0 + '%';
    }
}
startBars();

function fillBar(){
   for(let bar of skillProgress){
    let trgWidth=bar.getAttribute('data-bar-width');
    let currentWidth=0;
    let interval=setInterval(function(){
        if(currentWidth > trgWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width=currentWidth+'%'
    },5)
   }


}




function scrolling(){
   
    var cordinate=skillContainer.getBoundingClientRect();
    if(! animatioDone && cordinate.top <= window.innerHeight){
      animatioDone=true;
      console.log("skill visible")
      fillBar(); 
    }else if(cordinate.top > window.innerHeight){
       
       animatioDone=false;
       startBars();
    }
}
