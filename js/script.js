//slumptal mellan 1 och 39
//OBS dålig kod, mjlighet till dublikat => använd inte ;)


// borde göras med array
// lättare att göra unique nums
// sen nån gång.

var j;
function lottoRad() {
	// init nums
		for (var i=0; i<=6; i++) {
		let lottery = 0;
	 	document.getElementById ("lotto_" + i).innerHTML = lottery;
	
	// new nums
	for (var i=0; i<=6; i++) {
		j = Math.floor(Math.random() * 38)+1;
		let lottery = j;
	 	document.getElementById ("lotto_" + i).innerHTML = lottery;
	}
	alert("lottoraden klar!");
}
