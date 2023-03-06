'use strict'
let theName = '';
let theGender = '';
let theAge = 0;
let theSkiping = Boolean;
let theDrive = '';
let theMarried = '';
let theChildren = '';

 function userName() {
    theName = prompt('What is your name?') ;
    return theName;
 }  
userName()
   
function userGender() {
    theGender =  prompt('Whats is your gender?');
   return theGender;
}
userGender()

function userAge() {
    theAge=  prompt('How old are you?');
    return theAge;
}
userAge()

let mrMs = ''

theGender == 'male' ? mrMs = 'Mr '+ theName 
: theGender == 'female' ? mrMs = 'Ms '+ theName
: mrMs = theName ;

theAge <=0 ? alert('Your age is wrong') : null ;

function skipWelcoming() {
    theSkiping = confirm('Are you sure you want the Welcoming message ?');
}
skipWelcoming()

theSkiping == true ? alert('Welcome ' + mrMs ) : null ;

function userDrive() {
    theDrive = prompt('Do you drive ?');
    return theDrive;
}
userDrive()

function userMarried() {
    theMarried= prompt('Are you married ?');
    return theMarried;
}
userMarried()

function userChildren() {
    theChildren  = prompt('Do you have children ?');
    return theChildren;
}
userChildren()


theDrive == 'yes' || 'no' ? theDrive = theDrive : theDrive = "invalid";
theMarried == 'yes' || 'no' ? theMarried = theMarried : theMarried = "invalid";
theChildren == 'yes' || 'no' ? theChildren = theChildren : theChildren = "invalid";



let answersArray =[theName, theGender, theAge, theDrive, theMarried, theChildren];

for(let i=0 ; i < answersArray.length ; i++){
    console.log(answersArray[i]);
}
