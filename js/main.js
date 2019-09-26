 
var  male = [" Kwasi","Kwadwo","Kwabena"," Kwaku","Yaw","Kofi","Kwame"]

var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua", "Ama"]

var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


function giveAkanName (){

   var month= parseInt(document.getElementById("month").value);
   var day =parseInt(document.getElementById("day").value);
   var year =parseInt(document.getElementById("year").value);
   var gender = getGender();

   var date =new Date(month +"/" + day + "/"+year);

   var dayBorn = date.getDay();

   var akanName;

   if(year < 1900){
        alert("Invalid year format, please input year in the format '19xx'.");
        return false;
   }
   if(month > 12 || month < 1 ){
       alert("Invalid month, please try again.");
       return false;
   }
   if(day > 31 || day < 1){
        alert("Invalid day, please try again.");
        return false;
   }else{
    if(gender ==="male"){
        akanName = male[dayBorn];
    }
    else{
        akanName = female[dayBorn];
    }
   }
   
   

   alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanName);
}

function getGender(){
   var gender = document.getElementsByName("gender");
   
   for(i = 0; i < gender.length; i++){
       if(gender[i].checked){
           return(gender[i].value)
       }
   }

}