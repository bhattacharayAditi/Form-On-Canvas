// access id using getElementById()
//reset function
function myfunction()
{
	document.getElementById("form").reset();
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phnumber = document.getElementById('phnumber');
const cmpname = document.getElementById('cmpname');

/* adding event listener for submit button */

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

//Input checking function

function checkInputs() {
	
	  /* Take input
	     trim to remove the whitespaces
    	*/

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phValue = phnumber.value.trim();
	const cmpnameValue = cmpname.value.trim();

	// username verification
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');		
	} 
	else if(usernameValue.length<=2)
	{
		setErrorFor(username,'Username Invalid')
	}
	else {
		setSuccessFor(username);
	}
	// email verification
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Invalid Email Id');
	} else {
		setSuccessFor(email);
	}

	// phone number verification

	if(phValue === '') {
		setErrorFor(phnumber, 'Phone Number cannot be blank');
	}
	else if(phValue.length!=10)
	{
		setErrorFor(phnumber,'Invalid Mobile Number')
	}	
	else 
	{
		setSuccessFor(phnumber);
	}

	//company name
	if(cmpnameValue === '') {
		setErrorFor(cmpname, 'Company Name cannot be blank');		
	} 
	else if(cmpnameValue.length<=2)
	{
		setErrorFor(cmpname,'Not a valid company name')
	}
	else {
		setSuccessFor(cmpname);
	}
	
//error function
function setErrorFor(input, message) {
	  const formControl = input.parentElement;
	  const small = formControl.querySelector('small');
	  formControl.className = 'form-control error';
	  small.innerText = message;
}
//success function
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
}
jQuery(document).ready(function($){

var windowXArray = [],
    windowYArray = [];

for (var i = 0; i < $(window).innerWidth(); i++) {
    windowXArray.push(i);
}
    
for (var i = 0; i < $(window).innerHeight(); i++) {
    windowYArray.push(i);
}

function randomPlacement(array) {
    var placement = array[Math.floor(Math.random()*array.length)];
    return placement;
}
    

var canvas = oCanvas.create({
   canvas: '#canvas',
   background: '#4592af',
   fps: 60
});

setInterval(function(){

var rectangle = canvas.display.ellipse({
   x: randomPlacement(windowXArray),
   y: randomPlacement(windowYArray),
   origin: { x: 'center', y: 'center' },
   radius: 0,
   fill: '#071a52',//bubble color
   opacity: 1
});

canvas.addChild(rectangle);

rectangle.animate({
  radius: 12,
  opacity: 0.1
}, {
  duration: '1000',
  easing: 'ease-in',
  callback: function () {
			this.remove();
		}
});

}, 100);

$(window).resize(function(){
canvas.width = $(window).innerWidth();
canvas.height = $(window).innerHeight();
});

$(window).resize();

});