const APIkey = 'b6e3fffce345ff642781561151cc05ea';
const form = document.forms[0];
const insert = document.querySelector('.degrees');

form.onsubmit = function(e) {
	e.preventDefault();
	var city = form.elements.city.value;
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;
	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false); 

	xhr.send();

	if(xhr.status != 200) {
		console.log(xhr.status +' '+ xhr.statusText);
	} else {
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		insert.innerHTML = DATA.main.temp - 273;
	} 
}









