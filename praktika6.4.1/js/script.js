const APIkey = 'b6e3fffce345ff642781561151cc05ea';
const form = document.forms[0];
const city = 'Milan'; // значением city должен быть город из инпута city form.elemnts.city.value
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;


const insert = document.querySelector('.degrees');

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false); 

xhr.send();

form.onsubmit = function(e) {
	e.preventDefault();
	if(xhr.status != 200) {
		console.log(xhr.status +' '+ xhr.statusText);
	} else {
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		insert.innerHTML = DATA.main.temp - 273;
	} 
}






