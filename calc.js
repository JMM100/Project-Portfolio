/**
* Created with Website.
* User: JMorales
* Date: 2015-05-26
* Time: 05:38 PM
* To change this template use Tools | Templates.
*/

var keys = document.querySelectorAll("div.button");
for (var i = keys.length - 1; i >= 0; i--) {
	keys[i].addEventListener("click", mathify);

};


var output = document.getElementById("display");
var hasOpp = false;
var btnVal1 = 0;
var btnVal2 = 0;
var num1, num2, ourOpp, equation, equals;



function isAn(number){
	return !isNaN(number);
}

function mathify(){
	if(this.classList.contains("opp")){
		if (hasOpp!==true) {
		var btnVal = output.innerHTML;
		output.insertAdjacentHTML('beforeend', this.innerHTML);
		hasOpp = true;
		console.log("Went to the operator statement")
		};
	}
	else if(this.innerHTML === "="){
		console.log("It went to the equation statement")
		equation = display.innerHTML;
		for (var i =0; i <=equation.length; i++) {
			if(isNaN(equation[i])){
				console.log("got to the for loop")
				console.log(i)
				num1 = parseInt(equation.substring(0,i));
				console.log(num1)
				var e =i++
				num2 = parseInt(equation.substring(i,equation.length));
				console.log(num2)
				ourOpp = equation.substring(i--,i);
				console.log(ourOpp)
				console.log("got the variables down")
				switch(ourOpp){
			case "+":
				equals=num1+num2
				document.getElementById("display").innerHTML = equals;
				console.log(num1+num2)
				hasOpp=false;
				i=equation.length
				break;
			case "-":
				equals=num1-num2
				document.getElementById("display").innerHTML= equals;
				console.log(num1-num2)
				hasOpp=false;
				i=equation.length
				break;
			case "*":
			equals=num1*num2
				document.getElementById("display").innerHTML= equals;
				console.log(num1*num2)
				hasOpp=false;
				i=equation.length
				break;
			case '/':
			equals=num1/num2
				document.getElementById("display").innerHTML= equals;
				console.log(num1/num2)
				hasOpp=false;
				i=equation.length
				break;
			default:
			document.getElementById("display").innerHTML= ' ';
			}
		}
		// switch(ourOpp){
		// 	case "+":
		// 	document.getElementById("display").innerHTML= ' ';
		// 		document.getElementById("display").innerHTML = num1+num2;
		// 		console.log(num1+num2)
		// 		hasOpp=false;
		// 		break;
		// 	case "-":
		// 	document.getElementById("display").innerHTML= ' ';
		// 		document.getElementById("display").innerHTML= num1-num2;
		// 		console.log(num1-num2)
		// 		hasOpp=false;
		// 		break;
		// 	case "*":
		// 	document.getElementById("display").innerHTML= ' ';
		// 		document.getElementById("display").innerHTML=num1*num2;
		// 		console.log(num1*num2)
		// 		hasOpp=false;
		// 		break;
		// 	case '/':
		// 		document.getElementById("display").innerHTML= ' ';
		// 		document.getElementById("display").innerHTML= num1/num2;
		// 		console.log(num1/num2)
		// 		hasOpp=false;
		// 		break;
		// 	default:
		// 	document.getElementById("display").innerHTML= ' ';
		}
			// parseInt(i)
			// if ('display'.length[i]/1 !=='display'.length[i]) {
			// 	var Num1 =parseInt('display'.length[0,i-1])
			// 	if ('display'.length[i]=== "/") {
			// 		var operator= parseInt('display'.length[i])
			// 		i++
			// 		parseInt('display'.length[i,'display'.length])
			// 		};
			// 	};
			// 	if ('display'.length[i]=== "*") {
			// 		var operator= parseInt('display'.length[i])
			// 	};
			// 	if ('display'.length[i]=== "+") {
			// 		var operator= parseInt('display'.length[i])
			// 	};
			// 	if ('display'.length[i]=== "-") {
			// 		var operator= parseInt('display'.length[i])
			// 	};
			// };
		};
		if(this.innerHTML === "Clear"){
		console.log("clearing");
		document.getElementById('display').innerHTML= ' '
	}
	else{
	output.insertAdjacentHTML('beforeend', this.innerHTML);
	var btnVal = output.innerHTML;
	}
}