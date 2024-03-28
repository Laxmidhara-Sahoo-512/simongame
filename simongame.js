var sound1=new Audio("error-2-126514.mp3");
var sound2=new Audio("achive-sound-132273.mp3");
var sound3=new Audio("message-incoming-132126.mp3");
var sound4=new Audio("notification-for-game-scenes-132473.mp3");
var gameoversound=new Audio("mixkit-arcade-space-shooter-dead-notification-272.wav");
let a="";let s="";let storenumber=1;
$("#header").text("Press any button to continue");
function playsound(n){
    s+=Number.parseInt(n);
    if(s.length===a.length){
       storenumber++;a="";s="";$("#header").text("your score is:"+(storenumber-1));
       create(storenumber);

    }
    else{
        for(let k=0;k<s.length;k++){
            if(s[k]!=a[k]){
                alert("gameover");storenumber=1;a="";s="";$("#header").text("Press any button to continue");
            }
        }
    }
   
}
 function create(n){
    
  for(let i=1;i<=n;i++){
    task(i);
  }
 

}

function task(i){
   let no= Math.floor(Math.random() * (5- 1)) + 1;
   let b=Number.parseInt(no);a+=b;

   setTimeout(() => {
    if(no===1){
        sound1.play();
        $("#firstbox").animate({opacity:0.5});
        $("#firstbox").animate({opacity:1});
       
    }
    else if(no===2){
        $("#secondbox").animate({opacity:0.5});
        $("#secondbox").animate({opacity:1});
        sound1.play();
    }
    else if(no===3){
        sound1.play();
        $("#thirdbox").animate({opacity:0.5});
        $("#thirdbox").animate({opacity:1});
    }
    else{
        $("#fourthbox").animate({opacity:0.5});
        $("#fourthbox").animate({opacity:1});
        sound1.play();
    }
   }, 2000*i);
}

$(document).keypress("click",()=>{
    create(storenumber);
}
    
)
$("#firstbox").onm(()=>{
   $("#firstbox").addClass("change_design"); $("#firstbox").removeClass("change_design");
})
