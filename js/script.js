//slumptal mellan 1 och 39
//OBS dålig kod, mjlighet till dublikat => använd inte ;)


// borde göras med array
// lättare att göra unique nums
// sen nån gång.


/*
//gamla koden
var j;
function lottoRad() {
	for (var i=0; i<=6; i++) {
		
		let lottery = Math.floor(Math.random() * 38)+1;
	 	document.getElementById ("lotto_" + i).innerHTML = lottery;
	}
	alert("lottoraden klar!");
}
*/

var l = 0; //ehrm, ett L, inte en siffra
function lottoRad() {
max = 38; //+1
var nums = [0,0,0,0,0,0,0];
var j = 0;

nums[0] = Math.floor(Math.random() * max)+1;
document.getElementById ("lotto_0").innerHTML = nums[0];
for (var i=1; i<=6; i++){
	j = Math.floor(Math.random() * max)+1;
	if (nums.includes(j)) {i--}
	else (nums[i] = j)
	document.getElementById ("lotto_" + i).innerHTML = nums[i];
}
l++;
document.getElementById ("loops").innerHTML = l;

// alert("rad ok");
}