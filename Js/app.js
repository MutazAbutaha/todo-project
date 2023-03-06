'use strict'



let theName = '';
let theGender = '';
let theAge = 0;
let theSkiping = Boolean;
let theDrive = '';
let theMarried = '';
let theChildren = '';
let mrMs = '';
let answersArray= [];


userName()
userGender()
userAge()
mrMss()
skipWelcoming()
userDrive()
userMarried()
userChildren()
invalid()
pushArray()
printArray()




//Functions 
 function userName() {
    theName = prompt('What is your name?') ;
    return theName;
 }  

   
function userGender() {
    theGender =  prompt('Whats is your gender?');
   return theGender;
}


function userAge() {
    theAge=  prompt('How old are you?');
    return theAge;
}



function mrMss() {
    theGender == 'male' ? mrMs = 'Mr '+ theName 
    : theGender == 'female' ? mrMs = 'Ms '+ theName
    : mrMs = theName ;
    theAge <=0 ? alert('Your age is wrong') : null ;
}



function skipWelcoming() {
    theSkiping = confirm('Are you sure you want the Welcoming message ?');
    theSkiping == true ? alert('Welcome ' + mrMs ) : null ;
}




function userDrive() {
    theDrive = prompt('Do you drive ?');
    return theDrive;
}


function userMarried() {
    theMarried= prompt('Are you married ?');
    return theMarried;
}


function userChildren() {
    theChildren  = prompt('Do you have children ?');
    return theChildren;
}


function invalid() {
    theDrive == "" ? theDrive = "invalid" : null ;
    theMarried == "" ? theMarried = "invalid" : null ;
    theChildren == "" ? theChildren = "invalid" : null ;
}

function pushArray() {
    answersArray.push(theName, theGender, theAge, theDrive, theMarried, theChildren);
}

function printArray() {
    for(let i=0 ; i < answersArray.length ; i++){
    console.log(answersArray[i]);
    }
}
