var a = 3;
var b = 1;
var value = (a * a) - (2 * a * b) + (b * b);
console.log(value);

if (value > 0) {
	console.log('wynik dodatni');
} else if (value < 0) {
	console.log('wynik ujemny');
} else {
	console.log('brak wyniku');
}

if (value == 0) {
	console.log('wynik jest równy zero');
} else {
	console.log('wynik nie jest równy zero');
}