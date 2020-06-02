function calculateInsurance(){
	var insurance = 0;

	var horse = Number(document.getElementById("horse").value);
	var age   = Number(document.getElementById("age").value);
	var yname = document.getElementById("yname").value;
	var country = document.getElementById("country").value;

	if(country=="austria") {

		insurance = horse *100 / age +50;
	} 
	
	else if(country=="hungary") {

		insurance = horse *120 / age +100;
	} 
	
	else if(country=="greece") {

		insurance = horse *150 / (age +3) +50;
	}
	

	document.getElementById("result").innerHTML = yname + ", your insurance costs " + insurance + " € ";
}

