const display = document.getElementById("display");

let memory = "";

function appendToDisplay(input) {
	display.value += input;
}

function calculate() {    
	try{
		display.value = eval(display.value);
	}
	catch(error){
		display.value = "Error";
	}
}

function clearDisplay(){
	display.value = "";
}

function storeToMem(){
	memory = display.value;
}

function recallMem(){
	display.value = memory;
}

function clearMem(){
	memory = "";
}

function addToMem(){
	const current = parseFloat(display.value);
	const memVal = parseFloat(memory) || 0;
	memory = memVal + current;
}