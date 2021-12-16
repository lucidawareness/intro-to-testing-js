// helloWorld function 
function helloWorld() {
	return "Hello, World!";
}

function sayHello(input) {
	if (input === undefined || input === false) {
		return "Hello, World!"
	} else {
		return "Hello, " + input + "!";
	}
}

function isFive(input) {
	if (input === 5 || input === "5"){
		return true;
	} else {
		return false;
	}
}

function isEven(input){
	if (typeof input === "boolean"){
		return false;
	} else if (input % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function isVowel(input){
	if (input === "a" || input === "A" || input === "e" || input === "i" || input === "o" || input === "u" || input === "E" || input === "I" || input === "O" || input === "U" ){
		return true;
	} else {
		return false;
	}
}

function add(num1, num2){
	if(isNaN(num1) || isNaN(num2)){
		return "NaN";
	} else {
		return parseInt(num1) + parseInt(num2);
	}
}

