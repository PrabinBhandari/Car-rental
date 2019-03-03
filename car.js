function rentalcalculator(){
	function getType() {
		var str;
		str = prompt("Types of vehicles:\n E - Economy car\n C - Compact car\n S - Standard car\n F - Full-size car\n V -Van\n T - Truck\n U - SUV\n P - Sports Car\nPlease enter the code value for the type of car rented\n\n");
		return str;
	}
	function check(){
		type = getType();
		if (type == "E"){
		Economy();
		}
		else if (type == "C"){
		Compact();
		}
		else if (type == "S"){
		Standard();
		}
		else if (type == "F"){
		FullSize();
		}
		else if (type == "V"){
		Van();
		}
		else if (type == "T"){
		Truck();
		}
		else if (type == "U"){
		SUV();
		}
		else if (type == "P"){
		SportsCar();
		}
		else
		errorType();
	}
	check();
	function getDays(){
		var numDays = Number(prompt("Enter the number of days the vehicle was rented."));
		return numDays;
	}
	function getMiles(){
		var numMiles = Number(prompt("Enter the number of miles the vehicle travelled during the rental period."));
		return numMiles;
	}
	function Economy(){
        var days, miles, rentalfee, mileagefee, totalcharge;
        days = getDays();
  	    miles = getMiles();
        rentalfee = days * 29.99;
        mileagefee = miles * 0.25;
        totalcharge = rentalfee + mileagefee;
        document.write("Type: (E) Economy<br>");
        showCharges(days, rentalfee, miles, mileagefee, totalcharge);
	}
	function Compact(){
		var days, miles, rentalfee, mileagefee, totalcharge;
		days = getDays();
	    miles = getMiles();
		rentalfee = days * 34.99;
		mileagefee = miles * 0.27;
		totalcharge = rentalfee + mileagefee;
		document.write("Type: (C) Compact<br>");
		showCharges(days, rentalfee, miles, mileagefee, totalcharge);
	}
	function Standard(){
		var days, miles, rentalfee, mileagefee, totalcharge;
		days = getDays();
	    miles = getMiles();
		rentalfee = days * 39.99;
		mileagefee = miles * 0.3;
		totalcharge = rentalfee + mileagefee;
		document.write("Type: (S) Standard<br>");
		showCharges(days, rentalfee, miles, mileagefee, totalcharge);
	}
    function FullSize(){
        var days, miles, rentalfee, mileagefee, totalcharge;
        days = getDays();
        miles = getMiles();
        rentalfee = days * 44.99;
        mileagefee = miles * 0.35;
        totalcharge = rentalfee + mileagefee;
        document.write("Type: (F) FullSize<br>");
        showCharges(days, rentalfee, miles, mileagefee, totalcharge);
    }
    function Truck(){
  	    var days, miles, rentalfee, mileagefee, totalcharge;
        days = getDays();
        miles = getMiles();
        rentalfee = days * 54.99;
        mileagefee = miles * 0.35;
        totalcharge = rentalfee + mileagefee;
        document.write("Type: (T) Truck<br>");
        showCharges(days, rentalfee, miles, mileagefee, totalcharge);
    }
    function Van(){
  	    var subType = prompt("Enter the sub-type:\nTypes of Van:\n P - Passenger Van\n M - Mini Van");
  	    if (subType == "P"){
  	    passengerVan();
        }
  	    else if (subType == "M"){
  	    miniVan();
  	    }
  	    else
  	    errorSubType();
        }
    function SUV(){
        var sub = prompt("Enter the sub-type:\nTypes of SUV:\n L - Large SUV\n S - Small SUV");
  	    if (sub == "L"){
  	    largeSUV();
  	    }
  	    else if (sub == "S"){
  	    smallSUV();
  	    }
  	    else
  	    errorSubType();
	}
	function passengerVan(){
        var days, miles, rentalfee, mileagefee, totalcharge;
        days = getDays();
  	    miles = getMiles();
        rentalfee = days * 49.99;
        mileagefee = miles * 0.35;
        totalcharge = rentalfee + mileagefee;
        document.write("Type: (V) Van<br>");
        document.write("Subtype: (P) Passenger Van<br>");
        showCharges(days, rentalfee, miles, mileagefee, totalcharge);
	}
	function miniVan(){
		var days, miles, rentalfee, mileagefee, totalcharge;
		days = getDays();
		miles = getMiles();
		rentalfee = days * 59.99;
		mileagefee = miles * 0.35;
		totalcharge = rentalfee + mileagefee;
		document.write("Type: (V) Van<br>");
		document.write("Subtype: (M) Mini Van<br>");
		showCharges(days, rentalfee, miles, mileagefee, totalcharge);
	}
	function smallSUV(){
		var days, miles, rentalfee, mileagefee, totalcharge;
		days = getDays();
		miles = getMiles();
		rentalfee = days * 54.99;
		mileagefee = miles * 0.37;
		totalcharge = rentalfee + mileagefee;
		document.write("Type: (U) SUV<br>");
		document.write("Subtype: (S) Small SUV<br>");
		showCharges(days, rentalfee, miles, mileagefee, totalcharge);
	}
	function largeSUV(){
		var days, miles, rentalfee, mileagefee, totalcharge;
		days = getDays();
		miles = getMiles();
		rentalfee = days * 64.99;
		mileagefee = miles * 0.37;
		totalcharge = rentalfee + mileagefee;
		document.write("Type: (U) SUV<br>");
		document.write("Subtype: (L) Large SUV<br>");
		showCharges(days, rentalfee, miles, mileagefee, totalcharge);
	}
	function SportsCar(){
		var subType = prompt("Enter the sub-type:\nTypes of Sports Car:\n R - Regular Sports Car\n L - Luxury Sports Car");
  	    if (subType == "R"){
  	    regularCar();
        }
  	    else if (subType == "L"){
  	    luxuryCar();
  	    }
  	    else
  	    errorSubType();
	}
	function regularCar(){
		var days, miles, rentalfee, mileagefee, age, insurance, totalcharge;
		days = getDays();
		miles = getMiles();
		rentalfee = days * 99;
		mileagefee = miles * 0.45;
		age = Number(prompt("Enter the age of driver."));
		if (age < 25){
			insurance = 55;
		}
		else{
		    insurance = 20;
		}
		totalcharge = rentalfee + mileagefee + insurance;
		document.write("Type: (S) Sports Car<br>");
		document.write("Subtype: (R) Regular Sports Car<br>");
		showCharges1 (days, rentalfee, miles, mileagefee, age, insurance, totalcharge);
	}
	function luxuryCar(){
		var days, miles, rentalfee, mileagefee, age, insurance, totalcharge;
		days = getDays();
		miles = getMiles();
		rentalfee = days * 159.99;
		mileagefee = miles * 0.55;
		age = Number(prompt("Enter the age of driver."));
		if (age < 45){
			insurance = 200;
		}
		else{
			insurance = 75;
		}
		totalcharge = rentalfee + mileagefee + insurance;
		document.write("Type: (S) Sports Car<br>");
		document.write("Subtype: (L) Luxury Sports Car<br>");
		showCharges1 (days, rentalfee, miles, mileagefee, age, insurance, totalcharge);
	}
	function errorType(){
		document.write("*** Invalid Type ***");
    }
	function errorSubType(){
		document.write("*** Invalid SubType ***");
	}
	function showCharges (days, rentalfee, miles, mileagefee, totalcharge) {
		document.write("Days: " + days + "<br>");
		document.write("Rental Fee: $" + rentalfee + "<br>");
		document.write("Miles: " + miles + "<br>");
		document.write("Mileage Fee: $" + mileagefee + "<br>");
		document.write("Total: $" + totalcharge + "<br><hr>");
	}
	function showCharges1 (days, rentalfee, miles, mileagefee, age, insurance, totalcharge) {
		document.write("Days: " + days + "<br>");
		document.write("Rental Fee: $" + rentalfee + "<br>");
		document.write("Miles: " + miles + "<br>");
		document.write("Mileage Fee: $" + mileagefee + "<br>");
		document.write("Driver's age: " + age + "<br>");
		document.write("Insurance: $" + insurance + "<br>");
		document.write("Total: $" + totalcharge + "<br><hr>");
	}
}
rentalcalculator();