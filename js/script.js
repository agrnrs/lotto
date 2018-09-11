//slumptal mellan 1 och 39
//OBS dålig kod, mjlighet till dublikat => använd inte ;)


// borde göras med array
// lättare att göra unique nums
// sen nån gång.

var j;
function lottoRad() {
	for (var i=0; i<=6; i++) {
		
		let lottery = Math.floor(Math.random() * 38)+1;
	 	document.getElementById ("lotto_" + i).innerHTML = lottery;
	}
	alert("lottoraden klar!");
}
