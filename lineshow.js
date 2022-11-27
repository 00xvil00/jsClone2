var i = 0;
			
function lineShow(){
	
	i = i + 1;

	if (i == 1){
		document.getElementById("line1").style.display = "block";
		document.getElementById("line3").style.display = "block";
	}

	if (i == 2){
		document.getElementById("line2").style.display = "block";
	}

	if (i == 3){
		document.getElementById("line4").style.display = "block";
	}
}