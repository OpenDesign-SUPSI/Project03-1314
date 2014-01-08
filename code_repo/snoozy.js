


//Seena's



var snoozeLevel;

var alarmhrs;

var alarmMins;

var alarmSet = 0;

localStorage.setItem('alarmSet',0);


 
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();

// add a zero in front of numbers<10
m=checkTime(m);

document.getElementById('clock').innerHTML=h+":"+m;
t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}



function ringAlarm()
{
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  
  console.log(h);
  console.log(m);
  
  var alarmhr = localStorage.getItem('alarmhrs');
  
  var alarmMin=localStorage.getItem('alarmMin');
  console.log(alarmhr);
  console.log(alarmMin);
  
  if((h==alarmhr)&&(m==alarmMin))
  {
    console.log("Here");
     var thissound=document.getElementById(soundobj);
    thissound.play();
  }
  t=setTimeout(function(){ringAlarm()},500);
  
  localStorage.setItem('alarmSet',0);
  
  
}



$("#slider").slider({
        value: 0,
        min: 0,
        max: 3,
        step: 1,
        slide: function(event, ui) {$("#amount").val(ui.value);
snoozeLevel= $("#slider").slider("value");                                                                     } 
});




//Sandro's

$( "#timeSelector" ).hide();
$( "#difficulty" ).hide();
$( "#slider" ).hide();
$( "#done" ).hide();
$( "#linkEditAlarm" ).hide();
$( "#first" ).hide();
$( "#second" ).hide();
$( "#third" ).hide();
$( "#back" ).hide();
$( "#try" ).hide();
$( "#dreamy" ).hide();
$( "#sleepy" ).hide();
$( "#rise" ).hide();
$( "#nightmare" ).hide();




$( "#linkSetAlarm" ).click(function() {

  $("#linkSetAlarm" ).hide();
  $("#clock").hide();
  $("#linkSeeSnoozys").hide();
  
  $( "#timeSelector" ).show();
  $( "#difficulty" ).show();
  $( "#slider" ).show();
  $( "#done" ).show();
  $( "#try" ).show();

});

$( "#linkEditAlarm" ).click(function() {

  $( "#linkEditAlarm" ).hide();
  $( "#linkSetAlarm" ).hide();
  $("#clock").hide();
  $("#linkSeeSnoozys").hide();
  
  $( "#timeSelector" ).show();
  $( "#difficulty" ).show();
  $( "#slider" ).show();
  $( "#done" ).show();
  $( "#try" ).show();

});


$( "#done" ).click(function()
                   {
                      
 
  $("#clock").show();
  $("#linkSeeSnoozys").show();
  $("#linkEditAlarm").show();
  
  $( "#timeSelector" ).hide();
  $( "#difficulty" ).hide();
  $( "#slider" ).hide();
  $( "#done" ).hide();
  $( "#try" ).hide();
                     
                     
                     
  alarmhrs=$("#hour").val();
  alarmMins=$("#min").val();
                     
   snoozeLevel=$("#slider").slider("value"); 
  localStorage.setItem('diffLevel', snoozeLevel);
  localStorage.setItem('alarmhrs', alarmhrs);
  localStorage.setItem('alarmMin', alarmMins);
  localStorage.setItem('alarmSet',1);
                     
                   });
                 

  
$( "#linkSeeSnoozys" ).click(function() {
  
  $("#first").show();
  $("#second").show();
  $("#third").show();
  $( "#back" ).show();
  

  $( "#clock" ).hide();
  $("#linkSeeSnoozys").hide();
  $("#linkEditAlarm").hide();
  $("#linkSetAlarm").hide();

 
}); 

$( "#back" ).click(function() {
  
  var  alarmOn=localStorage.getItem('alarmSet');
  
  $("#first").hide();
  $("#second").hide();
  $("#third").hide();
  $( "#back" ).hide();
  

  $( "#clock" ).show();
  $("#linkSeeSnoozys").show();
  
  if(alarmOn == 1){
    $("#linkEditAlarm").show();}
  else {
    $("#linkSetAlarm").show();}


}); 


$( "#try" ).click(function()
                   {
                      
 

  
  $( "#timeSelector" ).hide();
  $( "#difficulty" ).hide();
  $( "#slider" ).hide();
  $( "#done" ).hide();
  $( "#try" ).hide();
                     
         snoozeLevel=$("#slider").slider("value");             
                     

               if (snoozeLevel === 0){
                $( "#dreamy" ).show();
               $("#snooze").css("font-size","100");}
         else  if (snoozeLevel == 1){$( "#sleepy" ).show();
                                    $("#snooze").css("font-size",400);}  
         else  if (snoozeLevel == 2){$( "#rise" ).show();
                                    $("#snooze").css("font-size",500);}
         else  if (snoozeLevel == 3){$( "#nightmare" ).show();
                                    $("#snooze").css("font-size",400);}

                     
        localStorage.setItem('diffLevel', snoozeLevel);
                      

                     
                   });




 
 

