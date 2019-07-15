
function checkEmpty(){

 		var input = document.getElementsByTagName("input");

 		for(var i =0; i<input.length;i++){
 			if(input[i].value==""){
 				input[i].classList.add("errorImg");
 				(input[i].nextSibling).style.display='block';
 			}
 			else{
 				// console.log("input[",i,"] has value:",input[i].value);
 				input[i].classList.remove("errorImg");
 				(input[i].nextSibling).style.display='none';
 			}
 		}	
}

function checkEmail(){
	var regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	var eAddress = document.getElementById("eAddress");
	
	if(eAddress.value!="" && !regex.test(eAddress.value)){
		eAddress.classList.add("errorImg"); 
		eAddress.classList.add("placeholderColor");
		(eAddress.nextSibling).style.display='block';
		changeEmailError();
		eAddress.setAttribute("placeholder","example@email.com");
		eAddress.value="";
		// console.log("wrong");
	}
}
function changeEmailError(){
	var p = document.getElementById("emailError");
	p.innerHTML="Looks like this is not an email";
}

function checkForm(){
	var check = checkEmpty() || checkEmail();
	return check;	
}
