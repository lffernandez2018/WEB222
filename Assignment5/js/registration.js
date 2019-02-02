/*
*
* WEB222 – Assignment #5
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: Leny Fe Fernandez Student ID: 120818174 Date: 2018-04-05
* 
********************************************************************************/


//for first name validation
function validateFname(){
    //get side panel id for error outputs
    var err = document.querySelector('#errorplace');
 //get the input value from the field and trim it so white space before and after the values are not included
    var fnam =  document.getElementById('fname');
    var inputValue = fnam.value.trim();
    //check the length
    if(inputValue.length == 0){
        err.innerHTML += '<p> <b>*Wrong First Name! </b> <br/> No input or white space(s) only! Please enter a meaningful name with all Alphabet letter. </p>';
       return false;
    }
    //check if the input are all letters
    for (var i = 0; i <inputValue.length; i++)
    {
        if ((inputValue.charCodeAt(i) < 65 || inputValue.charCodeAt(i) > 90) && (inputValue.charCodeAt(i) < 97 || inputValue.charCodeAt(i) > 122) && inputValue.charCodeAt(i) != 32)
        {err.innerHTML += "<p> <b>*Wrong  First Name! </b> <br/> Please enter a meaningful value with all Alphabet Letters. </p>";
        fnam.focus();
        return false;}
    }
    
    clearErrors();
    return true;
    
}
//function for last name validation
function validateLname(){
    var err = document.querySelector('#errorplace');
//get the input value from the field and trim it so white space before and after the values are not included
    var lnam =  document.getElementById('lname');
    var inputValue = lnam.value.trim();
    //check the length
    if(inputValue.length == 0){
        err.innerHTML += '<p> <b>*Wrong Last Name! </b> <br/> No input or white space(s) only! Please enter a meaningful name with all Alphabet letter. </p>';
        return false;
    }
    //check if the inputed values are all letters
    for (var i = 0; i <inputValue.length; i++)
    {
        if ((inputValue.charCodeAt(i) < 65 || inputValue.charCodeAt(i) > 90) && (inputValue.charCodeAt(i) < 97 || inputValue.charCodeAt(i) > 122) && inputValue.charCodeAt(i) != 32)
                  {
                    err.innerHTML += "<p> <b>*Wrong Last Name! </b> <br/> Please enter a meaningful value with all Alphabet Letters. </p>";
                    lnam.focus();
                    return false;
                  }
    }
    clearErrors();
    return true; 
}
//function for validating street name
function validateStreetname(){
    var err = document.querySelector('#errorplace');
     //get the input value from the field and trim it so white space before and after the values are not included
    var inputValue = document.getElementById('streetname').value.trim();
    //check length
    if(inputValue.length == 0){
        err.innerHTML += '<p> <b>*Wrong Street Name! </b> <br/> No input or white space(s) only! Please enter a meaningful name with all Alphabet letter. </p>';
        return false;
    }
    //check if the input values are all letters
    for (var i = 0; i <inputValue.length; i++)
    {
        if ((inputValue.charCodeAt(i) < 65 || inputValue.charCodeAt(i) > 90) && (inputValue.charCodeAt(i) < 97 || inputValue.charCodeAt(i) > 122) && inputValue.charCodeAt(i) != 32)
        { err.innerHTML += "<p> <b>*Wrong Street Name! </b> <br/> Please enter a meaningful value with all Alphabet Letters. </p>";
        return false;}
    }
    clearErrors();
    return true;   
}
//function for validating city name
function validateCity(){
    var err = document.querySelector('#errorplace');
    //get the input value from the field and trim it so white space before and after the values are not included
    var inputValue = document.getElementById('city').value.trim();
    //check the length
    if(inputValue.length == 0){
        err.innerHTML += '<p> <b>*Wrong City Name! </b> <br/> No input or white space(s) only! Please enter a meaningful name with all Alphabet letter. </p>';
        return false;
    }
     //check if the input values are all letters
    for (var i = 0; i <inputValue.length; i++)
    {
        if ((inputValue.charCodeAt(i) < 65 || inputValue.charCodeAt(i) > 90) && (inputValue.charCodeAt(i) < 97 || inputValue.charCodeAt(i) > 122) && inputValue.charCodeAt(i) != 32)
                  { 
                       err.innerHTML += "<p> <b>*Wrong City Name! </b> <br/> Please enter a meaningful value with all Alphabet Letters. </p>";
                       return false;
                }
    }
    clearErrors();
    return true;
    
}
//function for validating user name
function validateUserName(){
    var err = document.querySelector('#errorplace');
    var userValue = document.getElementById('username').value;
    //check the username length
    if(userValue.length < 6)
    {
        err.innerHTML += '<p> <b>* Username </b> must be atleast 6 characters long! </p>';
        return false;
    }
    //check if the username start with a letter
    if ((userValue.charCodeAt(0) < 65 || userValue.charCodeAt(0) > 90) && (userValue.charCodeAt(0) < 97 || userValue.charCodeAt(0) > 122))
     {   err.innerHTML += '<p> <b>* Username </b> must start with a letter </p>';
        return false;
     }
     clearErrors();
    return true;
}
//function for validating password
function validatePassword(){
    var err = document.querySelector('#errorplace');
    var passValue = document.getElementById('pass').value;
    var digit = 0;
    var upper = 0;

    //check if password start with a character
        if(passValue.charCodeAt(0)< 33 || passValue.charCodeAt(0) > 136)
        { err.innerHTML += '<p> <b>* Password </b> must start with a character! </p>';
          return false;
        }
   
        //check the password length
    if(passValue.length < 8){
        err.innerHTML += '<p> <b>* Password </b> must be atleast 8 characters long! </p>';
        return false;
    }
        //store number of digits and uppercase letters
    for (var i = 0; i <passValue.length; i++)
    {
        if(passValue.charCodeAt(i)>=65 && passValue.charCodeAt(i) <= 90)
        {upper +=1;}
        if(passValue.charCodeAt(i)>=48 && passValue.charCodeAt(i) <= 57)
         {digit +=1;}
       
    }
        //check if password contains atleast 1 digits and UpperCase letter
    if (upper == 0 || digit == 0){
        err.innerHTML += "<p> <b>* Password </b> must have atleast 1 digit and 1 uppercase </p>";
        document.getElementById('pass').focus();
        return false;
    }
    else{
        clearErrors();
        return true;
    }    
}
function validateConfirmPassword(){
    var err = document.querySelector('#errorplace');
    //get values in password and confirm password fields
    var passValue = document.getElementById('pass').value;
    var confirmpas = document.getElementById('conpass').value;
    //check if both password match
    if(passValue == confirmpas){
        clearErrors();
        return true;
    }
    else{
        err.innerHTML += '<p> <b>* Password </b> do not  match</p>';
        return false;
    } 
}
function validatePostalCode(){
    var err = document.querySelector('#errorplace');
    var posValue = document.getElementById('postal').value.trim();
    //check postal code length
    if(posValue.length < 6)
    {
        err.innerHTML += '<p> <b>* ONLY CANADIAN ZIP CODE ALLOWED </b><br/> (example: A1A1A1) <br/>Please enter the correct format </p>';
        return false;
    }
    for(var i = 0; i < posValue.length; i++ )
    {
        var x = i%2;
        //check if the letters and numbers in the postal code in teh right place
        if(x==0){
              if ((posValue.charCodeAt(i) < 65 || posValue.charCodeAt(i) > 90) && (posValue.charCodeAt(i) < 97 || posValue.charCodeAt(i) > 122))
                 {    err.innerHTML += '<p> <b>* ONLY CANADIAN ZIP CODE ALLOWED </b> <br/>(example: A1A1A1)  <br/>Please enter the correct format</p>';
                      return false;
                 }
        }
        if(x==1){
            if (posValue.charCodeAt(i) < 48 || posValue.charCodeAt(i) > 57)
            {    err.innerHTML += '<p> <b>* ONLY CANADIAN ZIP CODE ALLOWED </b><br/> (example: A1A1A1)  <br/>Please enter the correct format</p>';
                 return false;
            }
        }
    }
    clearErrors();
    return true;
}

