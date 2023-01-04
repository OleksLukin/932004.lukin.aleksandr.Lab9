
var num1 = "0";
var num2 = "0";
var optype = -1;
var CanPlacedot = true;

var Inputnum1 = document.getElementById("Input1");
var Inputnum2 = document.getElementById("Input2");
var InuptOp = document.getElementById("InputOp");

function ChangeNumber(Newnum){
	if(optype == -1){
	if(num1 === "0"){
		num1 = Newnum;
	}
	else{
		num1 = num1+Newnum;
	}
	Inputnum1.textContent = num1;
}
else{
	if(num2 === "0"){
		num2 = Newnum;
	}
	else{
		num2 = num2+Newnum;
	}
	Inputnum2.textContent = num2;
}
}

function addDot(){
	if(optype == -1){
		if(CanPlacedot === true){
			CanPlacedot = false;
			num1 = num1+".";
			Inputnum1.textContent = num1;
		}
	}
	else{
		if(CanPlacedot === true){
			CanPlacedot = false;
			num2 = num2+".";
			Inputnum2.textContent = num2;
		}
	}
}

function addOp(type){
	if(optype === -1){
		if(type === 0){
			InputOp.textContent = "+"
		}
		else if(type === 1){
			InputOp.textContent = "-"
		}
		else if(type === 2){
			InputOp.textContent = "*"
		}
		else if(type === 3){
			InputOp.textContent = "/"
		}
		optype = type;
		Inputnum1.style.color = "Gray";
		InputOp.style.color = "Gray";
		Inputnum2.textContent = "0";
		CanPlacedot = true;
	} 
	else{
		Result();
		addOp(type);
	}
}

function Result(){
	if(optype !== -1){
		if(optype === 0){
			num1 = (parseFloat(num1) + parseFloat(num2)).toString();
		} 
		else if(optype === 1){
			num1 = (parseFloat(num1) - parseFloat(num2)).toString();
		}
		else if(optype === 2){
			num1 = (parseFloat(num1) * parseFloat(num2)).toString();
		}
		else if(optype === 3){
			num1 = (parseFloat(num1) / parseFloat(num2)).toString();
		}
						
		CanPlacedot = (parseFloat(num1) % 1 === 0);
		num2 = "0";
		optype = -1;
		Inputnum1.textContent = num1;
		Inputnum1.style.color = "Black";
		Inputnum2.textContent = "";
		Inputnum2.style.color = "Black";
		InputOp.textContent = "";
	}
}

function RemoveLast(){
	if(optype === -1){
		if(num1 !== "0"){
			if(num1.length == 1	){
				num1 = "0";
			}
			else{
				num1 = num1.substring(0, num1.length-1);
			}
			Inputnum1.textContent = num1;
		}
	}
	else{
		if(num2 ==="0"){
			Inputnum1.style.color = "Black";
			Inputnum2.textContent = "";
			InputOp.textContent = "";
			optype = -1;
		}else{
			if(num2.length == 1	){
				num2 = "0";
			}
			else{
				num2 = num2.substring(0, num2.length-1);
			}
			Inputnum2.textContent = num2;
		}
	}
}

function Reset(){
	num1 = "0";
	num2 = "0";
	optype = -1;
	CanPlacedot = true;
	Inputnum1.textContent = "0";
	Inputnum1.style.color = "Black";
	Inputnum2.textContent = "";
	Inputnum2.style.color = "Black";
	InputOp.textContent = "";
}