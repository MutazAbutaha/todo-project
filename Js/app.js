'use strict'

var userName = prompt('What is your name?');
var gender = prompt('Whats is your gender?');
var userAge = prompt('How old are you?');
var mrs = ''
gender == 'male' ? mrs = 'Mr '+ userName 
: gender == 'female' ? mrs = 'Ms '+ userName
: mrs = userName ;

userAge<=0 ? alert('Your age is wrong') : alert('Welcome ' + mrs );

