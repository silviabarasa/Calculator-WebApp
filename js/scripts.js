
   
    //getInput() {
        century = parseInt(document.getElementById("century").value);
        year = parseInt(document.getElrmentaryById("year").value);
        month = pasreInt(document.getElementById("month"))
        day = parseInt(document.getElementById("day").value);
    
        if (century == "") {
        alert("input the correct gender");
        return false;
        } else if (year == ""){
        alert ("input the correct year");
        return false;
        } else if (month == ""){
        alert ("input the correct month");
        return false;
        } else if (day ==""){
        alert ("input the correct day");
        return false;
        }

    // calculate func
    function calculateDay (){
    getInput();
    dayOfWeek = ((((century/4) - 2*century-1) + ((5*year/4)) + ((26*(month +1)/10))% 7) -1;
    console.log(dayOfWeek);//Test the calculateDayfunction
    return(math.floor(dayOfWeek));
    if ( dayOfWeek < 0 ) {
    dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
    return dayOfWeek;
    }

    }
    
    //main caller func
    function checkDayOfWeek(){
    day = calculateDay();
    checkGender();
    console.log("The function runs");//Test CeckDayOfWeek function
    }
      //arrays
      let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
      let maleNames = ["kwasi", "kwadwo", "kwabene", "kwaku", "yaw", "kofi", "kwame"]
      let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    //get selected radio button
    function checkGender(){
    var gen = document.getElementsByName("rads");
    if (gen[0].checked == true){
    var gender = "male";
    }else if (gen[1].checked == true){
    var gender = "famale";
    }else {
    console.log("pass");//Test the radio buttons
    }
    switch(gender){
    case gender = "male":
    switch(day){
    case (0 || -0):
    document.getElementById("result").innerHTML = "The day is oon a sunday." + " " +"your akan name is " + maleNames[0];
    break;
    case (1 || -1):
    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "your akan name is " + maleNames [1];
    break;
    case (2 || -2):
    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "your akan name is " + maleNames[2];
    case (3 || -3):
    document.getElementById("result").innerHTML = "the day is on a wednesday." + "" + "your akan name is " + maleNames[3];
    break;
    case (4 || -4):
    document.getElementById("result").innerHTML = "the day is on a thursday." + " " + "your akan name is " + maleMames[4];
    break;
    case (5 || -5):
    document.getElementById("result").innerHTML = "the day is on a friday." + " " + "your akan mame is " + maleNames[5];
    break;
    case (6 || -6)
    document.getElementById("result").innerHTML = "the day is on a saturday." + " " + "your akan name is " + maleNames [6];
    break;
    } 
    defaults:
    console.log("pass");//Test male case
    
     }
     switch (gender) {
     case gender = "female":
     switch(day){
     case 0 || -0:
     document.getElementById("result").innerHTML = "The day is on a sunday." + " " + "your akan name is " + fNames[0];
     break;
     case (1 || -1):
     document.getElementById("result").innerHTML = "The day is on a monday." + " " + "your akan name is " + fNames[1];
     break;
     case (2 || -2):
     document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "your akan name is" + fNames[2];
     break;
     case (3 || -3):
     document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "your akan name is" + fNames[3];
     break;
     case (4 || -4):
     document.getElementById("result").innerHTML = "The day is on a thurdsay." + " " + "your akan name is" + fNames[4];
     break;
     case(5 || -5):
     document.getElementById("result").innerHTML = "The day is on a friday." + " " + "you akan name is " + fNames[5];
     break;
     case (6 || -6):
     document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "your akan name is" + fNames[6];
     }
     break
     defalt;
     console.log("pass");//Test gender switch
    }
    

















