function validatePhone(){
    var err = document.querySelector('#errorplace');
    var phoneValue = document.getElementById('phone').value.trim();
    var digit = 0;
    //store hyphen in 4th position
    var firstHyphen = phoneValue.substr(3,1);
    //store hyphen in 8th position
    var secondHyphen = phoneValue.substr(7,1);
    //count digits;
    for(var i = 0; i < phoneValue.length; i++)
    {
        if(phoneValue.charCodeAt(i)>=48 && phoneValue.charCodeAt(i) <= 57)
        {digit +=1;}
    }
   //check if digits are 10 and hyphens are present in the right place
    if(digit != 10 || (firstHyphen != '-' && secondHyphen != '-'))
    {
        err.innerHTML += '<p> <b>*Wrong Phone Number </b><br/> Phone Number must be 10 digits long and have hyphens in the 4th and 8th position <br/> (example: 111-111-1111)</p>';
        return false;
    }
    clearErrors()
    return true;
}
//function to clear the side panel
function clearErrors(){
    document.querySelector('#errorplace').innerHTML = '';
}
//call this function on form submit
function formValidation(){
    clearErrors();
    if (validateFname() && validateLname() && validateStreetname() && validateCity() && validatePassword() && validateConfirmPassword() && validatePhone() && validatePostalCode() && validateUserName())
    return true;
    else
    return false;
}