var dodge = {
	make: "Dodge",
	model: "Royal Lancer",
	year: 1957,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341			
};
			
var chevy = {
	make: "Chevrolet",
	model: "Pickup",
	year: 1948,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 1292	
};
			
var ford = {
	make: "Ford",
	model: "Cabriolet",
	year: 1936,
	color: "medium blue",
	passengers: 2,
	convertible: false,
	mileage: 88000	
};
			
var pontiac = {
	make: "Pontiac",
	model: "Safari",
	year: 1955,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021	
};
			
function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}
			
function displayResult(worthALook, car) {
	if (worthALook) {
		console.log("You gotta check this " + car.make + " " + car.model);
	} else {
		console.log("You should really pass on the the " + car.make + " " + car.model);
	}
}
			
var display = displayResult(prequal(chevy), chevy);
		