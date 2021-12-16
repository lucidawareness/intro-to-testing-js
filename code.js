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