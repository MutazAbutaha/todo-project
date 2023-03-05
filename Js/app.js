'use strict'

let userName = prompt('What is your name?');
let userGender = prompt('Whats is your gender?');
let userAge = prompt('How old are you?');
let mrMs = ''

userGender == 'male' ? mrMs = 'Mr '+ userName 
: userGender == 'female' ? mrMs = 'Ms '+ userName
: mrMs = userName ;

userAge<=0 ? alert('Your age is wrong') : void(0) ;

let skipWelcoming = confirm('Are you sure you want the Welcoming message ?');

skipWelcoming == true ? alert('Welcome ' + mrMs ) : void(0);



